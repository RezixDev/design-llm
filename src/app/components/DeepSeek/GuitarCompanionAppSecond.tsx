"use client";

import { Camera, Music, Settings, HelpCircle } from "lucide-react";
import Image from "next/image";

export default function GuitarCompanionAppSecond() {
	return (
		<div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
			{/* Page 1: Home Screen */}
			<div className="relative h-[812px] w-[375px] overflow-hidden rounded-3xl bg-white shadow-lg">
				{/* Header */}
				<div className="flex items-center justify-between p-6">
					<h1 className="text-2xl font-bold text-black">Guitar Companion</h1>
					<div className="flex space-x-4">
						<HelpCircle className="h-6 w-6 text-black" />
						<Settings className="h-6 w-6 text-black" />
					</div>
				</div>

				{/* Main Content */}
				<div className="flex h-full flex-col items-center justify-center space-y-8 p-6">
					<div className="rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-inner">
						<Music className="h-16 w-16 text-black" />
					</div>
					<h2 className="text-center text-3xl font-bold text-black">
						Identify Chords & Tabs
					</h2>
					<p className="text-center text-gray-600">
						Take a picture of a chord, tab, or sheet music, and let the app do
						the rest.
					</p>
					<button className="flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-white shadow-lg hover:shadow-xl">
						<Camera className="h-5 w-5" />
						<span>Scan Now</span>
					</button>
				</div>
			</div>

			{/* Page 2: Chord Identification Result */}
			<div className="relative ml-8 h-[812px] w-[375px] overflow-hidden rounded-3xl bg-white shadow-lg">
				{/* Header */}
				<div className="flex items-center justify-between p-6">
					<h1 className="text-2xl font-bold text-black">Chord Identified</h1>
					<div className="flex space-x-4">
						<HelpCircle className="h-6 w-6 text-black" />
						<Settings className="h-6 w-6 text-black" />
					</div>
				</div>

				{/* Main Content */}
				<div className="flex h-full flex-col items-center justify-center space-y-8 p-6">
					<div className="rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-inner">
						<Image
							src="https://via.placeholder.com/150"
							alt="Chord Diagram"
							width={150}
							height={150}
							className="rounded-lg"
						/>
					</div>
					<h2 className="text-center text-3xl font-bold text-black">G Major</h2>
					<p className="text-center text-gray-600">
						Suggested finger placement and practice tips.
					</p>
					<button className="flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-white shadow-lg hover:shadow-xl">
						<Music className="h-5 w-5" />
						<span>Play Chord</span>
					</button>
				</div>
			</div>
		</div>
	);
}
