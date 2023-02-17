import React from "react";
import Layout from "../components/layout/Layout";
import CounterUp from "../components/elements/Counterup";
import Footer from "../components/layout/Footer";

const Services = () => {
  return (
    <>
      {/* <Layout> */}
      <section className="-mt-10 pt-20 pb-0 bg-blueGray-100">
        <div className="container">
          <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
            What We Do
          </h1>
        </div>
      </section>
      <section className="pt-0">
        <div className="container py-12 mx-auto">
          <div className="flex flex-wrap">
            <div
              className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn"
              data-wow-delay=".5s"
            >
              <img
                className="lg:max-w-100% mx-auto"
                src="/assets/imgs/placeholders/img-6.jpg"
                alt="Monst"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
              <div className="max-w-md-2">
                <div className="mb-4">
                  <span
                    className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown"
                    data-wow-delay=".9s"
                  >
                    Why choose us
                  </span>
                  <h2
                    className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    We Provide Best <br />
                    <span className="text-blue-500">Web design </span>services
                  </h2>
                </div>

                <p
                  className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </p>

                <div className="flex flex-wrap">
                  <div
                    className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn"
                    data-wow-delay=".2s"
                  >
                    <div className="w-8 mb-5 text-blue-500">
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        1
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Web design UX/UI
                      </h3>
                      <p className="text-blueGray-400 leading-loose text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <div className="w-8 mb-5 text-blue-500">
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        2
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        React Develop
                      </h3>
                      <p className="text-blueGray-400 leading-loose text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".4s"
                  >
                    <div className="w-8 mb-5 text-blue-500">
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        3
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Ecommerce Build
                      </h3>
                      <p className="text-blueGray-400 leading-loose text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="w-8 mb-5 text-blue-500">
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        4
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        CMS develop
                      </h3>
                      <p className="text-blueGray-400 leading-loose text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-4">
        <div className="container">
          <div className="flex flex-wrap justify-between pt-8 pb-16 px-3">
            <div
              className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".2s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
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
              className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".4s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
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
              className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".6s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
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
              className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".8s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
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
      <section className="pt-20 pb-24 bg-blueGray-50" id="how-we-work">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                <span>We are </span>
                <span className="text-blue-500">awesome team </span>
                <br />
                <span>for your business dream</span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
                imperdiet.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 -mb-6 text-center">
            <div
              className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              <div className="p-12 bg-white shadow rounded">
                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                  1
                </div>
                <img
                  className="h-36 mx-auto my-4"
                  src="/assets/imgs/illustrations/eating.svg"
                  alt="Monst"
                />
                <h3 className="mb-2 font-bold font-heading text-xl">
                  Project Initialization
                </h3>
                <p className="text-sm text-blueGray-400 leading-relaxed">
                  Project initiation ensures that you lay a strong foundation
                  for a new project in your company our team.
                </p>
              </div>
            </div>
            <div
              className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
              data-wow-delay=".5s"
            >
              <div className="p-12 bg-white shadow rounded">
                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                  2
                </div>
                <img
                  className="h-36 mx-auto my-4"
                  src="/assets/imgs/illustrations/space.svg"
                  alt="Monst"
                />
                <h3 className="mb-2 font-bold font-heading text-xl">
                  Project planning
                </h3>
                <p className="text-sm text-blueGray-400 leading-relaxed">
                  A project plan is essential to keep everything related to the
                  project organized, methodical, and on track.
                </p>
              </div>
            </div>
            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
              <div
                className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
              >
                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                  3
                </div>
                <img
                  className="h-36 mx-auto my-4"
                  src="/assets/imgs/illustrations/tasks.svg"
                  alt="Monst"
                />
                <h3 className="mb-2 font-bold font-heading text-xl">
                  Project organization
                </h3>
                <p className="text-sm text-blueGray-400 leading-relaxed">
                  Moving forward you will be able to keep yourself and your team
                  on track, and address challenges early.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="max-w-md mb-8 mx-auto">
              <span
                className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown"
                data-wow-delay=".9s"
              >
                Contact Us
              </span>
              <h2
                className="mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                We will <span className="text-blue-500">be glad</span> to hear
                from you!
              </h2>
            </div>
            <div>
              <form>
                <div
                  className="mb-4 text-sm wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <span className="mr-4 font-semibold">Departament:</span>
                  <label className="mr-4">
                    <input
                      className="mr-1"
                      type="radio"
                      name="department"
                      value="1"
                      checked=""
                    />
                    <span>Support</span>
                  </label>
                  <label>
                    <input
                      className="mr-1"
                      type="radio"
                      name="department"
                      value="2"
                    />
                    <span>Sales</span>
                  </label>
                </div>
                <div
                  className="mb-4 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div
                  className="mb-4 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div
                  className="mb-4 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div
                  className="mb-4 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <textarea
                    className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                    placeholder="Message..."
                  ></textarea>
                </div>
                <div
                  className="mb-4 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <label className="flex px-2 bg-blueGray-50 rounded">
                    <input className="hidden" type="file" name="Choose file" />
                    <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                      {" "}
                      Browse
                    </span>
                  </label>
                </div>
                <div
                  className="flex justify-between items-center wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <label>
                    <input
                      className="mr-1"
                      type="checkbox"
                      name="terms"
                      value="1"
                    />
                    <span className="text-sm font-semibold">
                      I agree to terms and conditions.
                    </span>
                  </label>
                  <button
                    className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* </Layout> */}
    </>
  );
};

export default Services;
