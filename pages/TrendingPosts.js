import Head from "next/head";
import React from "react";
import { TrendCard } from "../components";
import { client } from "../lib/client";

const TrendingPosts = ({ trending }) => (
  <>
    <Head>
      <title>Uquicks Blog</title>
      <meta
        name="keywords"
        content="Welcome to avariety of Blog posts like make money online,free internet, data tricks, tech posts, quick loan tutorials, insurance, electricity, anotrny, mortage and much more, sell anything in kasese, buy online kasese, SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more GleanAssist, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
      />
      <meta
        name="description"
        content="Welcome to avariety of trending Blog posts like make money online,free internet, data tricks, tech posts, quick loan tutorials, insurance, electricity, anotrny, mortage and much more"
      />
      <meta property="og:title" content="Uquicks Blog" />
      <link rel="icon" href="/gleanassist.png" />
    </Head>

    <div className="p-2">
      <div className="products-heading">
        <h2>Recent Posts</h2>
        <p>
          How to's | Free Internet | Make Money Online | Electricity | Sports |
          Health | Science | Tech | Insurance | Loans | Mortgage | Antorny
        </p>
      </div>

      <div className="products-container">
        {trending?.map((trend) => (
          <TrendCard key={trending._id} trend={trend} />
        ))}
      </div>
    </div>
  </>
);

export const getServerSideProps = async () => {
  const query =
    '*[_type == "trending" && publishedAt < now()] | order(publishedAt desc)';
  const trending = await client.fetch(query);

  return {
    props: {
      trending,
    },
  };
};

export default TrendingPosts;
