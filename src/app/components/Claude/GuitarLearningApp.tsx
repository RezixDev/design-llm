"use client";
import React, { useState } from "react";
import {
	Music,
	Mic,
	BookOpen,
	User,
	Home,
	Play,
	TrendingUp,
	Users,
} from "lucide-react";

// Komponent główny
const GuitarLearningApp = () => {
	const [currentScreen, setCurrentScreen] = useState("onboarding");

	// Funkcja do zmiany ekranu
	const navigateTo = (screen) => {
		setCurrentScreen(screen);
	};

	// Renderowanie odpowiedniego ekranu
	const renderScreen = () => {
		switch (currentScreen) {
			case "onboarding":
				return <OnboardingScreen navigateTo={navigateTo} />;
			case "dashboard":
				return <DashboardScreen navigateTo={navigateTo} />;
			default:
				return <OnboardingScreen navigateTo={navigateTo} />;
		}
	};

	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 p-6">
			<div className="w-full max-w-md">{renderScreen()}</div>
		</div>
	);
};

// Komponent ekranu onboardingu
const OnboardingScreen = ({ navigateTo }) => {
	return (
		<div
			className="relative w-full h-[812px] rounded-3xl overflow-hidden border border-gray-300 flex flex-col items-center"
			style={{ width: "375px" }}
		>
			{/* Tło z gradientem */}
			<div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-100 z-0"></div>

			<div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-8">
				{/* Logo i nagłówek */}
				<div className="flex flex-col items-center mt-16">
					<div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mb-6">
						<Music size={40} color="white" />
					</div>
					<h1 className="text-2xl font-bold text-black mb-2">
						GuitarMentor AI
					</h1>
					<p className="text-black text-center mb-6">
						Odkryj nowy sposób nauki gry na gitarze
					</p>
				</div>

				{/* Główna treść */}
				<div className="w-full flex flex-col items-center">
					<div className="w-full bg-white rounded-xl p-6 shadow-sm mb-4">
						<h2 className="text-black font-semibold mb-4">Co oferujemy:</h2>

						<div className="flex items-center mb-3">
							<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
								<Mic size={16} color="black" />
							</div>
							<p className="text-black text-sm">
								Analiza dźwięku w czasie rzeczywistym
							</p>
						</div>

						<div className="flex items-center mb-3">
							<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
								<TrendingUp size={16} color="black" />
							</div>
							<p className="text-black text-sm">
								Personalizowany feedback i porady
							</p>
						</div>

						<div className="flex items-center">
							<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
								<BookOpen size={16} color="black" />
							</div>
							<p className="text-black text-sm">
								Biblioteka materiałów edukacyjnych
							</p>
						</div>
					</div>
				</div>

				{/* Przyciski */}
				<div className="w-full flex flex-col items-center mb-8">
					<button
						onClick={() => navigateTo("dashboard")}
						className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-4 rounded-xl shadow-sm mb-3"
					>
						Rozpocznij bez rejestracji
					</button>

					<button className="w-full bg-white text-black font-medium py-3 px-4 rounded-xl shadow-sm border border-gray-200 mb-3">
						Zaloguj się
					</button>

					<button className="w-full bg-black text-white font-medium py-3 px-4 rounded-xl shadow-sm">
						Utwórz konto
					</button>

					<p className="text-black text-xs mt-4 text-center">
						Klikając "Utwórz konto", akceptujesz naszą
						<br />
						Politykę prywatności i Warunki użytkowania
					</p>
				</div>
			</div>
		</div>
	);
};

