"use client";

import React, { useState } from "react";
import {
	Camera,
	Music,
	Book,
	Settings,
	Play,
	ChevronRight,
	PlusCircle,
	Search,
	Home,
} from "lucide-react";

const GuitarCompanionApp2 = () => {
	const [currentPage, setCurrentPage] = useState(0);

	// Mock data for recent scans
	const recentScans = [
		{ id: 1, title: "G Major Chord", type: "chord", date: "2 days ago" },
		{ id: 2, title: "Hotel California Intro", type: "tab", date: "1 week ago" },
		{ id: 3, title: "Em Pentatonic Scale", type: "scale", date: "2 weeks ago" },
	];

	// Mock data for practice suggestions
	const practiceSuggestions = [
		{
			id: 1,
			title: "Chord Transitions",
			description: "Practice smooth transitions between G, C, and D",
			duration: "10 min",
		},
		{
			id: 2,
			title: "Finger Picking",
			description: "Basic finger picking pattern exercise",
			duration: "15 min",
		},
	];

	const renderHomePage = () => (
		<div className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-purple-50">
			{/* Header */}
			<div className="p-6 flex justify-between items-center">
				<div>
					<h1 className="text-2xl font-bold text-black">GuitarScan</h1>
					<p className="text-sm font-medium text-black opacity-60">
						Hello, guitarist!
					</p>
				</div>
				<button className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-md">
					<Settings size={20} color="white" />
				</button>
			</div>

			{/* Main scan button */}
			<div className="flex justify-center -mt-2">
				<button className="w-64 h-64 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex flex-col items-center justify-center shadow-lg">
					<Camera size={64} color="white" />
					<p className="text-white font-medium mt-3">Scan Music</p>
					<p className="text-white text-xs opacity-80 mt-1">Tap to capture</p>
				</button>
			</div>

			{/* Recent scans */}
			<div className="mt-6 px-6">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-lg font-bold text-black">Recent Scans</h2>
					<button className="text-sm font-medium text-black opacity-60 flex items-center">
						View all <ChevronRight size={16} />
					</button>
				</div>

				<div className="space-y-3">
					{recentScans.map((scan) => (
						<div
							key={scan.id}
							className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between"
						>
							<div className="flex items-center">
								<div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-3">
									{scan.type === "chord" ? (
										<Music size={18} color="white" />
									) : scan.type === "tab" ? (
										<Book size={18} color="white" />
									) : (
										<Music size={18} color="white" />
									)}
								</div>
								<div>
									<h3 className="font-medium text-black">{scan.title}</h3>
									<p className="text-xs text-black opacity-60">{scan.date}</p>
								</div>
							</div>
							<button className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
								<Play size={16} className="text-indigo-600" />
							</button>
						</div>
					))}
				</div>
			</div>

			{/* Bottom navigation */}
			<div className="mt-auto bg-white shadow-lg rounded-t-xl p-4 flex justify-around">
				<button className="flex flex-col items-center">
					<Home size={20} className="text-indigo-600" />
					<span className="text-xs mt-1 text-black">Home</span>
				</button>
				<button className="flex flex-col items-center">
					<Search size={20} className="text-black opacity-60" />
					<span className="text-xs mt-1 text-black opacity-60">Search</span>
				</button>
				<button className="flex flex-col items-center">
					<PlusCircle size={20} className="text-black opacity-60" />
					<span className="text-xs mt-1 text-black opacity-60">Create</span>
				</button>
				<button className="flex flex-col items-center">
					<Music size={20} className="text-black opacity-60" />
					<span className="text-xs mt-1 text-black opacity-60">Library</span>
				</button>
			</div>
		</div>
	);

	const renderScanPage = () => (
		<div className="h-full bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col">
			{/* Camera viewport */}
			<div className="flex-1 relative bg-black rounded-b-xl overflow-hidden">
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-64 h-64 border-2 border-white border-opacity-70 rounded-lg flex items-center justify-center">
						<p className="text-white text-opacity-80 text-sm">
							Position your sheet music here
						</p>
					</div>
				</div>

				{/* Camera controls */}
				<div className="absolute bottom-8 inset-x-0 flex justify-center">
					<button className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
						<div className="w-12 h-12 rounded-full border-2 border-indigo-500"></div>
					</button>
				</div>

				{/* Top controls */}
				<div className="absolute top-6 left-6">
					<button
						className="w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center"
						onClick={() => setCurrentPage(0)}
					>
						<ChevronRight
							size={24}
							color="white"
							className="transform rotate-180"
						/>
					</button>
				</div>
			</div>

			{/* Scan options */}
			<div className="p-6">
				<h2 className="text-lg font-bold text-black mb-4">
					What are you scanning?
				</h2>

				<div className="flex justify-between">
					<button className="w-24 h-24 rounded-xl bg-white shadow-sm flex flex-col items-center justify-center">
						<div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-2">
							<Music size={22} color="white" />
						</div>
						<p className="text-sm font-medium text-black">Chord</p>
					</button>

					<button className="w-24 h-24 rounded-xl bg-white shadow-sm flex flex-col items-center justify-center">
						<div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-2">
							<Book size={22} color="white" />
						</div>
						<p className="text-sm font-medium text-black">Tab</p>
					</button>

					<button className="w-24 h-24 rounded-xl bg-white shadow-sm flex flex-col items-center justify-center">
						<div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-2">
							<Music size={22} color="white" />
						</div>
						<p className="text-sm font-medium text-black">Sheet</p>
					</button>
				</div>
			</div>
		</div>
	);

	// Array of pages for horizontal layout
	const pages = [renderHomePage(), renderScanPage()];

	return (
		<div className="flex overflow-x-auto w-full">
			{pages.map((page, index) => (
				<div
					key={index}
					className="min-w-[375px] w-[375px] h-[812px] border border-gray-300 rounded-3xl overflow-hidden shadow-lg mx-2 flex-shrink-0"
					style={{
						background:
							index === currentPage ? "transparent" : "rgba(0,0,0,0.02)",
					}}
					onClick={() => setCurrentPage(index)}
				>
					{page}
				</div>
			))}
		</div>
	);
};

export default GuitarCompanionApp2;
