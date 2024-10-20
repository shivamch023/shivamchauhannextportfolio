import { ConnectDB } from "@/app/lib/config/db";
import PortfolioModel from "@/app/lib/models/PortfolioModel";
import { writeFile } from "fs/promises";
const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// API ENDPOINT FOR UPLOADING PROJECT
export async function POST(request:any) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);

  // Save image to the public folder
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);

  const imgUrl = `/${timestamp}_${image.name}`;

  // Prepare portfolio data with the provided structure
  const portfolioData = {
    id: `${formData.get("id")}`,
    title: `${formData.get("title")}`,
    image: `${imgUrl}`,
    description: `${formData.get("description")}`,
    description1: `${formData.get("description1")}`, // Additional description
    videoImg: `${formData.get("videoImg")}`,
    github: `${formData.get("github")}`, // GitHub link
    live: `${formData.get("live")}`, // Live link
    // createdAt: `${formData.get("createdAt")}`,
    nestedData: {
      images: formData.getAll("images").map((img:any) => `${img}`), // List of images
      video: `${formData.get("videoUrl")}`, // Video URL
    },
    nestedSkill: {
      html: `${formData.get("html")}`, // HTML skill
      css: `${formData.get("css")}`, // CSS skill
      javascript: `${formData.get("javascript")}`, // JavaScript skill
      react: `${formData.get("react")}`, // React skill
      tailwind: `${formData.get("tailwind")}`, // Tailwind CSS skill
      apiIntegration: `${formData.get("apiIntegration")}`, // API Integration skill
    },
  };

  await PortfolioModel.create(portfolioData);
  console.log("Portfolio saved");

  return NextResponse.json({ success: true, msg: "Project added" });
}

export async function GET(request: any) {
  const { searchParams } = new URL(request.url); 
  const projectId = searchParams.get("id"); 

  try {
    if (projectId) {
      const project = await PortfolioModel.findById(projectId);
      if (!project) {
        return NextResponse.json({ success: false, msg: "Project not found" }, { status: 404 });
      }
      return NextResponse.json(project); 
    }

    const projects = await PortfolioModel.find(); 
    return NextResponse.json(projects); 

  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ success: false, msg: "Failed to fetch projects" }, { status: 500 });
  }
}


export async function DELETE(request: any) {
  const { searchParams } = new URL(request.url);
  const projectId = searchParams.get("id"); // Get the project ID from the request URL

  if (!projectId) {
    return NextResponse.json(
      { success: false, msg: "Project ID not provided" },
      { status: 400 }
    );
  }

  try {
    // Find the project by ID and delete it
    const deletedProject = await PortfolioModel.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return NextResponse.json(
        { success: false, msg: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, msg: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { success: false, msg: "Failed to delete project" },
      { status: 500 }
    );
  }
}






