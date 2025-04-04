import { useState, useEffect } from "react";

export function IsOnMobile(breakpoint = 640) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreen = () => {
			setIsMobile(window.innerWidth < breakpoint);
		};

		checkScreen(); // initial check
		window.addEventListener("resize", checkScreen);

		return () => window.removeEventListener("resize", checkScreen);
	}, [breakpoint]);

	return isMobile;
}
