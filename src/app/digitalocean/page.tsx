import Image from "next/image";


export default function DigitalOcean() {
	return (
		<div className="grid">
			<div className="grid h-screen">
				<div className="grid grid-cols-12 h-20 justify-between items-center border-b border-gray-300 bg-amber-300 px-22">
					<div className="grid col-span-3 justify-items-start py-6">
						<p className="font-sans font-bold text-2xl text-blue-600" >Digital Ocean</p>
					</div>

					<div className="grid grow col-span-6 grid-cols-5 justify-between font-sans text-lg text-slate-600">
						<p >Products</p>
						<p >Solutions</p>
						<p >Developers</p>
						<p >Partners</p>
						<p >Pricing</p>
					</div>

					{/* <div className="grid col-span-3 grid-flow-col gap-2 font-sans items-center bg-amber-900">
					<p className="grid ">Login</p>
					<button className="grid  bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-bold" >Sign up</button>
				</div> */}

					<div className="grid col-span-3 grid-flow-col gap-2 font-sans items-center  justify-end p-2 cursor-pointer ">
						<p className="grid rounded-full text-sm font-semibold  text-slate-600 px-5 py-3 hover:bg-slate-200">Log in</p>
						<button className="grid bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-semibold  cursor-pointer hover:bg-blue-700">
							Sign up
						</button>
					</div>

				</div>

				<div className="grid grid-cols-12 h-full bg-black">
					<div className="grid col-span-6">

					</div>
					<div className="grid col-span-6 bg-blue-600 bg-[url('https://www.digitalocean.com/api/static-content/v1/images?src=/_next/static/media/hero-background.686539c6.svg&width=3840')]">

					</div>
				</div>

				{/* <Image src='https://www.digitalocean.com/api/static-content/v1/images?src=/_next/static/media/hero-gpu-droplets-preview.56b7a854.svg&width=1920' fill={true} alt="banner" />
 */}



			</div>
		</div>
	);
}