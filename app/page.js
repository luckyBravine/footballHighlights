"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      // year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      // timeZoneName: 'short',
    };
    return date.toLocaleString(undefined, options);
  };

  const url = "https://free-football-soccer-videos.p.rapidapi.com/";
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6ec2bad9bdmsh0edbdf1dbca64adp16c629jsn4235a5a2d52a",
        "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((response) =>
        // console.log(response)
        setData(response)
      )
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-between">
      {data &&
        data.map((d) => {
          return (
            <div key={d.id} className="flex flex-col p-8 my-2 bg-slate-800">
              {isPlaying ? (
                <video
                  controls
                  autoPlay
                  src={d.videos}
                  width="640"
                  height="360"
                  onClick={togglePlay}
                />
              ) : (
                <Image
                  src={d.thumbnail}
                  alt="Video Thumbnail"
                  onClick={togglePlay}
                  style={{ cursor: "pointer" }}
                  width="300"
                  height="300"
                />
              )}
              <h1 className="text-white">{d.name}</h1>
              <h2 className="text-white">{d.title}</h2>
              <span className="text-white">{formatDate(d.date)}</span>
            </div>
          );
        })}
        </div>
    </main>
  );
}
