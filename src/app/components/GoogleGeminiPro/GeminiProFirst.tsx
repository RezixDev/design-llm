// app/page.tsx
"use client";

import {
	Camera,
	Zap,
	ZapOff,
	HelpCircle,
	Music,
	Play,
	ChevronLeft,
} from "lucide-react";
import { useState } from "react";

export default function GeminiProFirst() {
	const [flash, setFlash] = useState(false);
	const [capturedImage, setCapturedImage] = useState<string | null>(null);

	const handleCapture = () => {
		// In a real app, this would trigger the camera capture.
		// For this example, we'll simulate it with a placeholder image.
		setCapturedImage("https://placehold.co/375x200/EEE/31343C"); // Placeholder
	};

	const toggleFlash = () => {
		setFlash(!flash);
	};

	return (
		<div className="flex flex-row overflow-x-scroll">
			{/* Page 1: Home Screen */}
			<div className="relative w-[375px] h-[812px] bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl mx-2 my-4 shadow-lg overflow-hidden">
				{/* Device Frame Outline */}
				<div className="absolute inset-0 border-2 border-black rounded-3xl pointer-events-none" />

				<div className="flex flex-col items-center justify-center h-full p-8">
					<Music className="w-16 h-16 text-black mb-4" />
					<h1 className="text-3xl font-bold text-black mb-4 text-center">
						Chordify AI
					</h1>
					<p className="text-black text-center mb-8">
						Snap a picture of any chord, tab, or sheet music, and let the AI be
						your guide.
					</p>
					<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-200 ease-in-out shadow-md">
						Start Scanning
						<Play className="inline-block ml-2" />
					</button>

					<div className="absolute bottom-4 right-4">
						<HelpCircle className="w-6 h-6 text-black" />
					</div>
				</div>
			</div>

			{/* Page 2: Camera/Capture Screen */}
			<div className="relative w-[375px] h-[812px] bg-black rounded-3xl mx-2 my-4 shadow-lg overflow-hidden">
				{/* Device Frame Outline */}
				<div className="absolute inset-0 border-2 border-black rounded-3xl pointer-events-none" />
				{/* Camera View (Simulated) */}
				<div className="w-full h-full bg-gray-200 flex items-center justify-center">
					{capturedImage ? (
						<div className="relative">
							<img
								src={capturedImage}
								alt="Captured Music"
								className="w-full h-auto"
							/>
							<button
								onClick={() => setCapturedImage(null)}
								className="absolute top-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-200"
							>
								<ChevronLeft className="w-6 h-6 " />
							</button>
						</div>
					) : (
						<Camera className="w-16 h-16 text-gray-500" />
					)}
				</div>

				{/* Capture Button */}
				{!capturedImage && (
					<div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
						<button
							onClick={handleCapture}
							className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition duration-200"
						>
							<div className="bg-green-500 rounded-full w-12 h-12" />
						</button>
					</div>
				)}

				{/* Flash Toggle */}
				{!capturedImage && (
					<div className="absolute bottom-16 right-4">
						<button onClick={toggleFlash}>
							{flash ? (
								<ZapOff className="w-8 h-8 text-white" />
							) : (
								<Zap className="w-8 h-8 text-white" />
							)}
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
