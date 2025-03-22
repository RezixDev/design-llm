"use client";
import React, { useState } from "react";
import {
	Music,
	Mic,
	Upload,
	Book,
	Award,
	BarChart2,
	ChevronRight,
	Play,
	Check,
} from "lucide-react";

const GuitarApp = () => {
	const [currentScreen, setCurrentScreen] = useState("onboarding");

	// Switch between screens
	const goToScreen = (screen) => {
		setCurrentScreen(screen);
	};

	return (
		<div className="flex flex-col items-center justify-center p-4 bg-gray-100">
			<div className="relative w-full max-w-sm h-full max-h-[812px] overflow-hidden rounded-3xl border border-gray-300 bg-white shadow-md">
				{currentScreen === "onboarding" && (
					<OnboardingScreen goToScreen={goToScreen} />
				)}
				{currentScreen === "home" && <HomeScreen goToScreen={goToScreen} />}
			</div>
		</div>
	);
};

const OnboardingScreen = ({ goToScreen }) => {
	const [step, setStep] = useState(1);
	const [selectedLevel, setSelectedLevel] = useState(null);

	const handleNextStep = () => {
		if (step < 3) {
			setStep(step + 1);
		} else {
			goToScreen("home");
		}
	};

	const selectLevel = (level) => {
		setSelectedLevel(level);
	};

	return (
		<div className="flex flex-col h-full">
			{/* Progress bar */}
			<div className="px-6 pt-6">
				<div className="w-full bg-gray-200 h-2 rounded-full">
					<div
						className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-300"
						style={{ width: `${(step / 3) * 100}%` }}
					></div>
				</div>
				<div className="flex justify-between text-xs mt-1">
					<span className="text-black">Profile</span>
					<span className="text-black">Experience</span>
					<span className="text-black">Goals</span>
				</div>
			</div>

			{/* Content */}
			<div className="flex-1 flex flex-col px-6 py-8">
				{step === 1 && (
					<>
						<h1 className="text-2xl font-bold text-black mb-3">
							Welcome to GuitarMentor
						</h1>
						<p className="text-black mb-6">
							Let's start your journey to master the guitar with AI-powered
							guidance.
						</p>

						<div className="flex justify-center mb-8">
							<div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
								<Music size={80} className="text-purple-500" />
							</div>
						</div>

						<p className="text-black mb-6">
							We'll create a personalized learning path based on your current
							skills and goals.
						</p>
					</>
				)}

				{step === 2 && (
					<>
						<h1 className="text-2xl font-bold text-black mb-6">
							What's your experience level?
						</h1>

						<div className="space-y-4 mb-6">
							<LevelOption
								level="Beginner"
								description="Just getting started with guitar basics"
								isSelected={selectedLevel === "beginner"}
								onSelect={() => selectLevel("beginner")}
							/>
							<LevelOption
								level="Intermediate"
								description="Comfortable with chords and simple songs"
								isSelected={selectedLevel === "intermediate"}
								onSelect={() => selectLevel("intermediate")}
							/>
							<LevelOption
								level="Advanced"
								description="Experienced with advanced techniques"
								isSelected={selectedLevel === "advanced"}
								onSelect={() => selectLevel("advanced")}
							/>
						</div>
					</>
				)}

				{step === 3 && (
					<>
						<h1 className="text-2xl font-bold text-black mb-6">
							What are your goals?
						</h1>
						<p className="text-black mb-6">
							Select what you'd like to focus on:
						</p>

						<div className="space-y-4 mb-6">
							<GoalOption goal="Learn songs" icon={<Music size={20} />} />
							<GoalOption goal="Improve technique" icon={<Award size={20} />} />
							<GoalOption goal="Music theory" icon={<Book size={20} />} />
							<GoalOption goal="Compose music" icon={<Mic size={20} />} />
						</div>
					</>
				)}
			</div>

			{/* Bottom navigation */}
			<div className="px-6 pb-8">
				<button
					onClick={handleNextStep}
					disabled={step === 2 && !selectedLevel}
					className={`w-full py-4 rounded-xl font-medium text-white ${
						step === 2 && !selectedLevel
							? "bg-gray-300"
							: "bg-gradient-to-r from-blue-500 to-purple-600"
					}`}
				>
					{step === 3 ? "Get Started" : "Continue"}
				</button>

				{step > 1 && (
					<button
						onClick={() => setStep(step - 1)}
						className="w-full py-3 text-black font-medium mt-3"
					>
						Back
					</button>
				)}
			</div>
		</div>
	);
};

const LevelOption = ({ level, description, isSelected, onSelect }) => (
	<div
		onClick={onSelect}
		className={`p-4 rounded-xl border-2 ${
			isSelected ? "border-purple-500 bg-purple-50" : "border-gray-200"
		} cursor-pointer transition-all duration-200`}
	>
		<div className="flex items-center justify-between">
			<div>
				<h3 className="font-medium text-black">{level}</h3>
				<p className="text-sm text-black">{description}</p>
			</div>
			{isSelected && <Check size={20} className="text-purple-500" />}
		</div>
	</div>
);

