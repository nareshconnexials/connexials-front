import React from "react";

function Home() {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-white p-6">
        <div class="flex items-center flex-shrink-0 text-purple mr-6">
          <img
            src="https://torun-react.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo%2Flogo.png&w=256&q=75"
            alt="example"
          />
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-black-200 border-teal-400 hover:text-purple hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow text-right mx-3">
            <a
              href="/home"
              class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-purple-500 hover:underline underline-offset-12 mr-4"
            >
              Home
            </a>
            <a
              href="/about"
              class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-purple-500 mr-4"
            >
              About
            </a>
            <a
              href="/service"
              class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-purple-500 mr-4"
            >
              Service
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-purple-500 mr-4"
            >
              Blog
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-purple-500 mr-4"
            >
              Pages
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-purple-500"
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href="noreferrer"
              class="inline-block text-sm px-4 py-2 border rounded text-teal  border-white hover:border-transparent hover:text-white hover:bg-teal mt-4 lg:mt-0 bg-cool-gray-500"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
      <div class="bg-[url('https://www.dreamstime.com/teamwork-group-young-happy-multicultural-business-people-working-together-modern-office-communicating-sharing-fresh-image194018523')]"></div>
    </>
  );
}

export default Home;