// Komponent ekranu dashboard
const DashboardScreen = ({ navigateTo }) => {
	return (
		<div
			className="relative w-full h-[812px] rounded-3xl overflow-hidden border border-gray-300 flex flex-col items-center"
			style={{ width: "375px" }}
		>
			{/* Tło */}
			<div className="absolute inset-0 bg-white z-0"></div>

			<div className="relative z-10 flex flex-col items-center w-full h-full">
				{/* Górny pasek */}
				<div className="w-full px-6 py-4 flex items-center justify-between">
					<div className="flex items-center">
						<Music size={24} color="black" />
						<h1 className="text-black font-bold ml-2">GuitarMentor</h1>
					</div>
					<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
						<User size={18} color="black" />
					</div>
				</div>

				{/* Główna zawartość */}
				<div className="w-full px-6 py-2 flex-1 overflow-hidden">
					{/* Karta "Nowa sesja" */}
					<div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 mb-6 shadow-sm">
						<h2 className="text-white font-semibold mb-2 text-lg">
							Rozpocznij nową sesję
						</h2>
						<p className="text-white text-sm opacity-90 mb-4">
							Otrzymaj natychmiastową analizę i feedback swojej gry
						</p>
						<button className="bg-white text-black py-2 px-4 rounded-lg text-sm font-medium flex items-center">
							<Mic size={16} className="mr-2" />
							Rozpocznij nagrywanie
						</button>
					</div>

					{/* Ostatnie sesje */}
					<div className="mb-6">
						<div className="flex items-center justify-between mb-3">
							<h2 className="text-black font-semibold">Ostatnie sesje</h2>
							<button className="text-black text-sm">Zobacz wszystkie</button>
						</div>

						<div className="w-full bg-gray-50 rounded-xl p-4 shadow-sm mb-3">
							<div className="flex items-center justify-between mb-2">
								<p className="text-black font-medium">
									Ćwiczenie akordów G, C, D
								</p>
								<p className="text-black text-xs">2 godz. temu</p>
							</div>
							<div className="flex items-center">
								<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
									<TrendingUp size={12} color="black" />
								</div>
								<p className="text-black text-xs">Dokładność: 82%</p>
							</div>
						</div>

						<div className="w-full bg-gray-50 rounded-xl p-4 shadow-sm">
							<div className="flex items-center justify-between mb-2">
								<p className="text-black font-medium">Intro do "Wonderwall"</p>
								<p className="text-black text-xs">Wczoraj</p>
							</div>
							<div className="flex items-center">
								<div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
									<TrendingUp size={12} color="black" />
								</div>
								<p className="text-black text-xs">Dokładność: 65%</p>
							</div>
						</div>
					</div>

					{/* Rekomendowane ćwiczenia */}
					<div>
						<div className="flex items-center justify-between mb-3">
							<h2 className="text-black font-semibold">
								Rekomendowane dla Ciebie
							</h2>
							<button className="text-black text-sm">Więcej</button>
						</div>

						<div className="flex space-x-3 overflow-x-auto pb-2">
							<div className="min-w-[160px] bg-gray-50 rounded-xl p-4 shadow-sm">
								<div className="w-full h-24 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
									<BookOpen size={24} color="black" />
								</div>
								<p className="text-black font-medium text-sm">
									Przejścia między akordami
								</p>
								<p className="text-black text-xs">Poziom: Początkujący</p>
							</div>

							<div className="min-w-[160px] bg-gray-50 rounded-xl p-4 shadow-sm">
								<div className="w-full h-24 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
									<Play size={24} color="black" />
								</div>
								<p className="text-black font-medium text-sm">
									Podstawy fingerpickingu
								</p>
								<p className="text-black text-xs">Poziom: Średni</p>
							</div>
						</div>
					</div>
				</div>

				{/* Dolny pasek nawigacyjny */}
				<div className="w-full bg-white border-t border-gray-100 flex justify-around items-center py-3 px-6">
					<button className="flex flex-col items-center">
						<Home size={20} color="black" />
						<span className="text-black text-xs mt-1">Główna</span>
					</button>

					<button className="flex flex-col items-center">
						<Mic size={20} color="black" />
						<span className="text-black text-xs mt-1">Nagrywaj</span>
					</button>

					<button className="flex flex-col items-center">
						<BookOpen size={20} color="black" />
						<span className="text-black text-xs mt-1">Lekcje</span>
					</button>

					<button className="flex flex-col items-center">
						<Users size={20} color="black" />
						<span className="text-black text-xs mt-1">Społeczność</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default GuitarLearningApp;
