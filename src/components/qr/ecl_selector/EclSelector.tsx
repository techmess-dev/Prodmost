import ParentBox from "@/components/parent_box/ParentBox";
import { QrBasicProps } from "../basic/qr_basic";
import { InfoIcon } from "@phosphor-icons/react";


interface EclSelectorProps<T> {
	heading: string;
	defaultEcl: T,
	name: keyof QrBasicProps;
	updateBasicProps: <K extends keyof QrBasicProps>(
		key: K,
		value: QrBasicProps[K]
	) => void;
	levels: Map<string, T>;
	optionsTextSize?: "xs" | "sm" | "md" | "lg";
}


export default function EclSelector<T extends string | number | boolean>({ heading, defaultEcl, name, updateBasicProps, levels, optionsTextSize }: EclSelectorProps<T>) {
	return <ParentBox heading={heading} suffixIcon={<InfoIcon size={14} className="cursor-pointer" onClick={() => console.log("ecl")} />} >

		<div className={`grid grid-cols-${Array.from(levels).length} h-full text-${optionsTextSize ?? "sm"} text-black dark:text-white`}>
			{Array.from(levels).map((item, index) => {

				return (<div key={index} className={`grid border-black dark:border-white border-t ${index === 0 ? "" : "border-l"} ${item[1] === defaultEcl ? "bg-orange-600  text-white" : ""}  border-black h-full text-center items-center cursor-pointer`} onClick={() => updateBasicProps(name, item[1])} >
					{item[0]}
				</div>)
			})}
		</div>
	</ParentBox>
}