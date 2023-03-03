import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import TimeAgo from "react-timeago";

const Post = ({ movie: { image, title, slug, number } }) => {
  return (
    <div className="p-2">
      <Link href={`/movieposts/${slug.current}`}>
        <div className="flex items-center ">
          <p className="p-4">{number}</p>
          <div className="">
            <img src={urlFor(image && image[0])} width={300} className="" />
            <div className="border-t-2 mt-1 max-w-[200px] ">
              <p className="text-twitter font-semibold text-lg hover:underline">
                {title}
              </p>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