const GoalOption = ({ goal, icon }) => (
	<div className="p-4 rounded-xl border-2 border-gray-200 cursor-pointer">
		<div className="flex items-center">
			<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
				{icon}
			</div>
			<h3 className="font-medium text-black">{goal}</h3>
		</div>
	</div>
);

const HomeScreen = ({ goToScreen }) => {
	return (
		<div className="flex flex-col h-full">
			{/* Header */}
			<div className="px-6 pt-6 pb-4">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-2xl font-bold text-black">Hi, Alex</h1>
						<p className="text-black">Ready for today's practice?</p>
					</div>
					<div className="w-10 h-10 rounded-full bg-gray-200"></div>
				</div>
			</div>

			{/* Main content */}
			<div className="flex-1 px-6 pb-6 overflow-y-auto">
				{/* Daily challenge */}
				<div className="mb-6">
					<div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-4">
						<div className="flex justify-between mb-2">
							<div className="text-white font-medium">Daily Challenge</div>
							<div className="px-2 py-1 rounded-full bg-white text-purple-600 text-xs font-medium">
								5 min
							</div>
						</div>
						<p className="text-white text-sm mb-3">
							Practice transitioning between G, C, and D chords smoothly
						</p>
						<button className="flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium">
							<Play size={16} className="mr-2" />
							Start Now
						</button>
					</div>
				</div>

				{/* Practice sections */}
				<div className="mb-6">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-lg font-bold text-black">Practice Modes</h2>
						<a href="#" className="text-purple-600 text-sm">
							See all
						</a>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<PracticeCard
							title="Record"
							description="Get feedback on your playing"
							icon={<Mic size={24} className="text-purple-500" />}
							color="from-purple-400 to-pink-500"
						/>
						<PracticeCard
							title="Upload"
							description="Analyze existing recordings"
							icon={<Upload size={24} className="text-blue-500" />}
							color="from-blue-400 to-cyan-500"
						/>
						<PracticeCard
							title="Lessons"
							description="Guided tutorials"
							icon={<Book size={24} className="text-green-500" />}
							color="from-green-400 to-teal-500"
						/>
						<PracticeCard
							title="Progress"
							description="Track your improvement"
							icon={<BarChart2 size={24} className="text-orange-500" />}
							color="from-orange-400 to-red-500"
						/>
					</div>
				</div>

				{/* Recommended exercises */}
				<div>
					<h2 className="text-lg font-bold text-black mb-4">
						Recommended For You
					</h2>

					<div className="space-y-4">
						<ExerciseCard
							title="Basic Chord Transitions"
							level="Beginner"
							time="10 min"
							progress={70}
						/>
						<ExerciseCard
							title="Finger Strength Exercise"
							level="Beginner"
							time="8 min"
							progress={30}
						/>
						<ExerciseCard
							title="Strumming Patterns"
							level="Beginner"
							time="15 min"
							progress={0}
							isNew
						/>
					</div>
				</div>
			</div>

			{/* Bottom navigation */}
			<div className="px-2 py-4 border-t border-gray-200">
				<div className="flex justify-around">
					<NavButton icon={<Music size={20} />} label="Home" isActive />
					<NavButton icon={<Mic size={20} />} label="Practice" />
					<NavButton icon={<Book size={20} />} label="Library" />
					<NavButton icon={<BarChart2 size={20} />} label="Progress" />
				</div>
			</div>
		</div>
	);
};

const PracticeCard = ({ title, description, icon, color }) => (
	<div className="p-4 rounded-xl border border-gray-200 bg-white">
		<div
			className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-3`}
		>
			{icon}
		</div>
		<h3 className="font-medium text-black">{title}</h3>
		<p className="text-xs text-black">{description}</p>
	</div>
);

const ExerciseCard = ({ title, level, time, progress, isNew }) => (
	<div className="p-4 rounded-xl border border-gray-200 bg-white">
		<div className="flex justify-between items-start mb-2">
			<div>
				<h3 className="font-medium text-black">{title}</h3>
				<div className="flex items-center mt-1">
					<span className="text-xs text-black mr-3">{level}</span>
					<span className="text-xs text-black">{time}</span>
				</div>
			</div>
			<div className="flex items-center">
				{isNew && (
					<span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium mr-2">
						New
					</span>
				)}
				<ChevronRight size={16} className="text-black" />
			</div>
		</div>

		{progress > 0 ? (
			<div className="w-full bg-gray-200 h-1.5 rounded-full mt-3">
				<div
					className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full"
					style={{ width: `${progress}%` }}
				></div>
			</div>
		) : (
			<div className="h-1.5 mt-3"></div>
		)}
	</div>
);

const NavButton = ({ icon, label, isActive }) => (
	<div className="flex flex-col items-center">
		<div className={`p-2 ${isActive ? "text-purple-600" : "text-black"}`}>
			{icon}
		</div>
		<span
			className={`text-xs mt-1 ${
				isActive ? "text-purple-600 font-medium" : "text-black"
			}`}
		>
			{label}
		</span>
	</div>
);

export default GuitarApp;
