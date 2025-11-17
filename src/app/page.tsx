// these are imports for React components that let us make a button
"use client";
import { useState } from "react";



export default function Home() {
  const [count, setCount] = useState<number>(0);
  let username: string = "Oliver";

  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-200">

      <h1 className="text-4xl font-bold text-red-600">
        Your name is {username} <br/>
        The current running count is {count}
      </h1>

      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Push me!
      </button>

      <button
        onClick={() => setCount(count - 1)}
        className="px-6 py-3 bg-red-500 text-black rounded-md shadow hover:bg-red-600 transition ml-4"
      >  
      The decreasing button
      </button>


    </main>
  );
}
