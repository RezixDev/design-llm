"use client";

import { Guitar, Camera, GraduationCap, Music, ArrowRight } from "lucide-react";

export default function UIi1DeepResearchThird() {
	return (
		<div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none">
			{/* Splash Screen */}
			<div className="flex-shrink-0 w-[375px] h-[812px] flex flex-col items-center justify-center bg-gradient-to-br from-teal-400 to-indigo-500 text-white relative">
				{/* Centered logo/icon with subtle fade-in */}
				<Guitar className="w-16 h-16 mb-4 text-white opacity-90" />
				<h1 className="text-4xl font-bold mb-2">ChordSnap</h1>
				<p className="text-lg opacity-90">Your AI Guitar Companion</p>
				{/* Arrow indicator to proceed */}
				<ArrowRight className="w-8 h-8 text-white opacity-70 absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" />
			</div>
			{/* Onboarding Screen */}
			<div className="flex-shrink-0 w-[375px] h-[812px] relative">
				{/* Background image */}
				<img
					src="https://images.unsplash.com/photo-1678620035414-8bb1d2b01417"
					alt="Guitar by a window"
					className="absolute inset-0 w-full h-full object-cover object-center"
				/>
				{/* Overlay for readability */}
				<div className="absolute inset-0 bg-black/50"></div>
				{/* Content */}
				<div className="relative z-10 flex flex-col h-full px-6 py-8 justify-between">
					{/* Tagline and subtext */}
					<div className="text-center">
						<h2 className="text-3xl font-bold text-white mb-2">
							Snap, Learn, Play.
						</h2>
						<p className="text-white text-base opacity-90">
							Learn guitar faster with AI by your side.
						</p>
					</div>
					{/* Feature card with practice tip */}
					<div className="flex justify-center">
						<div className="w-full max-w-xs bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 transition-transform duration-300 hover:scale-105">
							<p className="font-semibold text-black mb-1">Practice Tip</p>
							<p className="text-black text-sm mb-3">
								Focus on accuracy before speed.
							</p>
							<div className="flex items-center mb-2">
								<Camera className="w-5 h-5 text-teal-500 mr-2" />
								<span className="text-sm text-black">
									Snap a song sheet, get chords instantly.
								</span>
							</div>
							<div className="flex items-center mb-2">
								<GraduationCap className="w-5 h-5 text-teal-500 mr-2" />
								<span className="text-sm text-black">
									Learn with step-by-step AI guidance.
								</span>
							</div>
							<div className="flex items-center">
								<Music className="w-5 h-5 text-teal-500 mr-2" />
								<span className="text-sm text-black">
									Play along with interactive feedback.
								</span>
							</div>
						</div>
					</div>
					{/* Get Started button */}
					<div className="flex justify-center">
						<button className="bg-teal-500 text-white text-base font-semibold py-3 px-12 rounded-full shadow-md transition-transform duration-300 active:scale-95 hover:bg-teal-600">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
