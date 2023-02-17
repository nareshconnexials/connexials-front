import React from "react";

import { Link } from "react-router-dom";
import CounterUp from "../components/elements/Counterup";

import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <>
      <section className="relative -mt-24 pt-24">
        <div
          className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0"
          style={{ zIndex: "-1" }}
        ></div>
        <div className="container">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-1/2 px-3">
              <div className="py-12">
                <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                    Committed to <span className="text-blue-500">People</span>{" "}
                    and the future
                  </h2>
                  <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                    We are <strong className="text-blue-500">Monst</strong>, a
                    Creative Design{" "}
                    <span
                      className="typewrite d-inline text-brand"
                      data-period="3000"
                      data-type='["Web Agency", "Social Marketing" ]'
                    ></span>
                  </p>
                  <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
                    Helping you maximize operations management with digitization
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <Link href="/services" legacyBehavior>
                    <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">
                      Our Services
                    </a>
                  </Link>
                  <Link href="#how-we-work" legacyBehavior>
                    <a
                      className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animatedanimated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      How We Work?
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
              <div className="flex items-center justify-center">
                <img
                  className="lg:max-w-lg"
                  src="/assets/imgs/illustrations/team.svg"
                  alt="Monst"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pb-0">
        <div className="container">
          <div className="flex flex-wrap justify-between pt-8 pb-16">
            <div
              className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
              data-wow-delay=".2s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div className="sm:py-2 ml-2 sm:ml-6">
                <span className="sm:text-2xl font-bold font-heading">+ </span>
                <span className="sm:text-2xl font-bold font-heading count">
                  <CounterUp count={150} time={3} />
                </span>
                <p className="text-xs sm:text-base text-blueGray-400">
                  Annual Partner
                </p>
              </div>
            </div>
            <div
              className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
              data-wow-delay=".4s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  ></path>
                </svg>
              </div>
              <div className="sm:py-2 ml-2 sm:ml-6">
                <span className="sm:text-2xl font-bold font-heading">+ </span>
                <span className="sm:text-2xl font-bold font-heading count">
                  <CounterUp count={58} time={3} />
                </span>
                <span className="sm:text-2xl font-bold font-heading"> k </span>
                <p className="text-xs sm:text-base text-blueGray-400">
                  Completed Projects
                </p>
              </div>
            </div>
            <div
              className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
              data-wow-delay=".6s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
              </div>
              <div className="sm:py-2 ml-2 sm:ml-6">
                <span className="sm:text-2xl font-bold font-heading">+ </span>
                <span className="sm:text-2xl font-bold font-heading count">
                  <CounterUp count={500} time={3} />
                </span>
                <p className="text-xs sm:text-base text-blueGray-400">
                  Happy Customers
                </p>
              </div>
            </div>
            <div
              className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
              data-wow-delay=".8s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <div className="sm:py-2 ml-2 sm:ml-6">
                <span className="sm:text-2xl font-bold font-heading">+ </span>
                <span className="sm:text-2xl font-bold font-heading count">
                  <CounterUp count={320} time={3} />
                </span>
                <p className="text-xs sm:text-base text-blueGray-400">
                  Research Work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container text-center">
          <div className="max-w-lg mx-auto mb-16">
            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
              {" "}
              About Our Expert
            </span>
            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
              Entrust Your Project To Our{" "}
              <span className="text-blue-500"> Specialists </span>
            </h2>
            <p className="text-blueGray-400 leading-loose">
              Our IT services converge business and technology experts to help
              to manage business categories
            </p>
          </div>
          <div className="flex flex-wrap -mx-5">
            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
              <div
                className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                data-wow-delay=".1s"
              >
                <img
                  className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                  src="/assets/imgs/placeholders/avatar-1.png"
                  alt="Monst"
                />
                <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                <p className="text-gray-500 text-xs mt-3">CEO, Co Founders</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
              <div
                className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                data-wow-delay=".3s"
              >
                <img
                  className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                  src="/assets/imgs/placeholders/avatar-2.png"
                  alt="Monst"
                />
                <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
              <div
                className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                data-wow-delay=".5s"
              >
                <img
                  className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                  src="/assets/imgs/placeholders/avatar-3.png"
                  alt="Monst"
                />
                <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                <p className="text-gray-500 text-xs mt-3">Project-Manager</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
              <div
                className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                data-wow-delay=".7s"
              >
                <img
                  className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                  src="/assets/imgs/placeholders/avatar-4.png"
                  alt="Monst"
                />
                <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-5">
              <div
                className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                data-wow-delay=".1s"
              >
                <img
                  className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                  src="/assets/imgs/placeholders/avatar-5.png"
                  alt="Monst"
                />
                <strong className="mt-6 mb-2 text-md">Al-amin Bishash</strong>
                <p className="text-gray-500 text-xs mt-3">Director</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-5">
              <div
                className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                data-wow-delay=".3s"
              >
                <img
                  className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                  src="/assets/imgs/placeholders/avatar-6.png"
                  alt="Monst"
                />
                <strong className="mt-6 mb-2 text-md">Sanuya Santa</strong>
                <p className="text-gray-500 text-xs mt-3">Marketing</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-5">
              <div
                className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                data-wow-delay=".5s"
              >
                <img
                  className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                  src="/assets/imgs/placeholders/avatar-7.png"
                  alt="Monst"
                />
                <strong className="mt-6 mb-2 text-md">Steven Job</strong>
                <p className="text-gray-500 text-xs mt-3">Designer</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-5">
              <div
                className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                data-wow-delay=".7s"
              >
                <img
                  className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                  src="/assets/imgs/placeholders/avatar-8.png"
                  alt="Monst"
                />
                <strong className="mt-6 mb-2 text-md">Romario</strong>
                <p className="text-gray-500 text-xs mt-3">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
