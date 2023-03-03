import Head from "next/head";
import Link from "next/link";
import React from "react";
import { MovieCard, Movies, RTopStories, SongCard } from "../components";
import { client } from "../lib/client";

const RwenzoriTv = ({ rwentopstories, songs, movies }) => {
  return (
    <>
      <Head>
        <title>Rwenzori TV | Uquicks</title>
        <meta
          name="keywords"
          content="SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more GleanAssist, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
        />
        <meta
          name="description"
          content="SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more"
        />
        <meta property="og:title" content="Resources & Tools | Uquicks" />
        <link rel="icon" href="/gleanassist.png" />
      </Head>
      <div className="p-2">
        <div className="products-heading">
          <h2 className="mt-10 mb-2 ">Rwenzori Tv Live Stream</h2>
          <div className="flex justify-center">
            <img src="banner-bg.png" alt="pic" className="w-[500px]" />
          </div>
        </div>
        <main className="md:flex  justify-center gap-5 md:gap-10 lg:gap-20 px-5">
          <div className="">
            <div className="products-heading">
              <h2 className="mt-10 ">Rwenzoris Top 20 songs</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              {songs?.map((song) => (
                <SongCard key={songs._id} song={song} />
              ))}
            </div>
          </div>
          <div className="">
            <div className="products-heading">
              <h2 className="mt-10 ">Rwenzoris Top 20 Movies</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              {movies?.map((movie) => (
                <MovieCard key={movies._id} movie={movie} />
              ))}
            </div>
          </div>
        </main>
        <div className="products-heading">
          <h2 className="mt-10  mb-2 hover:text-slate-500 cursor-pointer hover:underline">
            Rwenzoris Top Stories
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {rwentopstories?.map((rwentopstory) => (
              <RTopStories
                key={rwentopstories._id}
                rwentopstory={rwentopstory}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const rwentopstoriesQuery =
    '*[_type == "rwentopstories" && publishedAt < now()] | order(publishedAt desc)';
  const rwentopstories = await client.fetch(rwentopstoriesQuery);

  const songsQuery =
    '*[_type == "songs" && publishedAt < now()] | order(publishedAt desc)';
  const songs = await client.fetch(songsQuery);

  const moviesQuery =
    '*[_type == "movies" && publishedAt < now()] | order(publishedAt desc)';
  const movies = await client.fetch(moviesQuery);

  return {
    props: {
      rwentopstories,
      songs,
      movies,
    },
  };
};

export default RwenzoriTv;
