import ParentBox from "../parent_box/ParentBox";
import { QrBasicProps } from "../qr/basic/qr_basic";

interface SizeSelectorProps<T> {
	heading: string;
	defaultSize: T;
	name: keyof QrBasicProps;
	updateBasicProps: <K extends keyof QrBasicProps>(
		key: K,
		value: QrBasicProps[K]
	) => void;
	sizes: Map<string, T>;
	optionsTextSize?: "xs" | "sm" | "md" | "lg";
}

export default function SizeSelector<T extends string | number | boolean>({ heading, defaultSize, name, sizes, updateBasicProps, optionsTextSize }: SizeSelectorProps<T>) {

	return (
		<ParentBox heading={heading}>

			<div className={`grid grid-cols-${Array.from(sizes).length} h-full text-${optionsTextSize ?? "sm"} text-black dark:text-white`} >
				{Array.from(sizes).map((item, index) => {

					return (<div key={index} className={`grid border-black dark:border-white border-t ${index === 0 ? "" : "border-l"} ${item[1] === defaultSize ? "bg-orange-600  text-white" : ""}  border-black h-full text-center items-center cursor-pointer`} onClick={() => updateBasicProps(name, item[1])} >
						{item[0]}
					</div>)
				})}
			</div>

		</ParentBox>
	);
}