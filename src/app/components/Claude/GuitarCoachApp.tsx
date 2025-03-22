"use client";

import React, { useState } from "react";
import {
	Music,
	Mic,
	Upload,
	Book,
	User,
	PlusSquare,
	ChevronRight,
	Award,
	Guitar,
	BarChart2,
} from "lucide-react";

const GuitarCoachApp = () => {
	const [currentPage, setCurrentPage] = useState("welcome");

	const renderPage = () => {
		switch (currentPage) {
			case "welcome":
				return <WelcomePage onContinue={() => setCurrentPage("dashboard")} />;
			case "dashboard":
				return <DashboardPage />;
			default:
				return <WelcomePage onContinue={() => setCurrentPage("dashboard")} />;
		}
	};

	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 p-4">
			<div className="relative w-[375px] h-[812px] bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
				{renderPage()}
			</div>
		</div>
	);
};

const WelcomePage = ({ onContinue }) => {
	return (
		<div className="flex flex-col h-full">
			{/* Gradient Header */}
			<div className="h-2/5 bg-gradient-to-br from-blue-500 to-blue-300 flex items-center justify-center p-6">
				<div className="text-center">
					<div className="flex justify-center mb-4">
						<div className="bg-white bg-opacity-20 p-4 rounded-full">
							<Guitar size={64} color="white" />
						</div>
					</div>
					<h1 className="text-3xl font-bold text-white mb-2">
						Guitar Coach AI
					</h1>
					<p className="text-white text-opacity-90">
						Twój osobisty trener gitary
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 px-6 pt-8 pb-10 flex flex-col">
				<h2 className="text-xl font-semibold text-black mb-6 text-center">
					Rozwiń swoje umiejętności gry
				</h2>

				<div className="space-y-4 mb-8">
					<FeatureItem
						icon={<Mic size={20} />}
						title="Analizuj swoją grę"
						description="Nagrywaj lub przesyłaj próbki i otrzymuj natychmiastowy feedback"
					/>
					<FeatureItem
						icon={<Music size={20} />}
						title="Rozpoznawanie akordów"
						description="AI wykrywa i ocenia poprawność zagranych akordów"
					/>
					<FeatureItem
						icon={<Book size={20} />}
						title="Spersonalizowane ćwiczenia"
						description="Otrzymuj ćwiczenia dopasowane do Twojego poziomu"
					/>
				</div>

				<div className="mt-auto">
					<button
						onClick={onContinue}
						className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
					>
						Rozpocznij naukę
					</button>
				</div>
			</div>
		</div>
	);
};

const FeatureItem = ({ icon, title, description }) => {
	return (
		<div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
			<div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">{icon}</div>
			<div>
				<h3 className="font-medium text-black">{title}</h3>
				<p className="text-sm text-black text-opacity-80">{description}</p>
			</div>
		</div>
	);
};

