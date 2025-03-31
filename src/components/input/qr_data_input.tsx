
"use client"

import { QrBasicProps } from "../qr/basic/qr_basic";

interface QrDataInputProps {
	className: string;
	defaultValue: string;
	updateQrBasicProps: <K extends keyof QrBasicProps>(
		key: K,
		value: QrBasicProps[K]
	) => void;
}

export default function QrDataInput({ className, defaultValue, updateQrBasicProps }: QrDataInputProps) {


	return (
		<div className={className}>
			<p className="text-sm font-mono mb-1">Enter Text</p>
			<textarea className="text-sm font-mono w-full border p-2 resize-none rounded-none focus:outline-none" placeholder="Enter Qr code data" value={defaultValue} onChange={(v) => updateQrBasicProps('qrData', v.target.value)} />
		</div>
	);
}