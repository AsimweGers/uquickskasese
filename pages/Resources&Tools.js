import Head from "next/head";
import Link from "next/link";
import React from "react";
import { HowTos } from "../components";
import { client } from "../lib/client";

const Resources = ({ howtos }) => (
  <>
    <Head>
      <title>Resources & Tools - Uquicks</title>
      <meta
        name="keywords"
        content="Welcome to avariety of How To posts like make money online,free internet, data tricks, tech posts, quick loan tutorials, insurance, electricity, anotrny, mortage and much more, sell anything in kasese, buy online kasese, SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more GleanAssist, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
      />
      <meta
        name="description"
        content="Welcome to avariety of latest How To posts like make money online,free internet, data tricks, tech posts, quick loan tutorials, insurance, electricity, anotrny, mortage and much more"
      />
      <meta property="og:title" content="Resources & Tools - Uquicks" />
      <link rel="icon" href="/uquickslogo.png" />
    </Head>

    <div className="products-heading">
        <h2 className="mt-10 mb-2 hover:text-slate-500 cursor-pointer hover:underline">
          Resources & Tools
        </h2>
      <div className="flex flex-wrap gap-4 px-4 justify-center">
        <Link href="/Uneb">
          <div className="flex flex-col items-center mb-5 lg:mb-0 cursor-pointer">
            {" "}
            <img
              src="banner-bg.png"
              alt="walk in grace child ministries"
              className="w-72"
            />
            <h1 className="text-2xl text-center font-medium text-pink-500 hover:text-pink-300">
              Top Loan Apps
            </h1>
            <p className="py-2 text-lg text-center w-48 ">
              Checkout Real loan offering Apps
            </p>
          </div>
        </Link>
        <Link href="/Ubteb">
          <div className="flex flex-col items-center mb-5 lg:mb-0 cursor-pointer">
            {" "}
            <img
              src="banner-bg.png"
              alt="walk in grace child ministries"
              className="w-72"
            />
            <h1 className="text-2xl text-center font-medium text-pink-500 hover:text-pink-300">
              Free Data Apps
            </h1>
            <p className="py-2 text-lg text-center w-48 ">
              Checkout the fast and free data giving Apps
            </p>
          </div>
        </Link>
        <Link href="/Unmeb">
          <div className="flex flex-col items-center mb-5 lg:mb-0 cursor-pointer">
            {" "}
            <img
              src="banner-bg.png"
              alt="walk in grace child ministries"
              className="w-72"
            />
            <h1 className="text-2xl text-center font-medium text-pink-500 hover:text-pink-300">
              Verified money earning Apps
            </h1>
            <p className="py-2 text-lg text-center w-48 ">
              Checkout Verified money earning Apps
            </p>
          </div>
        </Link>
      </div>
    </div>
  </>
);

// export const getServerSideProps = async () => {
//   const query =
//     '*[_type == "howtos" && publishedAt < now()] | order(publishedAt desc)';
//   const howtos = await client.fetch(query);

//   return {
//     props: {
//       howtos,
//     },
//   };
// };

export default Resources;
