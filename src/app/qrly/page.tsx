"use client"
// import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react"

export default function Qrly() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white flex flex-col items-center justify-center px-6 font-mono">
			{/* Hero Section */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center max-w-2xl"
			>
				<h1 className="text-3xl md:text-5xl font-mono font-bold">Generate Stunning QR Codes Effortlessly</h1>
				<p className="mt-4 text-lg opacity-90">
					Create, customize, and download high-quality QR codes in just a few clicks.
				</p>
				<div className="mt-6 flex gap-4 justify-center">
					<button className="bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-800 hover:to-purple-800 text-white px-6 py-3 rounded-lg shadow-lg md:font-bold cursor-pointer">
						Start with Template
					</button>
					<button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-3 rounded-lg shadow-lg md:font-bold">
						Customize Yours
					</button>
				</div>
			</motion.div>

			{/* Features Section */}
			<div className="mt-16 max-w-4xl text-center">
				<h2 className="text-3xl font-semibold">Why Choose Us?</h2>
				<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
					{[
						"Customizable Designs",
						"High-Resolution QR Codes",
						"Fast & Free Generation",
					].map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="bg-white/10 p-6 rounded-lg flex items-center gap-3"
						>
							<CheckCircle className="text-yellow-400" />
							<p className="text-lg">{feature}</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* Footer */}
			<footer className="mt-16 text-center opacity-75">
				<p>&copy; 2025 QRLY. All rights reserved.</p>
			</footer>
		</div>
	);
}
