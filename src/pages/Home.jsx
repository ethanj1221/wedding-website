import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="bg-[url('/img/cover.webp')] bg-no-repeat bg-cover bg-center bg-fixed flex-grow flex flex-col justify-center">
          <div className="h-screen absolute bg-gray-900 bg-opacity-[0.15] w-screen"></div>
          <div className="relative px-6 py-8 lg:py-14 lg:px-8 flex items-center">
            <div className="mx-auto text-center flex flex-col space-y-6 mt-6">
              <h1 className="text-3xl sm:text-5xl lg:text-8xl font-lato text-white tracking-widest font-thin">
                ETHAN &amp; REBECA
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-white uppercase tracking-widest font-lato font-thin">
                29 July 2023
              </h2>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
