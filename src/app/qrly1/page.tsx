"use client"

import { useEffect, useRef, useState } from 'react';

import { Menu, X } from "lucide-react";

// import { motion } from "motion/react"


export default function Qrly1() {

	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuOpen(false);
			}
		}

		if (menuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]);

	return (
		<div>
			{menuOpen && (
				<div ref={menuRef} className="absolute w-full top-16 z-20 px-2">
					<div className="container mx-auto bg-white dark:bg-stone-900 shadow-md rounded-lg">
						<div className="flex justify-between items-center h-full px-4 py-4 pb-12">
							<div className="grid gap-2 md:gap-8 font-mono w-full font-bold">
								<p className="text-sm cursor-pointer w-full py-4" >About</p>
								<p className="text-sm cursor-pointer w-full py-4" >Features</p>
								<p className="text-sm cursor-pointer w-full py-4" >Pricing</p>
								<p className="text-sm cursor-pointer w-full py-4" >FAQ</p>
								<p className=" w-full text-sm mt-8 px-6 py-2 text-black font-bold text-center cursor-pointer border-1 border-black select-none " >Log in</p>
								<p className=" w-full text-sm mt-2 px-6 py-2 text-white font-bold bg-orange-600 text-center cursor-pointer border-1 border-black select-none " >Sign up</p>
							</div>

						</div>
					</div>
				</div>
			)}
			<div className="flex flex-col h-screen md:px-16 pt-4 sm:pt-10 px-4">


				<div className="grid grid-cols-12 font-mono ">
					<div className="grid col-span-3">
						<p className="text-xl font-bold" >Qrly</p>
					</div>

					<div className="col-span-6 justify-items-center hidden sm:block ">
						<div className="grid grid-cols-4 gap-2 md:gap-8 justify-items-center">
							<p className="text-sm cursor-pointer items-center" >About</p>
							<p className="text-sm cursor-pointer " >Features</p>
							<p className="text-sm cursor-pointer" >Pricing</p>
							<p className="text-sm cursor-pointer" >FAQ</p>
						</div>

					</div>

					<div className="grid col-span-9 sm:col-span-3 justify-end  ">
						{/* <p className="min-w-28 text-xs px-6 py-2 text-white font-bold bg-orange-600 text-center cursor-pointer border-1 border-black select-none hidden sm:block " >Download</p> */}
						<div className='select-none hidden sm:block'>

							<div className=" grid grid-cols-5 w-full gap-0.5 select-none">
								<p className="grid col-span-2 text-xs px-6 py-2 text-black bg-white font-normal text-center cursor-pointer border-1 border-black select-none " >Log in</p>
								<p className="grid col-span-3 text-xs px-6 py-2 text-white font-normal bg-orange-600 text-center cursor-pointer border-1 border-black select-none " >Sign up</p>
							</div>

						</div>

						<div className="sm:hidden">
							{menuOpen ? (
								<X className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
							) : (
								<Menu className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(true)} />
							)}
						</div>
					</div>
				</div>




				<div className="grid-cols-12 grid pt-10 sm:pt-20">
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
							QR Codes for Events, Weddings, Products & More – All in One Place!
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-5 pt-8 gap-2 justify-center " >

							{/* <motion.button
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0 * 0.2 }}
							className="grid col-span-2 border-black border-1 text-white bg-orange-600 font-mono text-xs px-2 py-2.5 font-bold  cursor-pointer select-none">
							Start with Template
						</motion.button>

						<motion.button
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1 * 0.2 }}
							className="grid col-span-2 border-black border-1 text-black font-mono text-xs px-2 py-2.5 font-bold cursor-pointer bg-white dark:bg-stone-300 select-none">
							Customize yours
						</motion.button> */}


							<button className="grid col-span-2 border-black border-1 text-white bg-orange-600 font-mono text-xs px-2 py-2.5 font-bold  cursor-pointer select-none">
								Start with Template
							</button>

							<button className="grid col-span-2 border-black border-1 text-black font-mono text-xs px-2 py-2.5 font-bold cursor-pointer bg-white dark:bg-stone-300 select-none">
								Customize yours
							</button>

						</div>
					</div>

				</div>


				<div className="flex-grow grid py-8 sm:py-2  items-end">
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