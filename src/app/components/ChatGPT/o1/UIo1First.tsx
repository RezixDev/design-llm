"use client";

import React from "react";
import { Camera } from "lucide-react";

export default function UIo1First() {
	return (
		<div className="flex flex-row">
			{/* Page 1: Welcome */}
			<div
				className="relative flex flex-col items-center justify-center w-[375px] h-[812px] outline outline-1"
				style={{
					background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
				}}
			>
				<div className="text-center px-6">
					<h1 className="text-2xl font-bold text-black mb-4">
						AI Guitar Companion
					</h1>
					<p className="text-black mb-8">
						Capture chords, tabs, or sheet music with a single photo.
					</p>
					<button className="bg-black text-white px-6 py-2 rounded-full">
						Get Started
					</button>
				</div>
			</div>

			{/* Page 2: Capture */}
			<div
				className="relative flex flex-col items-center justify-center w-[375px] h-[812px] outline outline-1"
				style={{
					background: "linear-gradient(135deg, #ffffff 0%, #cce2f2 100%)",
				}}
			>
				<div className="w-[200px] h-[200px] mb-6">
					<img
						src="https://images.unsplash.com/photo-1605902711622-cfb43c443afa"
						alt="Guitar background"
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<h2 className="text-xl text-black mb-2">Capture Your Music</h2>
				<p className="text-black mb-6 text-center px-4">
					Take a clear photo of your chord, tab, or sheet music for best
					results.
				</p>
				<button className="bg-black text-white p-4 rounded-full">
					<Camera className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
}
