"use client"

interface TextInputProps {
	heading: string;
	placeHolder: string;
	className: string;
}

export default function TextInput({ heading, placeHolder, className }: TextInputProps) {

	return (
		<div className={className} >
			<p className="" >{heading}</p>
			<textarea className="w-full border mt-2" type="text" placeholder={placeHolder}></input>
		</div>
	);
}