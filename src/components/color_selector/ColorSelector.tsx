import ParentBox from "../parent_box/ParentBox";
import { QrBasicProps } from "../qr/basic/qr_basic";
import ColorPicker from "./ColorPicker";

interface ColorSelectorProps {
	heading: string;
	defaultColor: string;
	name: keyof QrBasicProps;
	updateQrBasicProps: <K extends keyof QrBasicProps>(
		key: K,
		value: QrBasicProps[K]
	) => void;
}

export default function ColorSelector({ heading, defaultColor, name, updateQrBasicProps }: ColorSelectorProps) {
	return (
		<ParentBox heading={heading}>
			<ColorPicker defaultColor={defaultColor} onChange={(c: string) => updateQrBasicProps(name, c)} />
		</ParentBox>
	);
}


{/* <div className="grid col-span-3 rounded-none  justify-items-center border shadow">
			<p className="text-xs font-mono m-2 ">{heading}</p>
			<div className="w-full min-h-10 rounded-lg ">
				<ColorPicker defaultColor={defaultColor} onChange={(c: string) => console.log(c)} />
			</div>
		</div> */}