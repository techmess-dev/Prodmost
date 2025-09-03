"use client"

import Header from "@/components/header/header";
import QrBasic, { QrBasicProps } from "./qr_basic";
import QrDisplay from "../display/qr_display";
import { useState } from "react";
import { ErrorCorrectionLevel } from "qr-code-styling";

export default function BasicCustomization() {

	const [qrDetails, setQrDetails] = useState<QrBasicProps>({
		qrData: "https://qrly.techmess.in/",
		fgColor: "#ffffff",
		bgColor: "#000000",
		logo: "",
		imageSize: 0.5,
		imageMargin: 2,
		dotsBehind: false,
		qrStyle: "square",
		eclLevel: "M",
	});

	const updateQrBasicDetails = <K extends keyof QrBasicProps>(
		key: K,
		value: QrBasicProps[K]) => {
		setQrDetails((prev) => ({
			...prev,
			[key]: value
		}));
		console.log(qrDetails);
	};


	return (
		<div className="flex flex-col h-screen md:px-16 pt-4 sm:pt-10">
			<Header className="grid grid-cols-12 font-mono px-4" />

			<div className="grid sm:grid-cols-12 font-mono gap-2 sm:gap-4 pt-8 sm:pt-12">
				<div className="absolute sm:relative top-[300px] p-4 sm:top-0 grid w-full sm:col-span-8 order-2 sm:order-1 ">
					<QrBasic qrBasicDetails={qrDetails} updateQrBasicDetails={updateQrBasicDetails} />
				</div>


				<div className="absolute sm:relative grid col-span-12 sm:col-span-4 order-1 sm:order-2 p-4 sm:p-6 w-full justify-center">
					<QrDisplay
						qrData={qrDetails.qrData}
						backgroundOptions={{
							color: qrDetails.bgColor
						}}
						dotOptions={{
							color: qrDetails.fgColor,
							type: qrDetails.qrStyle,
							gradient: undefined
						}}
						imageOptions={{
							image: qrDetails.logo,
							hideDots: qrDetails.dotsBehind,
							size: qrDetails.imageSize,
							margin: qrDetails.imageMargin,
						}}
						qrOptions={{
							errorCorrectionLevel: qrDetails.eclLevel as ErrorCorrectionLevel
						}} />
				</div>

			</div>
		</div>
	);
}