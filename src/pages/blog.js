import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

import Footer from "../components/layout/Footer";

const Blog = () => {
  return (
    <>
      {/* <Layout> */}
      <section className="py-20">
        <div className="container">
          <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
            Our Blog
          </h1>
          <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
            <li className="inline-flex items-center">
              <a href="#" className="hover:text-blue-500 text-gray-800">
                Home
              </a>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="inline-flex items-center">
              <a href="#" className="hover:text-blue-500 text-gray-800">
                Our Services
              </a>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="inline-flex items-center text-gray-400">
              <span>Web Development</span>
            </li>
          </ul>
          <div className="flex flex-wrap -mx-3">
            <div
              className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
              data-wow-delay=".1s"
            >
              <Link href="/blog-single" legacyBehavior>
                <a>
                  <img
                    className="h-80 w-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-6.png"
                    alt="Monst"
                  />
                </a>
              </Link>
              <p className="mt-6 text-sm text-blue-400">
                <Link href="/blog-2" legacyBehavior>
                  <a>
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                      Bussiness
                    </span>
                  </a>
                </Link>
                <span className="text-blueGray-400 text-xs">24 Jan, 2021</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                <Link href="/blog-single" legacyBehavior>
                  <a className="hover:text-blue-500">
                    Plan Your Project in 2022
                  </a>
                </Link>
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
            <div
              className="w-full lg:w-2/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
              data-wow-delay=".3s"
            >
              <Link href="/blog-single" legacyBehavior>
                <a>
                  <img
                    className="h-80 w-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-7.png"
                    alt="Monst"
                  />
                </a>
              </Link>
              <div className="mt-6 text-sm text-blue-400">
                <p className="mt-6 text-sm text-blue-400">
                  <Link href="/blog-2" legacyBehavior>
                    <a>
                      <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                        Analytics
                      </span>
                    </a>
                  </Link>
                  <span className="text-blueGray-400 text-xs">
                    24 Jan, 2021
                  </span>
                </p>
              </div>
              <h3 className="my-2 text-2xl font-bold font-heading">
                <Link href="/blog-single" legacyBehavior>
                  <a className="hover:text-blue-500">
                    The Next Big Challenge for Content Marketer
                  </a>
                </Link>
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit,
                leo a semper venenatis, felis urna pulvinar nibh, vitae porta
                erat risus sed mauris. Vestibulum vehicula leo eget libero
                eleifend.
              </p>
            </div>

            <div
              className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
              data-wow-delay=".1s"
            >
              <Link href="/blog-single" legacyBehavior>
                <a>
                  <img
                    className="h-80 w-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-8.png"
                    alt="Monst"
                  />
                </a>
              </Link>
              <p className="mt-6 text-sm text-blue-400">
                <Link href="/blog-2" legacyBehavior>
                  <a>
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                      Company
                    </span>
                  </a>
                </Link>
                <span className="text-blueGray-400 text-xs">24 Jan, 2021</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                <Link href="/blog-single" legacyBehavior>
                  <a className="hover:text-blue-500">
                    How to Make Website WCAG Compliant?
                  </a>
                </Link>
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
            <div
              className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
              data-wow-delay=".3s"
            >
              <Link href="/blog-single" legacyBehavior>
                <a>
                  <img
                    className="h-80 w-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-9.jpg"
                    alt="Monst"
                  />
                </a>
              </Link>
              <p className="mt-6 text-sm text-blue-400">
                <Link href="/blog-2" legacyBehavior>
                  <a>
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                      Target
                    </span>
                  </a>
                </Link>
                <span className="text-blueGray-400 text-xs">24 Jan, 2021</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                <Link href="/blog-single" legacyBehavior>
                  <a className="hover:text-blue-500">
                    The Future of Enterprise API Development
                  </a>
                </Link>
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
            <div
              className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
              data-wow-delay=".1s"
            >
              <Link href="/blog-single" legacyBehavior>
                <a>
                  <img
                    className="h-80 w-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-10.jpg"
                    alt="Monst"
                  />
                </a>
              </Link>
              <p className="mt-6 text-sm text-blue-400">
                <Link href="/blog-2" legacyBehavior>
                  <a>
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                      Layers
                    </span>
                  </a>
                </Link>
                <span className="text-blueGray-400 text-xs">24 Jan, 2021</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                <Link href="/blog-single" legacyBehavior>
                  <a className="hover:text-blue-500">
                    How To Make Your iOS 13 Compatible?
                  </a>
                </Link>
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
            <div
              className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
              data-wow-delay=".3s"
            >
              <Link href="/blog-single" legacyBehavior>
                <a>
                  <img
                    className="h-80 w-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-11.jpg"
                    alt="Monst"
                  />
                </a>
              </Link>
              <p className="mt-6 text-sm text-blue-400">
                <Link href="/blog-2" legacyBehavior>
                  <a>
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                      Consultancy
                    </span>
                  </a>
                </Link>
                <span className="text-blueGray-400 text-xs">24 Jan, 2021</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                <Link href="/blog-single" legacyBehavior>
                  <a className="hover:text-blue-500">
                    You have a Great Is Business Idea?
                  </a>
                </Link>
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
            <div
              className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
              data-wow-delay=".5s"
            >
              <Link href="/blog-single" legacyBehavior>
                <a>
                  <img
                    className="h-80 w-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-12.jpg"
                    alt="Monst"
                  />
                </a>
              </Link>
              <p className="mt-6 text-sm text-blue-400">
                <Link href="/blog-2" legacyBehavior>
                  <a>
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                      Analytics
                    </span>
                  </a>
                </Link>
                <span className="text-blueGray-400 text-xs">24 Jan, 2021</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                <Link href="/blog-single" legacyBehavior>
                  <a className="hover:text-blue-500">
                    Plan Your Project with Your Software
                  </a>
                </Link>
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
            <div
              className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
              data-wow-delay=".3s"
            >
              <Link href="/blog-single" legacyBehavior>
                <a>
                  <img
                    className="h-80 w-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-13.jpg"
                    alt="Monst"
                  />
                </a>
              </Link>
              <p className="mt-6 text-sm text-blue-400">
                <Link href="/blog-2" legacyBehavior>
                  <a>
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                      Digital
                    </span>
                  </a>
                </Link>
                <span className="text-blueGray-400 text-xs">24 Jan, 2021</span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                <Link href="/blog-single" legacyBehavior>
                  <a className="hover:text-blue-500">
                    You have a Great Is Business Idea?
                  </a>
                </Link>
              </h3>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/blog-2" legacyBehavior>
              <a className="hover-up-5 inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded">
                Show all posts
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* </Layout> */}
      <Footer />
    </>
  );
};

export default Blog;
