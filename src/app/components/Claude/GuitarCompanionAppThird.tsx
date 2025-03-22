"use client";

import React, { useState } from "react";
import {
	Camera,
	Home,
	Music,
	Book,
	Settings,
	ChevronRight,
	Play,
	X,
	Check,
	Info,
	Plus,
} from "lucide-react";

// Main App Container
const GuitarCompanionAppThird = () => {
	const [currentPage, setCurrentPage] = useState(0);

	// Sample pages to display
	const pages = [
		<WelcomePage key="welcome" onContinue={() => setCurrentPage(1)} />,
		<HomePage key="home" />,
	];

	return (
		<div className="flex items-center justify-center bg-gray-100 p-8">
			{/* Display current page */}
			{pages[currentPage]}
		</div>
	);
};

// Welcome/Onboarding Page
const WelcomePage = ({ onContinue }) => {
	return (
		<div className="relative w-[375px] h-[812px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-300 shadow-lg">
			<div className="h-full flex flex-col items-center justify-between p-8">
				{/* Top logo section */}
				<div className="w-full flex flex-col items-center mt-12">
					<div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg mb-8">
						<Music size={48} color="white" />
					</div>
					<h1 className="text-2xl font-bold text-black mb-2">
						Guitar Companion
					</h1>
					<p className="text-center text-black opacity-75 mb-8">
						Your AI-powered assistant for learning and playing guitar
					</p>
				</div>

				{/* Features section */}
				<div className="w-full">
					<div className="flex items-center mb-6">
						<div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
							<Camera size={24} color="black" />
						</div>
						<div>
							<h3 className="font-medium text-black">Scan Music</h3>
							<p className="text-sm text-black opacity-75">
								Take a picture of any chord or sheet music
							</p>
						</div>
					</div>

					<div className="flex items-center mb-6">
						<div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
							<Play size={24} color="black" />
						</div>
						<div>
							<h3 className="font-medium text-black">Hear It</h3>
							<p className="text-sm text-black opacity-75">
								App will identify and play it back for you
							</p>
						</div>
					</div>

					<div className="flex items-center mb-6">
						<div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
							<Info size={24} color="black" />
						</div>
						<div>
							<h3 className="font-medium text-black">Learn & Practice</h3>
							<p className="text-sm text-black opacity-75">
								Get finger placements and practice tips
							</p>
						</div>
					</div>
				</div>

				{/* Continue button */}
				<button
					onClick={onContinue}
					className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md"
				>
					Get Started
				</button>
			</div>
		</div>
	);
};

// Home Page
const HomePage = () => {
	return (
		<div className="relative w-[375px] h-[812px] rounded-3xl overflow-hidden bg-white border border-gray-300 shadow-lg">
			{/* Header with gradient */}
			<div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 p-6 pt-12">
				<h1 className="text-2xl font-bold text-white mb-1">
					Hello, Guitarist!
				</h1>
				<p className="text-white opacity-90">
					What would you like to do today?
				</p>

				{/* Scan button */}
				<button className="absolute right-6 top-14 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
					<Camera size={28} color="black" />
				</button>
			</div>

			{/* Content area */}
			<div className="relative -mt-8 bg-white rounded-t-3xl p-6">
				{/* Recent scans */}
				<div className="mb-6">
					<div className="flex justify-between items-center mb-4">
						<h2 className="font-bold text-black">Recent Scans</h2>
						<ChevronRight size={20} color="black" className="opacity-50" />
					</div>

					<div className="flex space-x-4 overflow-x-auto pb-2">
						<div className="w-36 flex-shrink-0">
							<div className="h-40 rounded-xl bg-gray-100 mb-2 flex items-center justify-center">
								<img
									src="/api/placeholder/144/128"
									alt="C Major chord diagram"
									className="rounded-xl"
								/>
							</div>
							<p className="text-sm font-medium text-black">C Major</p>
							<p className="text-xs text-black opacity-60">Chord</p>
						</div>

						<div className="w-36 flex-shrink-0">
							<div className="h-40 rounded-xl bg-gray-100 mb-2 flex items-center justify-center">
								<img
									src="/api/placeholder/144/128"
									alt="G Major chord diagram"
									className="rounded-xl"
								/>
							</div>
							<p className="text-sm font-medium text-black">G Major</p>
							<p className="text-xs text-black opacity-60">Chord</p>
						</div>

						<div className="w-36 flex-shrink-0">
							<div className="h-40 rounded-xl bg-gray-100 mb-2 flex items-center justify-center">
								<img
									src="/api/placeholder/144/128"
									alt="Stairway to Heaven tab"
									className="rounded-xl"
								/>
							</div>
							<p className="text-sm font-medium text-black">Stairway</p>
							<p className="text-xs text-black opacity-60">Tab</p>
						</div>
					</div>
				</div>

				{/* Practice suggestions */}
				<div className="mb-6">
					<div className="flex justify-between items-center mb-4">
						<h2 className="font-bold text-black">Practice Suggestions</h2>
						<ChevronRight size={20} color="black" className="opacity-50" />
					</div>

					<div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl mb-4">
						<div className="flex justify-between items-center">
							<div>
								<h3 className="font-medium text-black">Chord Transitions</h3>
								<p className="text-sm text-black opacity-75">
									G → C → D progression
								</p>
							</div>
							<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
								<Play size={20} color="black" />
							</div>
						</div>
					</div>

					<div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
						<div className="flex justify-between items-center">
							<div>
								<h3 className="font-medium text-black">Finger Exercise</h3>
								<p className="text-sm text-black opacity-75">
									Improve your speed & accuracy
								</p>
							</div>
							<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
								<Play size={20} color="black" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Navigation */}
			<div className="absolute bottom-0 w-full h-16 border-t border-gray-100 bg-white flex justify-around items-center px-6">
				<div className="flex flex-col items-center">
					<Home size={24} color="black" />
					<span className="text-xs text-black mt-1">Home</span>
				</div>

				<div className="flex flex-col items-center opacity-50">
					<Book size={24} color="black" />
					<span className="text-xs text-black mt-1">Library</span>
				</div>

				<div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center -mt-6 shadow-lg">
					<Camera size={24} color="white" />
				</div>

				<div className="flex flex-col items-center opacity-50">
					<Music size={24} color="black" />
					<span className="text-xs text-black mt-1">Practice</span>
				</div>

				<div className="flex flex-col items-center opacity-50">
					<Settings size={24} color="black" />
					<span className="text-xs text-black mt-1">Settings</span>
				</div>
			</div>
		</div>
	);
};

export default GuitarCompanionAppThird;
