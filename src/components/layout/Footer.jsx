import React from "react";
// import Link from "next/link"

const Footer = () => {
  return (
    <>
      <section className="py-20">
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex justify-between flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
            <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-purpleGray-400 leading-relaxed">
                Helping you <strong>maximize</strong> operations management with
                digitization
              </p>
            </div>
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-purpleGray-800">
                Office
              </p>
              <p className="lg:text-lg text-purpleGray-400">
                359 Hidden Valley Road, NY
              </p>
            </div>
            <div className="w-full lg:w-1/5 px-3">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-purpleGray-800">
                Contacts
              </p>
              <p className="lg:text-lg text-purpleGray-400">(+01) 234 568</p>
              <p className="lg:text-lg text-purpleGray-400">
                contact@monst.com
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-sm text-purpleGray-400">
              &copy; 2022. All rights reserved.{" "}
              <a
                className="text-purple-400"
                href="https://alithemes.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connexials
              </a>
            </p>
            <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
              <a className="inline-block px-2" href="https://facebook.com">
                <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
              </a>
              <a className="inline-block px-2" href="https://twitter.com">
                <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
              </a>
              <a className="inline-block px-2" href="https://www.instagram.com">
                <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
