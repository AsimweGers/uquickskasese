import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container bg-bg mt-4">
      <p>
        Created by{" "}
        <Link
          href="https://joshcreativeprogrammer.netlify.app"
          target="_blank"
          className="hover:underline"
        >
          Bwambale Joshua
        </Link>
      </p>

      <p>
        2023 <Link href="/">@Uquicks</Link> All rights reserverd
      </p>
      <p className="icons">
        <Link href="/">
          <AiFillInstagram className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
        <Link href="/">
          <AiOutlineTwitter className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
        <Link href="/">
          <AiOutlineFacebook className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
        <Link href="/">
          <AiOutlineWhatsApp className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
        <Link href="/">
          <AiOutlineYoutube className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
