"use client";

import { Camera, ArrowLeft, Guitar } from "lucide-react";

export default function UIo1Third() {
	return (
		<>
			{/* Global style to hide scrollbars while preserving scrolling */}
			<style jsx global>{`
				.no-scrollbar::-webkit-scrollbar {
					display: none;
				}
				.no-scrollbar {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
			`}</style>

			{/* Wrapper for horizontal scrolling of two screens */}
			<div className="flex overflow-x-auto no-scrollbar bg-gray-100 justify-center items-center p-4 min-h-screen">
				{/* Splash Screen Container */}
				<div className="relative w-[375px] h-[812px] flex-shrink-0 border border-gray-300 rounded-2xl shadow-lg overflow-hidden mx-2">
					{/* Splash Screen Content */}
					<div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 text-white p-6">
						{/* App Logo/Icon */}
						<Guitar size={64} className="mb-4 opacity-90" />
						{/* App Name */}
						<h1 className="text-3xl font-bold mb-2">ChordMate</h1>
						{/* Tagline */}
						<p className="text-lg mb-8 text-center">
							Your smart guitar assistant
						</p>
						{/* Start Button */}
						<button className="px-6 py-3 bg-amber-500 rounded-full text-white text-base font-semibold shadow-md transition transform hover:scale-105 active:scale-95">
							Get Started
						</button>
					</div>
				</div>

				{/* Camera Page Container */}
				<div className="relative w-[375px] h-[812px] flex-shrink-0 border border-gray-300 rounded-2xl shadow-lg overflow-hidden mx-2">
					{/* Camera Preview Content (background image to simulate camera) */}
					<img
						src="https://images.unsplash.com/photo-1573006939324-641d31296356?auto=format&fit=crop&w=375&q=80"
						alt="Guitar fretboard in view"
						className="absolute inset-0 w-full h-full object-cover"
					/>
					{/* Optional overlay for darkening/contrast */}
					<div className="absolute inset-0 bg-black bg-opacity-20"></div>
					{/* Top navigation bar with back arrow */}
					<div className="absolute top-0 left-0 w-full flex items-center px-4 py-3">
						<ArrowLeft className="text-white opacity-90 w-6 h-6" />
					</div>
					{/* Center prompt text */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<p className="text-xl font-medium text-white text-center">
							Snap your chord or tab
						</p>
					</div>
					{/* Shutter button at bottom center */}
					<button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-full shadow-md">
						<Camera className="text-white w-8 h-8" />
					</button>
				</div>
			</div>
		</>
	);
}
