"use client";

import { IsOnMobile } from "@/utils/isOnMobile";
import { useState, useRef, useEffect } from "react";
import { SwatchesPicker } from "react-color";

interface ColorPickerProps {
	defaultColor: string;
	onChange: (color: string) => void;
}

export default function ColorPicker({ defaultColor, onChange }: ColorPickerProps) {
	const [color, setColor] = useState(defaultColor); // Default color
	const [showPicker, setShowPicker] = useState(false);
	const pickerRef = useRef<HTMLDivElement>(null);

	const isOnMobile = IsOnMobile();

	// Handle click outside to close the picker
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
				setShowPicker(false);
			}
		}

		if (showPicker) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showPicker]);

	return (
		<div className="relative w-full h-full border-t ">
			{/* Color Preview (Click to Open Picker) */}
			<div
				onClick={() => {
					console.log("clicked");
					setShowPicker(!showPicker);
				}}
				className="w-full h-full rounded-none cursor-pointer"
				style={{ backgroundColor: color }}
			></div>

			{/* Color Picker Modal */}
			{showPicker && (
				<div ref={pickerRef} className="absolute left-0 mt-2 z-10 shadow-lg max-w-full w-full">
					<SwatchesPicker
						styles={{
							default: isOnMobile ? {
								picker: {
									width: "calc(100% - 32px)",
									maxWidth: "100%",
									position: 'fixed',
									right: '0px',
									bottom: '0px',
									left: '0px',
									margin: "16px"
								},
								overflow: {
									maxHeight: "200px",      // Limits the height
									overflowY: "auto",       // Adds vertical scrolling
								},
								body: {
									padding: "8px",
									display: 'flex',
									flexWrap: 'wrap',
									justifyContent: 'center',
									gap: '8px'
								},

							}
								: {}
						}}
						color={color}
						onChange={(selectedColor) => {
							setColor(selectedColor.hex);
							onChange(selectedColor.hex);
							setShowPicker(false); // Close after selecting
						}}
					/>
				</div>
			)}
		</div>
	);
}
