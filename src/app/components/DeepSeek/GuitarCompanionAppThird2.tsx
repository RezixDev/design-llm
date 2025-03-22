"use client";

import { Camera, Music, Settings } from "lucide-react";

export default function GuitarCompanionAppThird2() {
	return (
		<div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
			{/* Page 1: Home Screen */}
			<div className="relative h-[812px] w-[375px] overflow-hidden rounded-3xl bg-white shadow-lg">
				<div className="flex h-full flex-col items-center justify-center p-6">
					{/* App Logo */}
					<img
						src="https://source.unsplash.com/featured/?guitar,music"
						alt="Guitar Companion Logo"
						className="mb-8 h-24 w-24 rounded-full object-cover"
					/>
					{/* App Title */}
					<h1 className="mb-2 text-3xl font-bold text-black">
						Guitar Companion
					</h1>
					<p className="mb-8 text-gray-600">Your AI-powered guitar assistant</p>
					{/* Primary Action Button */}
					<button className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-white shadow-lg hover:shadow-xl">
						<Camera className="mr-2" />
						Scan Chord
					</button>
					{/* Secondary Action Button */}
					<button className="mt-4 flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 text-black hover:bg-gray-50">
						<Music className="mr-2" />
						Practice Mode
					</button>
				</div>
			</div>

			{/* Page 2: Chord Scan Screen */}
			<div className="relative ml-8 h-[812px] w-[375px] overflow-hidden rounded-3xl bg-white shadow-lg">
				<div className="flex h-full flex-col p-6">
					{/* Header */}
					<div className="flex items-center justify-between">
						<button className="rounded-full p-2 hover:bg-gray-100">
							<Settings className="h-6 w-6 text-black" />
						</button>
						<h2 className="text-xl font-bold text-black">Scan Chord</h2>
						<div className="h-6 w-6" /> {/* Spacer */}
					</div>
					{/* Camera Preview */}
					<div className="relative my-6 flex-1 overflow-hidden rounded-2xl bg-gray-200">
						<img
							src="https://source.unsplash.com/featured/?guitar,chord"
							alt="Camera Preview"
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
							<button className="flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-90">
								<Camera className="h-8 w-8 text-black" />
							</button>
						</div>
					</div>
					{/* Instructions */}
					<p className="mb-4 text-center text-gray-600">
						Point your camera at a chord, tab, or sheet music to scan.
					</p>
					{/* Action Buttons */}
					<div className="flex justify-between">
						<button className="flex items-center justify-center rounded-full bg-gray-100 px-6 py-3 text-black hover:bg-gray-200">
							<Music className="mr-2" />
							Library
						</button>
						<button className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white shadow-lg hover:shadow-xl">
							<Camera className="mr-2" />
							Scan
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
