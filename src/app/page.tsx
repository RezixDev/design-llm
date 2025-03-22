"use client";
import React, { useState } from "react";

// Home page component for Next.js
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<ComparisonGallery />
		</main>
	);
}

// ============================================
// Claude Components
// ============================================
import Dashboard from "./components/Claude/Dashboard";
import GuitarCoachApp from "./components/Claude/GuitarCoachApp";
import GuitarLearningApp from "./components/Claude/GuitarLearningApp";
import GuitarApp from "./components/Claude/GuitarApp";
import GuitarCompanion from "./components/Claude/GuitarCompanion";
import GuitarCompanionApp from "./components/Claude/GuitarCompanionApp";
import GuitarCompanionAppThird from "./components/Claude/GuitarCompanionAppThird";

// ============================================
// DeepSeek Components
// ============================================
import GuitarCompanionAppFirst from "./components/DeepSeek/GuitarCompanionAppFirst";
import GuitarCompanionAppSecond from "./components/DeepSeek/GuitarCompanionAppSecond";
import GuitarCompanionAppThird2 from "./components/DeepSeek/GuitarCompanionAppThird2";

// ============================================
// DeepSeek Research UI Components
// ============================================
import GuitarCompanionUI from "./components/DeepSeek-DeepResearch/GuitarCompanionUI";
import UI from "./components/DeepSeek-DeepResearch/UI";

// ============================================
// ChatGPT Integration Components
// ============================================
import GuitarAIApp from "./components/ChatGPT/4o/GuitarAIApp";
import GuitarAIAppFourPointFive from "./components/ChatGPT/4.5/GuitarAIAppFourPoitnFive";
import UI2 from "./components/ChatGPT/4.5/DeepResearch/UI2";

import UIo1First from "./components/ChatGPT/o1/UIo1First";
import UIo1Second from "./components/ChatGPT/o1/UIo1Second";
import UIo1Third from "./components/ChatGPT/o1/UIo1Third";

import UIi1DeepResearchThird from "./components/ChatGPT/o1/DeepResearch/UIi1DeepResearchThird";

// ============================================
// Google Gemini Pro Components
// ============================================
import GeminiProFirst from "./components/GoogleGeminiPro/GeminiProFirst";
import GoogleProSecond from "./components/GoogleGeminiPro/GoogleProSecond";

