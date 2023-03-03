import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import TimeAgo from "react-timeago";

const Post = ({
  trend: { image, title, slug, author, category, publishedAt },
}) => {
  return (
    <div className="">
      <Link href={`/trendingposts/${slug.current}`}>
        <div className="">
          <img src={urlFor(image && image[0])} width={300} className="" />
          <div className="border-t-2 mt-1 max-w-[300px] ">
            <p className="text-twitter font-semibold text-lg hover:underline">
              {title}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 py-1">
                <p className="text-base font-light text-soil">{author}</p>
              </div>
              <div>
                <TimeAgo
                  date={publishedAt}
                  className="text-sm text-soil font-mono font-light"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
