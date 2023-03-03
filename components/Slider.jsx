import React, { useState, useEffect } from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Slider = ({ hero: { image, title, slug, author, category, hint } }) => {
  return (
    <div className="grid md:grid-cols-2 gap-2 md:p-2">
      <div className="image  h-[400px]">
        <img src={urlFor(image && image[0])} width={500} className="w-72" />
      </div>
      <div className="info flex justify-center flex-col items-center">
        <div className="cat">
          <Link href={`/heroposts/${slug.current}`}>
            <p className="text-orange-600 hover:text-orange-800">{category}</p>
          </Link>
        </div>
        <div className="title">
          <Link href={`/heroposts/${slug.current}`}>
            <h1 className="text-2xl md:text-4xl font-semibold p-3 md:p-0 text-gray-800 hover:text-gray-600">
              {title}
            </h1>
          </Link>
        </div>
        <div className="description p-2 md:p-0">
          <p className="text-gray-500">{hint}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
