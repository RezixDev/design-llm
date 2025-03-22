"use client";

import { Camera, Play, ArrowRight, Info } from "lucide-react";

export default function GuitarCompanionUI() {
	return (
		<div className="flex h-screen items-center bg-slate-100">
			{/* Home Page */}
			<div className="relative h-[812px] w-[375px] overflow-hidden bg-gradient-to-br from-teal-50 to-blue-100">
				<div className="p-6">
					<h1 className="text-3xl font-bold text-black">Fretwise</h1>
					<p className="mt-2 text-slate-600">AI Guitar Companion</p>
				</div>

				<div className="mt-20 flex flex-col items-center px-8">
					<div className="h-64 w-full rounded-3xl border-2 border-dashed border-slate-300 bg-white/50 p-8 transition-all hover:scale-95">
						<div className="flex h-full flex-col items-center justify-center gap-4">
							<Camera className="h-12 w-12 text-slate-400" />
							<p className="text-center text-slate-600">
								Tap to capture or upload your chord sheet
							</p>
						</div>
					</div>

					<button className="mt-12 rounded-2xl bg-gradient-to-r from-teal-600 to-blue-500 px-12 py-4 text-white shadow-lg transition-transform hover:scale-105">
						Start Learning
					</button>
				</div>
			</div>

			{/* Analysis Results Page */}
			<div className="relative h-[812px] w-[375px] overflow-hidden bg-gradient-to-br from-teal-50 to-blue-100">
				<div className="p-6">
					<h2 className="text-2xl font-bold text-black">C Major Chord</h2>
					<p className="mt-1 text-slate-600">Identified with 98% confidence</p>
				</div>

				<div className="mt-8 flex justify-center">
					<img
						src="https://images.unsplash.com/photo-1605020420620-20c943cc4669?auto=format&fit=crop&w=400"
						alt="Chord diagram"
						className="h-64 w-64 rounded-2xl object-cover shadow-md"
					/>
				</div>

				<div className="mt-8 px-6">
					<div className="rounded-2xl bg-white p-6 shadow-sm">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="font-semibold text-black">Finger Placement</h3>
								<p className="text-slate-600">Recommended positions</p>
							</div>
							<Play className="h-8 w-8 text-teal-600" />
						</div>

						<div className="mt-6 flex items-center gap-4">
							<button className="flex-1 rounded-xl bg-teal-100 py-3 text-teal-700">
								Practice Tips
							</button>
							<button className="flex-1 rounded-xl bg-blue-100 py-3 text-blue-700">
								Variations
							</button>
						</div>
					</div>

					<div className="mt-6 flex items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-sm">
						<span className="text-slate-600">Next Lesson</span>
						<div className="flex items-center gap-2">
							<span className="font-semibold text-black">G Major</span>
							<ArrowRight className="h-5 w-5 text-slate-400" />
						</div>
					</div>
				</div>

				<div className="absolute bottom-6 left-0 right-0 flex justify-center">
					<Info className="h-6 w-6 text-slate-400" />
				</div>
			</div>
		</div>
	);
}
