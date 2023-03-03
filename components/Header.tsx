import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";

function Header() {
  const [showSidebar, setShowSidebar] = useState<Boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <div className="hidden lg:flex top-0 relative items-center w-full ">
      <nav className="bg-bg w-screen p-2 ">
        <div className="md:justify-center mx-auto md:px-0">
          <div className="flex items-center justify-between md:justify-center h-14">
            <div className="flex items-center justify-between w-11/12 ">
              <div className="flex items-center justify-center text-xl md:text-lg lg:text-xl">
                <div className="hidden md:float-left md:contents">
                  <Link href="/TrendingPosts">
                    <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                      Blog
                    </span>
                  </Link>

                  <Link href="/RwenzoriTv">
                    <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                      Rwenzori-Tv
                    </span>
                  </Link>
                  <Link href="/RwenzoriGirls">
                    <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                      Rwenzori-Girls
                    </span>
                  </Link>
                  <Link href="/LoanCalculator">
                    <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                      Loan-Calculator
                    </span>
                  </Link>
                  <Link href="/LandConsultants">
                    <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                      Land-Consultants
                    </span>
                  </Link>
                  <Link href="/AboutUs">
                    <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                      About Us
                    </span>
                  </Link>
                  <Link href="/ContactUs">
                    <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                      Contact Us
                    </span>
                  </Link>

                  <Link href="/Privacy">
                    <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                      Privacy
                    </span>
                  </Link>
                  <Link href="/Terms">
                    <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                      Terms
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
