"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SecretAccessPage() {
  const [inputKey, setInputKey] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: inputKey }),
    });

    if (response.ok) {
      router.push("/admin"); // Redirect on success
    } else {
      const data = await response.json();
      alert(data.message || "Invalid Secret Key");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-[10rem] flex items-center justify-center flex-col gap-4"
    >
      <label>
        <div className="text-white mb-2">Enter Key:</div>
        <input
          type="password"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          className="py-2 px-4 rounded outline-none"
        />
      </label>
      <button className="bg-white py-2 px-6 rounded" type="submit">
        Submit
      </button>
    </form>
  );
}
