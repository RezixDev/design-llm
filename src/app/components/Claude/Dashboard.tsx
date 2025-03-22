"use client";

import React from "react";
import {
	Mic,
	Upload,
	BookOpen,
	User,
	Clock,
	Music,
	ChevronRight,
} from "lucide-react";

export default function Dashboard() {
	return (
		<div className="relative w-[375px] h-[812px] border border-gray-300 rounded-2xl overflow-hidden shadow-md flex flex-col">
			<div className="h-full w-full bg-white flex flex-col">
				{/* Header */}
				<div className="px-6 pt-12 pb-4 bg-gradient-to-r from-green-200 to-green-300">
					<h1 className="text-2xl font-bold text-white">Witaj, Gitarzysto!</h1>
					<p className="text-white text-sm opacity-80">
						Kontynuuj naukę gry na gitarze
					</p>
				</div>

				{/* Main Content */}
				<div className="flex-1 p-6 overflow-y-auto">
					{/* Kafelkowy układ funkcji */}
					<div className="grid grid-cols-2 gap-4 mb-6">
						<div className="bg-green-100 p-4 rounded-xl flex flex-col items-center justify-center h-32 shadow-sm">
							<Mic className="w-8 h-8 text-green-600 mb-2" />
							<span className="text-sm font-medium text-center">
								Nagraj grę
							</span>
						</div>
						<div className="bg-blue-100 p-4 rounded-xl flex flex-col items-center justify-center h-32 shadow-sm">
							<Upload className="w-8 h-8 text-blue-600 mb-2" />
							<span className="text-sm font-medium text-center">
								Wgraj nagranie
							</span>
						</div>
						<div className="bg-purple-100 p-4 rounded-xl flex flex-col items-center justify-center h-32 shadow-sm">
							<Music className="w-8 h-8 text-purple-600 mb-2" />
							<span className="text-sm font-medium text-center">
								Szybkie ćwiczenia
							</span>
						</div>
						<div className="bg-amber-100 p-4 rounded-xl flex flex-col items-center justify-center h-32 shadow-sm">
							<BookOpen className="w-8 h-8 text-amber-600 mb-2" />
							<span className="text-sm font-medium text-center">
								Biblioteka zasobów
							</span>
						</div>
					</div>

					{/* Ostatnie aktywności */}
					<div className="mb-6">
						<div className="flex justify-between items-center mb-3">
							<h2 className="font-semibold text-gray-800">
								Ostatnie aktywności
							</h2>
							<span className="text-green-500 text-sm">Zobacz wszystkie</span>
						</div>

						<div className="space-y-3">
							<div className="bg-gray-50 p-3 rounded-lg flex items-center">
								<div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
									<Clock className="w-5 h-5 text-green-600" />
								</div>
								<div className="flex-1">
									<p className="text-sm font-medium">Nagranie #12</p>
									<p className="text-xs text-gray-500">
										Akordy G, C, D - 85% dokładności
									</p>
								</div>
								<ChevronRight className="w-5 h-5 text-gray-400" />
							</div>

							<div className="bg-gray-50 p-3 rounded-lg flex items-center">
								<div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-3">
									<Music className="w-5 h-5 text-blue-600" />
								</div>
								<div className="flex-1">
									<p className="text-sm font-medium">Ćwiczenie ukończone</p>
									<p className="text-xs text-gray-500">
										Technika podstawowa - 92% dokładności
									</p>
								</div>
								<ChevronRight className="w-5 h-5 text-gray-400" />
							</div>
						</div>
					</div>

					{/* Rekomendowane ćwiczenia */}
					<div>
						<h2 className="font-semibold text-gray-800 mb-3">
							Rekomendowane dla Ciebie
						</h2>
						<div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
							<h3 className="text-sm font-medium text-purple-800 mb-1">
								Trójdźwięki rozszerzone
							</h3>
							<p className="text-xs text-purple-700 mb-3">
								Ćwiczenie zaawansowane
							</p>
							<button className="bg-white text-purple-700 text-xs font-medium py-1 px-3 rounded-full shadow-sm">
								Rozpocznij
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Navigation */}
				<div className="flex justify-around items-center p-4 border-t border-gray-200 bg-white">
					<div className="flex flex-col items-center">
						<BookOpen className="w-6 h-6 text-gray-400" />
						<span className="text-xs text-gray-500">Zasoby</span>
					</div>
					<div className="flex flex-col items-center">
						<Mic className="w-6 h-6 text-green-600" />
						<span className="text-xs text-green-600">Nagraj</span>
					</div>
					<div className="flex flex-col items-center">
						<User className="w-6 h-6 text-gray-400" />
						<span className="text-xs text-gray-500">Profil</span>
					</div>
				</div>
			</div>
		</div>
	);
}
