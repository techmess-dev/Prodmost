"use client";

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
		<div className="relative w-full h-full border-t">
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
				<div ref={pickerRef} className="absolute mt-2 z-10 shadow-lg">
					<SwatchesPicker
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
