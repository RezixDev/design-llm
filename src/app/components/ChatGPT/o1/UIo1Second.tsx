"use client";

import React from "react";
import { CameraIcon } from "lucide-react";

export default function UIo1Second() {
	return (
		<div className="flex">
			<div
				className="
          w-[375px]
          h-[812px]
          border
          border-black
          flex
          flex-col
          items-center
          justify-center
          bg-gradient-to-b
          from-blue-50
          to-blue-100
        "
			>
				<h1 className="text-xl font-bold text-black mb-4">
					Welcome to Guitar Companion
				</h1>
				<img
					src="https://images.unsplash.com/photo-1593640495394-f2a939bbee24"
					alt="Guitar"
					className="w-[180px] h-[180px] object-cover rounded-md"
				/>
				<p className="text-black px-6 text-center mt-4">
					Take a picture, identify chords, and get practice tips.
				</p>
				<button className="mt-6 bg-black text-white px-5 py-2 rounded-full">
					Get Started
				</button>
			</div>

			<div
				className="
          w-[375px]
          h-[812px]
          border
          border-black
          flex
          flex-col
          items-center
          justify-center
          bg-gradient-to-b
          from-green-50
          to-green-100
        "
			>
				<div className="flex flex-col items-center mb-6">
					<CameraIcon size={48} className="text-black mb-4" />
					<h2 className="text-lg font-semibold text-black">
						Snap, Identify & Playback
					</h2>
					<p className="text-black px-6 text-center mt-2">
						Point your camera at any chord, tab, or sheet music. The app does
						the rest, providing finger placements and tips.
					</p>
				</div>
				<button
					className="
            bg-black
            text-white
            px-5
            py-2
            rounded-full
            flex
            items-center
            justify-center
          "
				>
					<CameraIcon className="mr-2" size={20} />
					Scan Now
				</button>
			</div>
		</div>
	);
}
