export default function Footer() {
	return (
		<footer className=" text-white mt-16">
			<div className="max-w-6xl mx-auto px-6 md:px-16 py-10">
				{/* Footer Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Left Section - Brand Info */}
					<div>
						<p className="text-2xl font-bold">Qrly</p>
						<p className="text-sm text-gray-400 mt-2">
							Your one-stop solution for generating, customizing, and sharing QR codes for events, weddings, products, and more.
						</p>
					</div>

					{/* Middle Section - Quick Links */}
					<div>
						<p className="text-lg font-semibold mb-3">Quick Links</p>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-sm text-gray-300 hover:text-orange-500">About</a>
							</li>
							<li>
								<a href="#" className="text-sm text-gray-300 hover:text-orange-500">Features</a>
							</li>
							<li>
								<a href="#" className="text-sm text-gray-300 hover:text-orange-500">Pricing</a>
							</li>
							<li>
								<a href="#" className="text-sm text-gray-300 hover:text-orange-500">FAQ</a>
							</li>
						</ul>
					</div>

					{/* Right Section - Social Media */}
					<div>
						<p className="text-lg font-semibold mb-3">Follow Us</p>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-300 hover:text-blue-500">
								<i className="fab fa-facebook text-xl"></i>
							</a>
							<a href="#" className="text-gray-300 hover:text-sky-400">
								<i className="fab fa-twitter text-xl"></i>
							</a>
							<a href="#" className="text-gray-300 hover:text-pink-500">
								<i className="fab fa-instagram text-xl"></i>
							</a>
							<a href="#" className="text-gray-300 hover:text-red-600">
								<i className="fab fa-youtube text-xl"></i>
							</a>
						</div>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
					&copy; {new Date().getFullYear()} Qrly. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
