import React from "react";
import { client } from "../lib/client";
import { LoanCalculator, RTopStories, TrendCard } from "../components";
import Link from "next/link";
import Slider from "../components/Slider";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import ReactPlayer from "react-player";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoPlay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

const Home = ({ trending, heros, rwentopstories }) => (
  <div>
    <Head>
      <title>
        Uquicks | Blog, Rwenzori Tv, Rwenzori Girls & Loans Calculator
      </title>
      <meta
        name="keywords"
        content="Uquicks, rwenzori tv Live,rwenzori loans, rwenzori girls, loans calculator, rwenzori property and land consultants, "
      />
      <meta
        name="description"
        content="Get useful tech, health and educative updates, rwenzori tv live stream,  rwenzori top stories, hot gossip, and date the best and real girls from rwenzori"
      />
      <meta
        property="og:title"
        content="Uquicks | Blog, Rwenzori Tv, Rwenzori Girls & Loans Calculator"
      />
      <link rel="icon" href="/uquickslogo.png" />
    </Head>
    <div className="gap-2">
      <div className="bg-bg h-20 border-b-2 border-t-2 border-gray-500"></div>
      <div>
        <OwlCarousel
          className="owl-theme"
          loop
          autoPlay={true}
          nav={true}
          navText={false}
          animateIn={true}
          {...options}
        >
          {heros?.map((hero) => (
            <Slider key={heros._id} hero={hero} />
          ))}
        </OwlCarousel>
      </div>

      <div className="products-heading ">
        <Link href="/TrendingPosts">
          <h2 className="mt-10 mb-4 hover:text-slate-500 cursor-pointer hover:underline">
            Trending Posts
          </h2>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {trending?.map((trend) => (
          <TrendCard key={trending._id} trend={trend} />
        ))}
      </div>

      <div className="products-heading">
        <Link href="/LoanCalculator">
          <h2 className="mt-10 mb-2 hover:text-slate-500 cursor-pointer hover:underline">
            Loan Calculator
          </h2>
        </Link>
        <div className="flex flex-wrap gap-4 px-4 justify-center">
          <LoanCalculator />
        </div>
      </div>

      <div className="products-heading">
        <Link href="/Resources">
          <h2 className="mt-10 mb-2 hover:text-slate-500 cursor-pointer hover:underline">
            Rwenzori Tv Live Stream
          </h2>
        </Link>
        <div className="flex justify-center">
          <img src="banner-bg.png" alt="pic" className="w-[500px]" />
        </div>
        {/* <ReactPlayer src="https://youtube.com/" /> */}
      </div>
      <div className="products-heading">
        <h2 className="mt-10  mb-2 hover:text-slate-500 cursor-pointer hover:underline">
          Rwenzoris Top Stories
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {rwentopstories?.map((rwentopstory) => (
            <RTopStories key={rwentopstories._id} rwentopstory={rwentopstory} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query =
    '*[_type == "trending" && publishedAt < now()] | order(publishedAt desc)';
  const trending = await client.fetch(query);

  const herosQuery =
    '*[_type == "heros" && publishedAt < now()] | order(publishedAt desc)';
  const heros = await client.fetch(herosQuery);

  const rwentopstoriesQuery =
    '*[_type == "rwentopstories" && publishedAt < now()] | order(publishedAt desc)';
  const rwentopstories = await client.fetch(rwentopstoriesQuery);

  return {
    props: {
      trending,
      heros,
      rwentopstories,
    },
  };
};

export default Home;
