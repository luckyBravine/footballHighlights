"use client";

import Link from "next/link";
import { RiExchangeFundsLine } from "react-icons/ri";
import {SiChatbot} from "react-icons/si"
import {FaLayerGroup} from "react-icons/fa"
import {BiSolidBookOpen, BiCameraMovie } from "react-icons/bi"
import {VscGraph} from "react-icons/vsc"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-24">
      <h1>API Collection ✨</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-center justify-between">
        <Link
          href="/SureOdds"
          className="w-[300px] h-[200px] p-4 flex flex-col justify-center items-center mx-auto bg-slate-800 hover:bg-slate-600"
        >
          <RiExchangeFundsLine className="text-6xl mb-3" />
          <h1 className="font-poppins">SureOdds</h1>
        </Link>
        <Link
          href="/FoodRecipe"
          className="w-[300px] h-[200px] p-4 flex flex-col justify-center items-center mx-auto bg-slate-800 hover:bg-slate-600"
        >
          <BiSolidBookOpen className="text-6xl mb-3"  />
          <h1>FoodRecipe</h1>
        </Link>
        <Link
          href="/Movies"
          className="w-[300px] h-[200px] p-4 flex flex-col justify-center items-center mx-auto bg-slate-800 hover:bg-slate-600"
        >
          <BiCameraMovie className="text-6xl mb-3"  />
          <h1>Movies</h1>
        </Link>
        <Link
          href="/StockMarkets"
          className="w-[300px] h-[200px] p-4 flex flex-col justify-center items-center mx-auto bg-slate-800 hover:bg-slate-600"
        >
          <VscGraph className="text-6xl mb-3"  />
          <h1>StockMarkets</h1>
        </Link>
        <Link
          href="/Dictionary"
          className="w-[300px] h-[200px] p-4 flex flex-col justify-center items-center mx-auto bg-slate-800 hover:bg-slate-600"
        >
          <FaLayerGroup className="text-6xl mb-3"  />
          <h1>Dictionary</h1>
        </Link>
        <Link
          href="/AIChatBot"
          className="w-[300px] h-[200px] p-4 flex flex-col justify-center items-center mx-auto bg-slate-800 hover:bg-slate-600"
        >
          <SiChatbot className="text-6xl mb-3"  />
          <h1>AIChatBot</h1>
        </Link>
      </div>
    </main>
  );
}
