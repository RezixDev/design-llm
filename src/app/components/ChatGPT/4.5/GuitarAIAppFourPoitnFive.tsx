"use client";

import { Camera, Music, ChevronRight, Lightbulb, BookOpen } from "lucide-react";

export default function GuitarAIAppFourPoitnFive() {
	return (
		<div className="flex overflow-x-auto h-[812px] w-[750px] bg-gradient-to-br from-green-50 to-blue-100">
			{/* Page 1 - Home Screen */}
			<div className="flex-shrink-0 w-[375px] h-[812px] bg-white rounded-xl shadow-lg mx-1 flex flex-col items-center justify-center">
				<div className="w-full px-6">
					<h1 className="text-3xl font-semibold text-black text-center">
						Guitar Companion
					</h1>
					<p className="mt-3 text-center text-gray-500">
						Scan chords, tabs & sheet music effortlessly.
					</p>
					<img
						src="https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=600&q=60"
						alt="Guitar playing"
						className="mt-6 rounded-xl shadow"
					/>
				</div>

				<button className="mt-8 py-3 px-6 bg-gradient-to-r from-green-300 to-blue-400 text-white rounded-full shadow-lg flex items-center gap-2 hover:shadow-xl transition duration-300">
					<Camera size={20} />
					Scan Music
				</button>

				<div className="mt-6 flex gap-4">
					<button className="p-4 bg-green-50 rounded-2xl shadow-md">
						<BookOpen size={24} className="text-black" />
					</button>
					<button className="p-4 bg-green-50 rounded-2xl shadow-md">
						<Music size={24} className="text-black" />
					</button>
					<button className="p-4 bg-green-50 rounded-2xl shadow-md">
						<Lightbulb size={24} className="text-black" />
					</button>
				</div>
			</div>

			{/* Page 2 - Scanned Music Details */}
			<div className="flex-shrink-0 w-[375px] h-[812px] bg-white rounded-xl shadow-lg mx-1 flex flex-col">
				<div className="px-6 pt-6">
					<h2 className="text-2xl font-semibold text-black">Scanned Music</h2>
					<p className="mt-1 text-gray-400">"Imagine - John Lennon"</p>
					<img
						src="https://images.unsplash.com/photo-1605733514757-3344cc11da0d?auto=format&fit=crop&w=600&q=60"
						alt="Sheet Music"
						className="mt-4 rounded-xl shadow-md"
					/>
				</div>

				<div className="mt-6 px-6">
					<h3 className="text-xl text-black font-medium">
						Suggested Finger Placement
					</h3>
					<img
						src="https://images.unsplash.com/photo-1587474971215-4e5c3d4571ae?auto=format&fit=crop&w=600&q=60"
						alt="Finger Placement"
						className="mt-3 rounded-xl shadow-md"
					/>
				</div>

				<button className="mt-auto mb-8 mx-6 py-3 px-6 bg-gradient-to-r from-green-300 to-blue-400 text-white rounded-full shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition duration-300">
					Practice Tips <ChevronRight size={20} />
				</button>
			</div>
		</div>
	);
}
