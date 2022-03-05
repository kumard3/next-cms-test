/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://astroyantra.com/wp-json/wp/v2/posts/"
      );

      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className="bg-black min-h-screen text-white/80">
      <h1 className="text-center text-6xl py-10 ">
        Remix Basic Data fetching{" "}
      </h1>
      <div className="grid justify-center flex-col items-center  ">
        {data?.map((n: any,index) => {
          return (
            <div key={index}>
              <main dangerouslySetInnerHTML={{ __html: n.content.rendered }} />
            </div>
          );
        })}
     </div>
    </div>
  );
}
