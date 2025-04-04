import React from "react";

interface ParentBoxProps {
	heading: string;
	children: React.ReactNode;
}

export default function ParentBox({ heading, children }: ParentBoxProps) {
	return (
		<div className="grid rounded-none justify-items-center border shadow">
			<p className="grid text-xs font-mono m-2 break-words overflow-hidden ">{heading}</p>
			<div className="w-full min-h-10 rounded-lg ">
				{children}
			</div>
		</div>
	);
}