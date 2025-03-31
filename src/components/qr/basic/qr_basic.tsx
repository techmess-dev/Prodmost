"use client"

import ColorSelector from "@/components/color_selector/ColorSelector";
import BoxedInput from "@/components/input/BoxedInput";
import QrDataInput from "@/components/input/qr_data_input";
import SizeSelector from "@/components/size/SizeSelector";
import { isStringEmpty } from "@/utils/utils";
import { DotType } from "qr-code-styling";


export interface QrBasicProps {

	qrData: string;
	fgColor: string;
	bgColor: string;
	logo: string;
	imageSize: number;
	imageMargin: number;
	dotsBehind: boolean;
	qrStyle: DotType;
}


interface QrBasicDetails {
	qrBasicDetails: QrBasicProps;
	updateQrBasicDetails: <K extends keyof QrBasicProps>(key: K, value: QrBasicProps[K]) => void;
}


export default function QrBasic({ qrBasicDetails, updateQrBasicDetails }: QrBasicDetails) {


	/* const [qrBasicProps, setQrBasicProps] = useState<QrBasicProps>({
		qrData: "https://qrly.techmess.in/",
		fgColor: "#ffffff",
		bgColor: "#000000",
		logo: "https://qrly.techmess.in/mylogo.png"
	}) */


	const updateQrBasicProps = <K extends keyof QrBasicProps>(
		key: K,
		value: QrBasicProps[K]
	) => {
		/* setQrBasicProps((prev) => ({
			...prev,
			[key]: value, // Now properly typesafe for all keys
		})); */

		updateQrBasicDetails(key, value)

	};


	return (
		<div className="w-full">
			<QrDataInput className="" defaultValue={qrBasicDetails.qrData} updateQrBasicProps={updateQrBasicProps} />
			<p className="text-sm font-semibold mt-8" > Customizations</p>
			<div className="grid grid-cols-4 mt-4 gap-2">
				<div className="col-span-1">
					<ColorSelector heading="Background" defaultColor={qrBasicDetails.bgColor} name="bgColor" updateQrBasicProps={updateQrBasicProps} />
				</div>

				<div className="col-span-1">
					<ColorSelector heading="Foregorund" defaultColor={qrBasicDetails.fgColor} name="fgColor" updateQrBasicProps={updateQrBasicProps} />
				</div>

				<div className="col-span-2">
					<BoxedInput inputType='text' heading="Logo" placeHolder="https://mywebsite.in/mylogo.png" defaultValue={qrBasicDetails.logo} name="logo" updateBasicProps={updateQrBasicProps} />
				</div>

			</div>
			{isStringEmpty(qrBasicDetails.logo) ? "" : <div className="grid grid-cols-3 mt-8 gap-2">
				<div className="grid col-span-1">
					<SizeSelector heading="Logo Size" defaultSize={qrBasicDetails.imageSize} name='imageSize' updateBasicProps={updateQrBasicProps}
						sizes={new Map<string, number>([
							["S", 0.25],
							["M", 0.50],
							["L", 0.75],
							["XL", 1]
						])} />
				</div>

				<div className="grid col-span-1">
					<SizeSelector heading="Logo Margin" defaultSize={qrBasicDetails.imageMargin} name='imageMargin' updateBasicProps={updateQrBasicDetails}
						sizes={new Map<string, number>([
							["S", 2],
							["M", 6],
							["L", 10],
							["XL", 16]
						])}
					/>
				</div>

				<div className="grid col-span-1">
					<SizeSelector heading="Dots Behind" defaultSize={qrBasicDetails.dotsBehind} name='dotsBehind' updateBasicProps={updateQrBasicDetails}
						sizes={new Map<string, boolean>([
							["Show", false],
							["Hide", true],
						])}
					/>
				</div>
			</div>
			}

			<div className="grid grid-cols-1 mt-8 gap-2">
				<div className="grid col-span-1">
					<SizeSelector heading="Style" defaultSize={qrBasicDetails.qrStyle} name='qrStyle' updateBasicProps={updateQrBasicProps}
						optionsTextSize="xs"
						sizes={new Map<string, string>([
							["Square", "square"],
							["Dots", "dots"],
							["Classy", "classy"],
							["Rounded", "rounded"],
							["Feather", "rounded-feather"],
						])} />
				</div>

			</div>

		</div>
	);
}