import { InfoIcon } from "@phosphor-icons/react";
import React from "react";

interface ParentBoxProps {
	heading: string;
	suffixIcon?: React.ReactNode;
	children: React.ReactNode;
}

export default function ParentBox({ heading, suffixIcon, children }: ParentBoxProps) {
	return (
		<div className="grid rounded-none justify-items-center border shadow">
			<div className="flex flex-row items-center" >
				<p className="grid text-xs font-mono m-2 break-words overflow-hidden ">{heading}</p>
				{suffixIcon}
			</div>

			<div className="w-full min-h-10 rounded-lg ">
				{children}
			</div>
		</div>
	);
}