// Component for the gallery
const ComparisonGallery = () => {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedComponent, setSelectedComponent] = useState(null);

	const categories = [
		{ id: "all", name: "All Components" },
		{ id: "claude", name: "Claude" },
		{ id: "deepseek", name: "DeepSeek" },
		{ id: "deepseek-research", name: "DeepSeek Research" },
		{ id: "chatgpt", name: "ChatGPT" },
		{ id: "gemini", name: "Google Gemini Pro" },
	];

	const components = [
		// Claude Components
		{
			id: "dashboard",
			name: "Dashboard",
			category: "claude",
			component: Dashboard,
		},
		{
			id: "guitar-coach-app",
			name: "Guitar Coach App",
			category: "claude",
			component: GuitarCoachApp,
		},
		{
			id: "guitar-learning-app",
			name: "Guitar Learning App",
			category: "claude",
			component: GuitarLearningApp,
		},
		{
			id: "guitar-app",
			name: "Guitar App",
			category: "claude",
			component: GuitarApp,
		},
		{
			id: "guitar-companion",
			name: "Guitar Companion",
			category: "claude",
			component: GuitarCompanion,
		},
		{
			id: "guitar-companion-app",
			name: "Guitar Companion App",
			category: "claude",
			component: GuitarCompanionApp,
		},
		{
			id: "guitar-companion-third",
			name: "Guitar Companion Third",
			category: "claude",
			component: GuitarCompanionAppThird,
		},

		// DeepSeek Components
		{
			id: "deepseek-first",
			name: "Guitar Companion First",
			category: "deepseek",
			component: GuitarCompanionAppFirst,
		},
		{
			id: "deepseek-second",
			name: "Guitar Companion Second",
			category: "deepseek",
			component: GuitarCompanionAppSecond,
		},
		{
			id: "deepseek-third",
			name: "Guitar Companion Third",
			category: "deepseek",
			component: GuitarCompanionAppThird2,
		},

		// DeepSeek Research Components
		{
			id: "deepseek-research-ui",
			name: "Guitar Companion UI",
			category: "deepseek-research",
			component: GuitarCompanionUI,
		},
		{
			id: "deepseek-research-ui-main",
			name: "UI",
			category: "deepseek-research",
			component: UI,
		},

		// ChatGPT Components
		{
			id: "chatgpt-4o",
			name: "Guitar AI App (4o)",
			category: "chatgpt",
			component: GuitarAIApp,
		},
		{
			id: "chatgpt-4.5",
			name: "Guitar AI App (4.5)",
			category: "chatgpt",
			component: GuitarAIAppFourPointFive,
		},
		{
			id: "chatgpt-4.5-ui2",
			name: "Deep Research UI2",
			category: "chatgpt",
			component: UI2,
		},
		{
			id: "chatgpt-o1-first",
			name: "UI o1 First",
			category: "chatgpt",
			component: UIo1First,
		},
		{
			id: "chatgpt-o1-second",
			name: "UI o1 Second",
			category: "chatgpt",
			component: UIo1Second,
		},
		{
			id: "chatgpt-o1-third",
			name: "UI o1 Third",
			category: "chatgpt",
			component: UIo1Third,
		},

		{
			id: "chatgpt-o1-deep-third",
			name: "UI Deep Research Third",
			category: "chatgpt",
			component: UIi1DeepResearchThird,
		},

		// Gemini Pro Components
		{
			id: "gemini-first",
			name: "Gemini Pro First",
			category: "gemini",
			component: GeminiProFirst,
		},
		{
			id: "gemini-second",
			name: "Google Pro Second",
			category: "gemini",
			component: GoogleProSecond,
		},
	].reverse(); // Reversing the components array to flip the sort order

	// Group components by category
	const groupedComponents = components.reduce((acc, comp) => {
		if (!acc[comp.category]) {
			acc[comp.category] = [];
		}
		acc[comp.category].push(comp);
		return acc;
	}, {});

	// Filter components based on selected category
	const filteredComponents =
		selectedCategory === "all"
			? components
			: components.filter((comp) => comp.category === selectedCategory);

	return (
		<div className="w-full max-w-6xl mx-auto bg-black text-white p-6">
			<h1 className="text-3xl font-bold mb-8 text-center">
				Guitar Application Comparison Gallery
			</h1>

			{/* Category Filter */}
			<div className="flex flex-wrap justify-center gap-2 mb-8">
				{categories.map((category) => (
					<button
						key={category.id}
						onClick={() => setSelectedCategory(category.id)}
						className={`px-4 py-2 rounded-full transition-colors ${
							selectedCategory === category.id
								? "bg-white text-black font-semibold"
								: "bg-gray-800 text-gray-200 hover:bg-gray-700"
						}`}
					>
						{category.name}
					</button>
				))}
			</div>

			{/* Components Lists by Category */}
			<div className="space-y-8">
				{selectedCategory === "all" ? (
					// Display all categories as separate lists with reversed component order within each category
					Object.entries(groupedComponents).map(([category, comps]) => (
						<div key={category} className="mb-8">
							<h2 className="text-2xl font-bold mb-4 capitalize border-b border-gray-700 pb-2">
								{categories.find((c) => c.id === category)?.name || category}
							</h2>
							<div className="space-y-4">
								{comps.map((comp) => (
									<div
										key={comp.id}
										onClick={() => setSelectedComponent(comp.id)}
										className={`bg-gray-900 rounded-lg overflow-hidden shadow-xl cursor-pointer transition-transform hover:scale-105 ${
											selectedComponent === comp.id ? "ring-2 ring-white" : ""
										}`}
									>
										<div className="p-4 border-b border-gray-700">
											<h3 className="text-xl font-medium">{comp.name}</h3>
										</div>
										<div className="p-4 relative">
											<div className="p-4">
												<div className="scale-75 origin-top-left">
													{React.createElement(comp.component)}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))
				) : (
					// Display only the selected category with reversed component order
					<div className="space-y-4">
						{filteredComponents.map((comp) => (
							<div
								key={comp.id}
								onClick={() => setSelectedComponent(comp.id)}
								className={`bg-gray-900 rounded-lg overflow-hidden shadow-xl cursor-pointer transition-transform hover:scale-105 ${
									selectedComponent === comp.id ? "ring-2 ring-white" : ""
								}`}
							>
								<div className="p-4 border-b border-gray-700">
									<h3 className="text-xl font-medium">{comp.name}</h3>
								</div>
								<div className="p-4 h-64 relative">
									<div className="p-4">
										<div className="scale-75 origin-top-left">
											{React.createElement(comp.component)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			{/* Modal for selected component */}
			{selectedComponent && (
				<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
					<div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-screen overflow-auto">
						<div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center">
							<h2 className="text-2xl font-bold">
								{components.find((c) => c.id === selectedComponent)?.name}
							</h2>
							<button
								onClick={() => setSelectedComponent(null)}
								className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="p-6">
							{React.createElement(
								components.find((c) => c.id === selectedComponent)?.component
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

// Export removed as we're exporting the Home component at the top
