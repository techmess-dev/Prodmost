"use client"

import ParentBox from "@/components/parent_box/ParentBox";
import QRCodeStyling, { DotType, FileExtension, Gradient } from "qr-code-styling";
import { useEffect, useRef, useState } from "react";

interface QrDisplayProps {
	qrData: string;
	backgroundOptions: {
		color: string;
		gradient?: Gradient | undefined;
	}
	dotOptions: {
		type?: DotType;
		color?: string;
		gradient?: Gradient;
		roundSize?: boolean;
	},
	imageOptions: {
		image?: string;
		margin?: number | 2;
		size?: number;
		hideDots?: boolean | true;
	} | undefined;
}

export default function QrDisplay({ qrData, backgroundOptions, dotOptions, imageOptions }: QrDisplayProps) {

	const [extension, setExtension] = useState<FileExtension>("png");

	const [fileName, setFileName] = useState<string>("qrly_qr_code");

	const qrRef = useRef<HTMLDivElement | null>(null);

	const [qrSize, setQrSize] = useState(300);

	const qrCode = useRef(
		new QRCodeStyling({
			width: qrSize,
			height: qrSize,
			data: qrData,
			backgroundOptions: { color: backgroundOptions.color, gradient: backgroundOptions.gradient || undefined },
			dotsOptions: dotOptions,
			image: imageOptions?.image || undefined,
			imageOptions: { crossOrigin: "anonymous", margin: imageOptions?.margin || 2, hideBackgroundDots: imageOptions?.hideDots || false, imageSize: imageOptions?.size || 0.5 },
			cornersSquareOptions: { type: dotOptions.type },
			cornersDotOptions: { type: dotOptions.type },
			qrOptions: {
				errorCorrectionLevel: "H"
			}
		})
	);

	useEffect(() => {

		qrCode.current.update({
			width: qrSize,
			height: qrSize,
			data: qrData,
			dotsOptions: dotOptions,
			backgroundOptions: { color: backgroundOptions.color, gradient: backgroundOptions.gradient || undefined },
			image: imageOptions?.image || undefined,
			imageOptions: { crossOrigin: "anonymous", margin: imageOptions?.margin || 2, hideBackgroundDots: imageOptions?.hideDots || false, imageSize: imageOptions?.size || 0.5 },
			cornersSquareOptions: { type: dotOptions.type },
			cornersDotOptions: { type: dotOptions.type }
		});

		if (qrRef.current) {
			qrRef.current.innerHTML = "";
			qrCode.current.append(qrRef.current as unknown as HTMLElement);
		}



	}, [qrSize, qrData, backgroundOptions, dotOptions, imageOptions])


	return (
		<div className="flex flex-col  items-center space-y-4 sm:p-4 p-2">
			<div className="grid w-full justify-center items-center " >
				<div ref={qrRef} className="p-4 border w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex object-fill"></div>
			</div>

			{/* <div ref={qrRef} className="p-4 border w-[300px] h-[300px] flex justify-center items-center"></div> */}

			<div className=" w-full  min-w-[200px] gap-4 px-0 hidden sm:block">

				<div className="grid mt-2 sm:mt-6">
					<ParentBox heading="File name">
						<div className={`grid h-full text-xs text-black dark:text-white`} >
							<input type="text" placeholder="Enter filename" className="h-full w-full border-t focus:outline-none px-2 text-xs"
								value={fileName} onChange={(v) => setFileName(v.target.value)}
							/>
						</div>
					</ParentBox>
				</div>


				<div className="grid mt-2 sm:mt-4">
					{/* <ParentBox heading="Download as"> */}
					<div className={`grid grid-cols-4 h-full text-xs text-black dark:text-white gap-2 min-h-8`} >

						{[["PNG", "png"], ["SVG", "svg"], ["JPG", "jpg"], ["WEBP", "webp"]].map((item, index) => {

							return (<div key={index} className={`grid border-black dark:border-white border ${index === 0 ? "" : "border-l"} ${item[1] === extension ? "bg-orange-600  text-white" : ""}  border-black h-full text-center items-center cursor-pointer`} onClick={() => setExtension(item[1] as FileExtension)} >
								{item[0]}
							</div>)
						})}
					</div>
					{/* </ParentBox> */}
				</div>


				<div className="grid max-h-12 items-center mt-2 sm:mt-6">
					<button
						onClick={async () => {
							console.log("my qr raw");
							console.log(qrCode.current.getRawData());
							await qrCode.current.download({ extension: extension, name: fileName });
							// qrCode.current.download({ extension: extension });
						}}
						className="grid bg-orange-600 border text-xs font-mono text-white px-4 py-2 border-black cursor-pointer"
					>
						Download
					</button>
				</div>

			</div>
		</div>
	);
}