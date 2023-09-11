"use client";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function StockMarkets() {
  const [data, setData] = useState()

  const url = 'https://stock-analysis.p.rapidapi.com/api/v1/resources/earnings-history?ticker=AAPL';

  useEffect(() =>
    {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6ec2bad9bdmsh0edbdf1dbca64adp16c629jsn4235a5a2d52a',
          'X-RapidAPI-Host': 'stock-analysis.p.rapidapi.com'
        }
      }

      fetch(url, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
    },[]
  )
  return (
    <div className="w-full flex flex-col mx-auto p-10 justify-center">
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-evenly">
        <h1 className="text-xl ">Stock Analysis</h1>
        <Link
          href="/"
          className="flex bg-slate-800 items-center p-2 justify-center"
        >
          {" "}
          <AiOutlineHome className="text-xl mr-2" /> <h1>Home</h1>
        </Link>
      </div>
      <div></div>
    </div>
  );
}
