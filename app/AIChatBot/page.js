"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";

export default function Movies() {
  const [data, setData] = useState();
  return (
    <div className="w-full flex flex-col mx-auto p-10 justify-center">
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-evenly">
        <h1 className="text-xl ">AIChatBot</h1>
        <Link
          href="/"
          className="flex bg-slate-800 items-center p-2 justify-center rounded-md"
        >
          {" "}
          <AiOutlineHome className="text-xl" />
        </Link>
      </div>
      <div>
      </div>
    </div>
  );
}

