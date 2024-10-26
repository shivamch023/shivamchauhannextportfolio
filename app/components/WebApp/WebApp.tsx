"use client";
import { usePathname } from "next/navigation";
import React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTopBottom/ScrollToTopBottom";
import Profile from "../Profile/Profile";

const WebApp = ({ children }: any) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <NavBar />}
      <section style={{ paddingTop: !isAdminRoute ? "4rem" : "0" }}>
        {children}
      </section>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <ScrollToTopButton />}
      {!isAdminRoute && <Profile />}
    </>
  );
};

export default WebApp;
