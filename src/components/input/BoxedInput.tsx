import { HTMLInputTypeAttribute } from "react";
import ParentBox from "../parent_box/ParentBox";
import { QrBasicProps } from "../qr/basic/qr_basic";


interface BoxedInputProps {
	inputType: HTMLInputTypeAttribute;
	heading: string;
	defaultValue: string | number | undefined;
	placeHolder: string;
	name: keyof QrBasicProps;
	updateBasicProps: <K extends keyof QrBasicProps>(
		key: K,
		value: QrBasicProps[K]
	) => void;
}


export default function BoxedInput({ inputType, heading, defaultValue, placeHolder, name, updateBasicProps }: BoxedInputProps) {
	return (
		<ParentBox heading={heading} >
			<input type={inputType} placeholder={placeHolder} className="h-full w-full border-t focus:outline-none px-2 text-xs"
				value={defaultValue} onChange={(v) => {
					if (inputType == "number") {
						updateBasicProps(name, Number.parseFloat(v.target.value));
					} else {
						updateBasicProps(name, v.target.value);
					}
				}}
			/>
		</ParentBox>
	);
}