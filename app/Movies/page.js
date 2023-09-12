// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { AiOutlineHome } from "react-icons/ai";

// export default function Movies() {
//   const [endPoint, setEndPoint] = useState("");
//   const [data, setData] = useState([]);
//   const [finalPoint, setFinalPoint] = useState("");

//   const url = `https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`;
//   useEffect(() => {
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "6ec2bad9bdmsh0edbdf1dbca64adp16c629jsn4235a5a2d52a",
//         "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//       },
//     };

//     fetch(url, options)
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//         setData(response);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, [finalPoint]);

//   const onChangeHandler = (e) => {
//     setEndPoint(e.target.value);
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     setFinalPoint(endPoint);
//   };
//   return (
//     <div className="w-full flex flex-col mx-auto p-10 justify-center">
//       <div className="w-full flex flex-col md:flex-row justify-center md:justify-evenly">
//         <h1 className="text-xl ">Market</h1>
//         <Link
//           href="/"
//           className="flex bg-slate-800 items-center p-2 justify-center rounded-md"
//         >
//           {" "}
//           <AiOutlineHome className="text-xl" />
//         </Link>
//       </div>
//       <div>
//         <form onSubmit={submitHandler} className="mt-4">
//           <input type="text" value={endPoint} onChange={onChangeHandler} placeholder="Search here" className=" bg-slate-600 outline-none rounded-md p-1 mr-4" />
//           <button type="submit" className="bg-slate-800 rounded-md p-1">Submit</button>
//         </form>
//         {Array.isArray(data) ? (
//           data.map((item) => (
//             <div key={item.d}>
//               <Image src={item.i.imageUrl} alt={d.l} width="300" height="200" />
//               <p>{item.l}</p>
//             </div>
//           ))
//         ) : (
//           <p>No data available</p>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";

export default function Movies() {
  const [data, setData] = useState();
  return (
    <div className="w-full flex flex-col mx-auto p-10 justify-center">
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-evenly">
        <h1 className="text-xl ">Movies</h1>
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

