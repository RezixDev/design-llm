"use client";
import {
	Camera,
	Settings,
	History,
	User,
	PlayCircle,
	SkipBack,
	SkipForward,
	Info,
} from "lucide-react";

export default function UI() {
	return (
		<div className="flex h-screen overflow-hidden bg-gray-100">
			{/* Page 1 - Main Scan Interface */}
			<div className="flex-shrink-0 w-[375px] h-[812px] border-2 border-gray-200 rounded-3xl overflow-hidden">
				<div className="h-full bg-gradient-to-b from-blue-100 to-purple-100">
					{/* Header */}
					<header className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm">
						<Settings className="text-black w-6 h-6" />
						<h1 className="text-black font-semibold text-xl">
							Guitar Companion
						</h1>
						<User className="text-black w-6 h-6" />
					</header>

					{/* Main Content */}
					<main className="p-6 space-y-8">
						<div className="bg-white rounded-2xl p-6 shadow-sm">
							<h2 className="text-black text-lg font-medium mb-4">New Scan</h2>
							<button className="w-full aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center ring-8 ring-white/50">
								<Camera className="text-white w-12 h-12" />
							</button>
						</div>

						{/* Recent Scans */}
						<div className="space-y-4">
							<div className="flex justify-between items-center">
								<h3 className="text-black font-medium">Recent Scans</h3>
								<History className="text-black w-5 h-5" />
							</div>
							<div className="grid grid-cols-3 gap-3">
								{[1, 2, 3].map((item) => (
									<div
										key={item}
										className="aspect-square bg-white rounded-lg shadow-sm"
									>
										<img
											src="https://via.placeholder.com/100x100.png?text=Chord"
											alt="Recent scan"
											className="w-full h-full rounded-lg"
										/>
									</div>
								))}
							</div>
						</div>
					</main>

					{/* Navigation Footer */}
					<nav className="flex justify-around py-4 bg-white/80 backdrop-blur-sm border-t border-gray-100">
						<button className="text-black p-2 rounded-full bg-blue-100">
							<Camera className="w-6 h-6" />
						</button>
						<button className="text-black p-2">
							<History className="w-6 h-6" />
						</button>
						<button className="text-black p-2">
							<User className="w-6 h-6" />
						</button>
					</nav>
				</div>
			</div>

			{/* Page 2 - Scan Results */}
			<div className="flex-shrink-0 w-[375px] h-[812px] border-2 border-gray-200 rounded-3xl overflow-hidden">
				<div className="h-full bg-gradient-to-b from-green-100 to-blue-100">
					{/* Header */}
					<header className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm">
						<button className="text-black">← Back</button>
						<h1 className="text-black font-semibold text-xl">C Major Chord</h1>
						<div className="w-6" /> {/* Spacer */}
					</header>

					{/* Main Content */}
					<main className="p-6 space-y-6">
						{/* Chord Visualization */}
						<div className="bg-white rounded-2xl p-6 shadow-sm">
							<img
								src="https://via.placeholder.com/300x150.png?text=Chord+Diagram"
								alt="Chord diagram"
								className="w-full h-48 object-contain rounded-lg"
							/>
						</div>

						{/* Playback Controls */}
						<div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
							<div className="flex items-center justify-center gap-4">
								<SkipBack className="text-black w-8 h-8" />
								<PlayCircle className="text-black w-12 h-12" />
								<SkipForward className="text-black w-8 h-8" />
							</div>
							<div className="h-1 bg-gray-100 rounded-full">
								<div className="w-1/3 h-full bg-blue-500 rounded-full" />
							</div>
						</div>

						{/* Practice Tips */}
						<div className="bg-white rounded-2xl p-6 shadow-sm space-y-3">
							<h3 className="text-black font-medium flex items-center gap-2">
								<Info className="w-5 h-5" /> Practice Tips
							</h3>
							<ul className="list-disc pl-5 space-y-2 text-black">
								<li>Keep thumb centered on neck back</li>
								<li>Curve fingers at 90° angle</li>
								<li>Practice transitions to G chord</li>
							</ul>
						</div>

						{/* Action Button */}
						<button className="w-full bg-blue-500 text-white py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors">
							Try It Now
						</button>
					</main>
				</div>
			</div>
		</div>
	);
}
