import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showScrollToTop, setScrollToTop] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setScrollToTop(window.pageYOffset > 200);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="flex top-0 relative items-center w-full z-[100]">
      <nav className="lg:bg-gray-300 bg-bg w-screen">
        <div className="flex justify-between w-full h-20 items-center top-0 md:pl-10 pl-4">
          <div className="flex gap-5 w-full">
            <div>
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpened(!isOpened)}
                  type="button"
                  className="inline-flex items-center justify-center p-1 px-3 py-2 text-base font-semibold cursor-pointer rounded-md text-gray-400 hover:text-white focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpened ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <Transition
              show={isOpened}
              enter="transition ease-out duration-500 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-200"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div
                  className=" absolute bg-bg left-0 top-10 w-48"
                  id="mobile-menu"
                >
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                      href="/TrendingPosts"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Blog
                      </span>
                    </Link>

                    <Link
                      href="/RwenzoriTv"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Rwenzori Tv
                      </span>
                    </Link>
                    <Link
                      href="/RwenzoriGirls"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Rwenzori Girls
                      </span>
                    </Link>
                    <Link
                      href="/LoanCalculator"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Loan Calculator
                      </span>
                    </Link>
                    <Link
                      href="/LandConsultants"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Land Consultants
                      </span>
                    </Link>
                    <Link
                      href="/AboutUs"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        About Us
                      </span>
                    </Link>
                    <Link
                      href="/ContactUs"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Contact Us
                      </span>
                    </Link>

                    <Link
                      href="/Privacy-Policy"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Privacy
                      </span>
                    </Link>
                    <Link
                      href="/Terms-&-Conditions"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Terms
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </Transition>
            <div className="cursor-pointer font-semibold text-4xl flex-shrink-0">
              <Link href="/">
                <img
                  src="/uquickslogo.png"
                  alt="uquicks logo"
                  className="absolute w-10 top-10 left-30"
                />
                <h1 className="font-semibold text-4xl text-gray-200 lg:text-twitter ">
                  Uquicks
                </h1>
              </Link>
            </div>
          </div>

          <div className="flex h-full items-center">
            <div onClick={() => setShowSidebar(!showSidebar)}>
              <Link href="/">
                <h1 className="cursor-pointer lg:px-12 px-4 lg:hover:text-gray-700 hover:text-gray-100 text-xl text-gray-500 hidden md:flex">
                  Search
                </h1>
              </Link>
            </div>
            <div
              className="flex m-2 text-xl text-gray-500 cursor-pointer px-6 hover:text-gray-100 border-l-2 border-gray-500 h-full items-center lg:hidden"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              {showSidebar ? <ImCancelCircle /> : <AiOutlineSearch />}
            </div>
            {showSidebar && (
              <div className=" ">
                <div className="absolute left-0 z-10 items-center flex">
                  <form
                    onSubmit={handleSearch}
                    className="absolute flex items-center"
                  >
                    <input
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="bg-primary p-4 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[250px] md:w-[610px]"
                      placeholder="Search Uquicks"
                    />
                    <button
                      onClick={handleSearch}
                      className="absolute right-3 border-l-2 h-full pl-3 border-gray-300 text-2xl text-gray-400"
                    >
                      <BiSearch />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {showScrollToTop && (
        <div className="fixed z-10 flex justify-between bg-bg w-full h-20 items-center top-0 md:pl-10 pl-4">
          <div className="flex gap-5 w-full">
            <div>
              <div className="flex">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-1 px-3 py-2 text-base font-semibold cursor-pointer rounded-md text-gray-400 hover:text-white focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-500 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-200"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div
                  className="absolute bg-bg left-0 top-10 w-48"
                  id="mobile-menu "
                >
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                      href="/TrendingPosts"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Blog
                      </span>
                    </Link>

                    <Link href="/RwenzoriTv" onClick={() => setIsOpen(!isOpen)}>
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Rwenzori Tv
                      </span>
                    </Link>
                    <Link
                      href="/RwenzoriGirls"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Rwenzori Girls
                      </span>
                    </Link>
                    <Link
                      href="/LoanCalculator"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Loan Calculator
                      </span>
                    </Link>
                    <Link
                      href="/LandConsultants"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Land Consultants
                      </span>
                    </Link>
                    <Link href="/AboutUs" onClick={() => setIsOpen(!isOpen)}>
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        About Us
                      </span>
                    </Link>
                    <Link href="/ContactUs" onClick={() => setIsOpen(!isOpen)}>
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Contact Us
                      </span>
                    </Link>

                    <Link
                      href="/Privacy-Policy"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Privacy
                      </span>
                    </Link>
                    <Link
                      href="/Terms-&-Conditions"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Terms
                      </span>
                    </Link>
                    <Link href="/Disclaimer" onClick={() => setIsOpen(!isOpen)}>
                      <span className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-bold cursor-pointer">
                        Disclaimer
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </Transition>
            <div className="cursor-pointer font-semibold text-4xl flex-shrink-0">
              <Link href="/">
                <img
                  src="/uquickslogo.png"
                  alt="uquicks logo"
                  className="absolute w-10 top-10 left-30"
                />
                <h1 className="font-semibold text-4xl text-gray-200 ">
                  Uquicks
                </h1>
              </Link>
            </div>
          </div>

          <div className="flex h-full items-center">
            <div onClick={() => setShowSidebar(!showSidebar)}>
              <Link href="/">
                <h1 className="cursor-pointer px-4 hover:text-gray-100 text-xl text-gray-500 hidden md:flex">
                  Search
                </h1>
              </Link>
            </div>
            <div
              className="flex m-2 text-xl text-gray-500 cursor-pointer px-6 hover:text-gray-100 border-l-2 border-gray-500 h-full items-center"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              {showSidebar ? <ImCancelCircle /> : <AiOutlineSearch />}
            </div>
            {showSidebar && (
              <div className=" ">
                <div className="absolute left-0 z-10 items-center flex">
                  <form
                    onSubmit={handleSearch}
                    className="absolute flex items-center"
                  >
                    <input
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="bg-primary p-4 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[250px] md:w-[610px]"
                      placeholder="Search Uquicks"
                    />
                    <button
                      onClick={handleSearch}
                      className="absolute right-3  border-l-2 h-full pl-3 border-gray-300 text-2xl text-gray-400"
                    >
                      <BiSearch />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
