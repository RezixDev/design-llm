"use client";
import { Camera, Upload } from "lucide-react";

export default function UI2() {
	return (
		<>
			{/* Horizontal container for two mobile-sized pages */}
			<div
				id="appPreview"
				className="flex space-x-4 overflow-x-auto bg-gray-100 p-4"
			>
				{/* Welcome / Onboarding Page */}
				<div
					className="w-[375px] h-[812px] rounded-[40px] shadow-lg 
                        bg-gradient-to-br from-teal-200 to-cyan-300 
                        flex flex-col justify-between items-center p-8"
				>
					{/* Top section: Logo and welcome text */}
					<div className="mt-10 text-center">
						<img
							src="https://cdn.pixabay.com/photo/2017/10/25/03/40/guitar-2886886_1280.jpg"
							alt="Guitar logo"
							className="mx-auto mb-6 w-24 h-24 object-contain"
						/>
						<h1 className="text-2xl font-bold text-black mb-2">
							Welcome to Guitar Companion
						</h1>
						<p className="text-lg text-black opacity-75">
							Your AI‑powered guitar buddy
						</p>
					</div>
					{/* Bottom section: Get Started button */}
					<button
						className="bg-white text-black text-lg font-semibold 
                             py-3 px-6 rounded-xl shadow-md 
                             hover:shadow-lg active:scale-95 transition-transform"
					>
						Get Started
					</button>
				</div>

				{/* Capture Page */}
				<div
					className="w-[375px] h-[812px] rounded-[40px] shadow-lg 
                        bg-gradient-to-br from-teal-100 to-blue-200 
                        flex flex-col items-center justify-center p-8"
				>
					{/* Camera icon and instruction text */}
					<Camera size={64} className="text-black mb-4" />
					<p className="text-xl font-semibold text-black mb-4 text-center">
						Capture a chord or tab
					</p>
					{/* Example image card for guidance */}
					<img
						src="https://images.unsplash.com/photo-1622820608546-cbd63d2af699?&q=80&fm=jpg&w=400"
						alt="Example chord sheet"
						className="w-4/5 max-w-xs rounded-lg shadow-md mb-6"
					/>
					{/* Action buttons: Take Photo or Upload */}
					<div className="flex space-x-4">
						<button
							className="flex items-center bg-white text-black font-medium 
                               py-2 px-4 rounded-lg shadow-sm 
                               hover:shadow-md active:scale-95 transition"
						>
							<Camera className="w-5 h-5 mr-2" /> Take Photo
						</button>
						<button
							className="flex items-center bg-white text-black font-medium 
                               py-2 px-4 rounded-lg shadow-sm 
                               hover:shadow-md active:scale-95 transition"
						>
							<Upload className="w-5 h-5 mr-2" /> Upload Image
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
