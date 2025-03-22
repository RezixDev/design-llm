"use client";

import { Camera, PlayCircle, Lightbulb, ImagePlus } from "lucide-react";
import Image from "next/image";

export default function GuitarAIApp() {
	return (
		<div className="flex w-[750px] h-[812px] mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-md">
			{/* Page 1: Welcome */}
			<div className="w-[375px] h-full bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100 p-6 flex flex-col justify-between">
				<div>
					<h1 className="text-3xl font-semibold text-black mb-4">
						Welcome to StrumAI
					</h1>
					<p className="text-black text-base">
						Your AI-powered guitar companion. Snap a chord, tab, or sheet music
						— we’ll read, play, and guide you.
					</p>
				</div>
				<div className="flex justify-center">
					<Image
						src="https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=375&q=80"
						alt="Guitar visual"
						width={300}
						height={200}
						className="rounded-xl shadow-md"
					/>
				</div>
				<div className="space-y-4">
					<button className="w-full flex items-center justify-center gap-2 bg-white text-black rounded-2xl py-3 text-lg font-medium shadow-sm hover:shadow-md transition">
						<Camera size={20} />
						Take a Photo
					</button>
					<button className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-2xl py-3 text-lg font-medium shadow-sm hover:shadow-md transition">
						<ImagePlus size={20} />
						Upload from Gallery
					</button>
				</div>
			</div>

			{/* Page 2: Processing View */}
			<div className="w-[375px] h-full bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6 flex flex-col justify-between">
				<div>
					<h2 className="text-2xl font-semibold text-black mb-2">
						Analyzing Your Image...
					</h2>
					<p className="text-black text-base">
						Hang tight! We’re identifying the chords and creating playback.
					</p>
				</div>
				<div className="flex justify-center items-center h-60">
					<div className="w-44 h-44 rounded-full bg-white flex items-center justify-center shadow-inner animate-pulse">
						<PlayCircle size={64} className="text-black" />
					</div>
				</div>
				<div className="text-sm text-black flex items-center gap-2">
					<Lightbulb size={16} />
					Tip: Good lighting and clear focus make image recognition faster and
					more accurate.
				</div>
			</div>
		</div>
	);
}