const DashboardPage = () => {
	return (
		<div className="flex flex-col h-full">
			{/* Header */}
			<div className="pt-6 px-6 pb-4">
				<div className="flex justify-between items-center mb-6">
					<div>
						<h1 className="text-2xl font-bold text-black">
							Cześć, Gitarzysto!
						</h1>
						<p className="text-black text-opacity-70">
							Co chcesz dziś przećwiczyć?
						</p>
					</div>
					<div className="h-10 w-10 bg-gray-200 rounded-full"></div>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 px-6 pb-20 overflow-y-auto">
				{/* Quick Actions */}
				<div className="mb-6">
					<div className="flex space-x-4 mb-2">
						<QuickActionButton
							icon={<Mic size={24} color="#3B82F6" />}
							label="Nagrywaj"
						/>
						<QuickActionButton
							icon={<Upload size={24} color="#3B82F6" />}
							label="Prześlij"
						/>
						<QuickActionButton
							icon={<PlusSquare size={24} color="#3B82F6" />}
							label="Ćwiczenia"
						/>
					</div>
				</div>

				{/* Recent Progress Card */}
				<div className="mb-6">
					<h2 className="text-lg font-semibold text-black mb-3">
						Twoje postępy
					</h2>
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
						<div className="flex justify-between items-center mb-3">
							<div>
								<h3 className="font-medium text-black">
									Postęp w tym tygodniu
								</h3>
								<p className="text-sm text-black text-opacity-70">
									Ćwiczysz regularnie!
								</p>
							</div>
							<BarChart2 size={20} color="#3B82F6" />
						</div>
						<div className="space-y-2">
							<ProgressBar label="Poprawność akordów" value={75} />
							<ProgressBar label="Płynność przejść" value={62} />
							<ProgressBar label="Stałe tempo" value={88} />
						</div>
					</div>
				</div>

				{/* Recommended Exercises */}
				<div className="mb-6">
					<div className="flex justify-between items-center mb-3">
						<h2 className="text-lg font-semibold text-black">
							Zalecane ćwiczenia
						</h2>
						<span className="text-sm text-black text-opacity-80">
							Wszystkie
						</span>
					</div>

					<ExerciseCard
						title="Przejścia między Em i G"
						level="Początkujący"
						duration="5 min"
						color="from-green-400 to-green-500"
					/>

					<ExerciseCard
						title="Strumming pattern 4/4"
						level="Średniozaawansowany"
						duration="10 min"
						color="from-blue-400 to-blue-500"
					/>
				</div>

				{/* Last Feedback */}
				<div className="mb-6">
					<h2 className="text-lg font-semibold text-black mb-3">
						Ostatnia analiza
					</h2>
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
						<div className="flex justify-between items-center mb-2">
							<h3 className="font-medium text-black">
								Stairway to Heaven (fragment)
							</h3>
							<span className="text-xs text-black text-opacity-60">
								2 godz. temu
							</span>
						</div>
						<p className="text-sm text-black text-opacity-80 mb-3">
							Dobra robota! Zwróć uwagę na przejście między C i D7.
						</p>
						<button className="text-sm text-blue-500 font-medium flex items-center">
							Zobacz szczegóły
							<ChevronRight size={16} />
						</button>
					</div>
				</div>
			</div>

			{/* Bottom Navigation */}
			<div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
				<div className="flex justify-around">
					<NavButton icon={<Music size={24} />} label="Główna" active />
					<NavButton icon={<Award size={24} />} label="Postępy" />
					<NavButton icon={<Book size={24} />} label="Biblioteka" />
					<NavButton icon={<User size={24} />} label="Profil" />
				</div>
			</div>
		</div>
	);
};

const QuickActionButton = ({ icon, label }) => {
	return (
		<div className="flex-1 flex flex-col items-center">
			<div className="bg-blue-50 rounded-full p-3 mb-1">{icon}</div>
			<span className="text-xs text-black">{label}</span>
		</div>
	);
};

const ProgressBar = ({ label, value }) => {
	return (
		<div>
			<div className="flex justify-between items-center mb-1">
				<span className="text-xs text-black">{label}</span>
				<span className="text-xs font-medium text-black">{value}%</span>
			</div>
			<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
				<div
					className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
					style={{ width: `${value}%` }}
				></div>
			</div>
		</div>
	);
};

const ExerciseCard = ({ title, level, duration, color }) => {
	return (
		<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-3 flex">
			<div
				className={`w-3 bg-gradient-to-b ${color} rounded-full mr-3 flex-shrink-0`}
			></div>
			<div className="flex-1">
				<h3 className="font-medium text-black mb-1">{title}</h3>
				<div className="flex justify-between">
					<span className="text-xs text-black text-opacity-70">{level}</span>
					<span className="text-xs text-black text-opacity-70">{duration}</span>
				</div>
			</div>
			<div className="flex items-center ml-2">
				<ChevronRight size={20} color="#9CA3AF" />
			</div>
		</div>
	);
};

const NavButton = ({ icon, label, active }) => {
	return (
		<div className="flex flex-col items-center">
			<div className={active ? "text-blue-500" : "text-gray-400"}>{icon}</div>
			<span
				className={`text-xs mt-1 ${
					active ? "text-black font-medium" : "text-black text-opacity-60"
				}`}
			>
				{label}
			</span>
		</div>
	);
};

export default GuitarCoachApp;
