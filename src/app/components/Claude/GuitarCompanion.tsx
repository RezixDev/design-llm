"use client";

import React, { useState } from "react";
import {
	Camera,
	Music,
	ChevronRight,
	Search,
	Home,
	Book,
	Mic,
	Settings,
	Image,
} from "lucide-react";

const GuitarCompanion = () => {
	const [currentPage, setCurrentPage] = useState(0);

	// Pages of the app
	const pages = [
		<WelcomePage key="welcome" onGetStarted={() => setCurrentPage(1)} />,
		<HomePage key="home" />,
	];

	return (
		<div className="flex space-x-4 p-6 bg-gray-100 overflow-x-auto">
			{pages.map((page, index) => (
				<div
					key={index}
					className="flex-shrink-0 w-[375px] h-[812px] bg-white rounded-3xl shadow-lg overflow-hidden relative"
				>
					{page}
				</div>
			))}
		</div>
	);
};

// Welcome Page (Onboarding)
const WelcomePage = ({ onGetStarted }) => {
	return (
		<div className="h-full flex flex-col relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 z-0"></div>

			{/* Content */}
			<div className="z-10 flex flex-col h-full justify-between px-6 py-12">
				<div className="flex-1 flex flex-col items-center justify-center">
					<div className="w-40 h-40 mb-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
						<Music className="w-20 h-20 text-white" />
					</div>

					<h1 className="text-3xl font-bold text-center mb-4 text-black">
						Guitar Companion
					</h1>
					<p className="text-center mb-8 text-black opacity-80">
						Your AI-powered guitar learning assistant that helps you master
						chords, tabs, and techniques
					</p>

					<div className="flex flex-col space-y-4 w-full max-w-xs">
						<FeatureItem
							icon={<Camera className="w-5 h-5 text-blue-500" />}
							title="Scan & Play"
							description="Take a photo of chord charts or tabs, and we'll identify them instantly"
						/>

						<FeatureItem
							icon={<Music className="w-5 h-5 text-purple-500" />}
							title="Sound Recognition"
							description="Play a chord and get instant feedback on accuracy"
						/>

						<FeatureItem
							icon={<Book className="w-5 h-5 text-indigo-500" />}
							title="Learning Resources"
							description="Access a vast library of tutorials and practice exercises"
						/>
					</div>
				</div>

				<button
					onClick={onGetStarted}
					className="w-full py-4 mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl shadow-md flex items-center justify-center space-x-2"
				>
					<span>Get Started</span>
					<ChevronRight className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
};

// Home Page
const HomePage = () => {
	return (
		<div className="h-full flex flex-col bg-white">
			{/* Header */}
			<div className="px-6 pt-12 pb-4">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold text-black">Guitar Companion</h1>
					<Settings className="w-6 h-6 text-black opacity-70" />
				</div>

				{/* Search Bar */}
				<div className="mt-4 relative">
					<input
						type="text"
						placeholder="Search chords, songs, tutorials..."
						className="w-full bg-gray-100 rounded-xl py-3 px-4 pl-10 text-black"
					/>
					<Search className="absolute left-3 top-3 w-5 h-5 text-black opacity-50" />
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 overflow-hidden px-6">
				{/* Quick Actions */}
				<div className="py-4">
					<h2 className="text-sm font-medium uppercase tracking-wide text-black opacity-60 mb-3">
						Quick Actions
					</h2>
					<div className="flex justify-between">
						<QuickActionButton
							icon={<Camera className="w-6 h-6 text-white" />}
							label="Scan"
							color="bg-blue-500"
						/>
						<QuickActionButton
							icon={<Mic className="w-6 h-6 text-white" />}
							label="Listen"
							color="bg-purple-500"
						/>
						<QuickActionButton
							icon={<Music className="w-6 h-6 text-white" />}
							label="Library"
							color="bg-indigo-500"
						/>
						<QuickActionButton
							icon={<Image className="w-6 h-6 text-white" />}
							label="Gallery"
							color="bg-teal-500"
						/>
					</div>
				</div>

				{/* Recently Scanned */}
				<div className="py-4">
					<div className="flex justify-between items-center mb-3">
						<h2 className="text-sm font-medium uppercase tracking-wide text-black opacity-60">
							Recently Scanned
						</h2>
						<button className="text-sm text-blue-500">See All</button>
					</div>

					<div className="space-y-3">
						<RecentCard
							title="G Major Chord"
							time="10 minutes ago"
							gradient="from-blue-400 to-blue-500"
						/>
						<RecentCard
							title="Hotel California Intro"
							time="Yesterday, 8:30 PM"
							gradient="from-purple-400 to-purple-500"
						/>
						<RecentCard
							title="F Minor Pentatonic"
							time="2 days ago"
							gradient="from-indigo-400 to-indigo-500"
						/>
					</div>
				</div>

				{/* Practice Suggestions */}
				<div className="py-4">
					<h2 className="text-sm font-medium uppercase tracking-wide text-black opacity-60 mb-3">
						Practice Suggestions
					</h2>
					<div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
						<h3 className="font-medium text-black mb-2">Daily Challenge</h3>
						<p className="text-sm text-black opacity-70 mb-3">
							Master transitioning between G, C, and D chords
						</p>
						<div className="flex justify-between items-center">
							<span className="text-xs text-black opacity-60">
								Estimated: 10 min
							</span>
							<button className="text-sm text-blue-500 font-medium">
								Start
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Nav */}
			<div className="h-16 px-6 border-t border-gray-200 flex items-center justify-around">
				<NavButton icon={<Home className="w-6 h-6" />} label="Home" active />
				<NavButton icon={<Search className="w-6 h-6" />} label="Explore" />
				<NavButton icon={<Camera className="w-6 h-6" />} label="Scan" />
				<NavButton icon={<Book className="w-6 h-6" />} label="Library" />
			</div>
		</div>
	);
};

// Helper Components
const FeatureItem = ({ icon, title, description }) => (
	<div className="flex items-start space-x-3">
		<div className="mt-1">{icon}</div>
		<div>
			<h3 className="font-medium text-black">{title}</h3>
			<p className="text-sm text-black opacity-70">{description}</p>
		</div>
	</div>
);

const QuickActionButton = ({ icon, label, color }) => (
	<button className="flex flex-col items-center space-y-1">
		<div
			className={`w-12 h-12 rounded-full ${color} flex items-center justify-center shadow-md`}
		>
			{icon}
		</div>
		<span className="text-xs text-black">{label}</span>
	</button>
);

const RecentCard = ({ title, time, gradient }) => (
	<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center">
		<div
			className={`w-10 h-10 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center mr-3 shadow-sm`}
		>
			<Music className="w-5 h-5 text-white" />
		</div>
		<div className="flex-1">
			<h3 className="font-medium text-black">{title}</h3>
			<p className="text-xs text-black opacity-60">{time}</p>
		</div>
		<ChevronRight className="w-5 h-5 text-black opacity-30" />
	</div>
);

const NavButton = ({ icon, label, active }) => (
	<button className="flex flex-col items-center space-y-1">
		<div className={active ? "text-blue-500" : "text-black opacity-60"}>
			{icon}
		</div>
		<span
			className={`text-xs ${
				active ? "text-blue-500" : "text-black opacity-60"
			}`}
		>
			{label}
		</span>
	</button>
);

export default GuitarCompanion;
