



// import { motion } from "motion/react"

import Header from "@/components/header/header";
import Link from "next/link";


export default function Qrly1() {


  return (

    <div>

      <div className="flex flex-col h-screen md:px-16 pt-4 sm:pt-10">

        <Header className="grid grid-cols-12 font-mono px-4" />


        <div className="grid-cols-12 grid pt-10 sm:pt-20 px-4">
          <div className="grid col-span-12 justify-start ">
            <div
              className="font-mono text-2xl sm:text-7xl space-y-2  text-center sm:text-start">
              <div
                className="">Generate
              </div>
              <div
                className="">Customize</div>
              <div
                className="">Share</div>
              <div
                className="">Effortlessly!</div>
            </div>
            <p className="text-sm sm:text-sm pt-6 font-mono font-normal text-center sm:text-start ">
              QR Codes for Events, Weddings, Products & More - All in One Place!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 pt-8 gap-2 justify-center " >

              <button className="grid col-span-2 border-black border-1 text-white bg-orange-600 font-mono text-xs px-2 py-2.5 font-bold  cursor-pointer select-none">
                Start with Template
              </button>

              <Link href={"/custom"}>
                <button className="grid col-span-2 border-black border-1 text-black font-mono text-xs px-2 py-2.5 font-bold cursor-pointer bg-white dark:bg-stone-300 select-none" >
                  Customize yours
                </button>
              </Link>


            </div>
          </div>

        </div>


        <div className="flex-grow grid py-8 sm:py-2  items-end  px-4">
          <footer className="mt-16 text-black dark:text-gray-400 text-center opacity-75 font-mono text-xs select-none">
            <p className="">
              Made with <span className="text-orange-500">❤️</span> in Guwahati
            </p>
            <p className="mt-1">
              &copy; {new Date().getFullYear()} Qrly. All rights reserved.
            </p>
          </footer>
        </div>

      </div>

    </div>
  );
}