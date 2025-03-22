"use client";

import { Camera, Music, Settings, HelpCircle } from "lucide-react";
import Image from "next/image";

const GuitarCompanionAppFirst = () => {
	return (
		<div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
			{/* Page 1: Home Screen */}
			<div className="relative h-[812px] w-[375px] overflow-hidden rounded-3xl bg-white shadow-lg">
				{/* Header */}
				<div className="flex items-center justify-between p-6">
					<h1 className="text-2xl font-bold text-black">Guitar Companion</h1>
					<Settings className="h-6 w-6 text-black" />
				</div>

				{/* Main Content */}
				<div className="flex h-full flex-col items-center justify-center space-y-8 p-6">
					<div className="rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-md">
						<Camera className="h-12 w-12 text-black" />
					</div>
					<h2 className="text-center text-2xl font-bold text-black">
						Snap a Chord, Tab, or Sheet Music
					</h2>
					<p className="text-center text-gray-600">
						Take a picture, and we’ll identify and play it back for you.
					</p>
				</div>

				{/* Footer Navigation */}
				<div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-gray-100 bg-white p-4">
					<Music className="h-6 w-6 text-black" />
					<HelpCircle className="h-6 w-6 text-black" />
				</div>
			</div>

			{/* Page 2: Chord Identification Result */}
			<div className="relative ml-8 h-[812px] w-[375px] overflow-hidden rounded-3xl bg-white shadow-lg">
				{/* Header */}
				<div className="flex items-center justify-between p-6">
					<h1 className="text-2xl font-bold text-black">Chord Identified</h1>
					<Settings className="h-6 w-6 text-black" />
				</div>

				{/* Main Content */}
				<div className="flex h-full flex-col items-center justify-center space-y-8 p-6">
					<Image
						src="https://via.placeholder.com/150"
						alt="Chord Image"
						width={150}
						height={150}
						className="rounded-2xl shadow-md"
					/>
					<h2 className="text-center text-2xl font-bold text-black">C Major</h2>
					<p className="text-center text-gray-600">
						Suggested finger placements and practice tips.
					</p>
					<button className="rounded-full bg-gradient-to-br from-blue-500 to-purple-500 px-8 py-3 text-white shadow-lg hover:shadow-xl">
						Play Chord
					</button>
				</div>

				{/* Footer Navigation */}
				<div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-gray-100 bg-white p-4">
					<Music className="h-6 w-6 text-black" />
					<HelpCircle className="h-6 w-6 text-black" />
				</div>
			</div>
		</div>
	);
};

export default GuitarCompanionAppFirst;
