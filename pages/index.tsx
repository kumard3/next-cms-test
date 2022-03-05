/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";

export default function Home({ res }: any) {

  console.log(res);
  return (
    <div className="bg-black min-h-screen text-white/80">
      <h1 className="text-center text-6xl py-10 ">
        Remix Basic Data fetching{" "}
      </h1>
      <div className="grid justify-center flex-col items-center  ">
        {res?.map((n: any, index: React.Key | null | undefined) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch("https://astroyantra.com/wp-json/wp/v2/posts/");
  const res = await result.json();

  return {
    props: res,
  };
};
