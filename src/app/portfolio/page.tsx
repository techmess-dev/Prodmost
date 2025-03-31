import Image from "next/image";

export default function Portfolio() {

	return (
		<div className=" h-screen bg-orange-100 dark:bg-stone-950 ">
			<div className="flex-1 h-40 md:h-50 lg:h-60 xl:h-70 2xl:h-120 bg-stone-500 dark:bg-stone-900" />
			<div className="h-40 w-40 md:w-50 md:h-50 lg:h-60 xl:h-72 xl:w-72 2xl:h-120 2xl:w-120 border-5 2xl:border-10 border-orange-100 dark:border-stone-950 rounded-full absolute top-[40px] xl:top-[70] left-1/2 transform -translate-x-1/2 overflow-hidden dark:grayscale" >
				<Image className="flex-1 object-cover" fill={true} src="https://avatar.iran.liara.run/public/boy" alt="User" />
			</div>
			<div className="flex-1 text-black dark:text-stone-300 text-center">
				<p className="font-mono font-bold pt-14 md:pt-16 xl:pt-28 2xl:pt-42 justify-self-center text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl" >Mridul Baishya</p>
				<p className="px-4 xl:px-12 mt-4 sm:mt-6 font-mono text-center justify-self-center text-sm sm:text-sm md:text-lg xl:text-2xl 2xl:text-3xl dark:text-stone-400" >I&apos;m a passionate full-stack developer with expertise in Android App Development, Next.js and Flutter. I love building scalable applications, optimizing performance, and solving complex problems. From backend architecture to modern UI/UX, I craft seamless digital experiences.</p>

				<button className="mt-8 px-6 py-3 xl:py-6 xl:px-12 2xl:py-8 2xl:px-12 xl:rounded-2xl  text-xs sm:text-sm md:text-lg xl:text-2xl 2xl:text-3xl bg-orange-200 dark:bg-slate-700 text-black dark:text-stone-200 border border-orange-300 font-mono font-semibold rounded-lg shadow-lg  hover:bg-orange-300  hover:shadow-xl dark:hover:text-black transition-all duration-300 justify-self-center hover:cursor-pointer dark:grayscale">
					Let&apos;s build something amazing together!
				</button>



			</div>
		</div>
	);
}