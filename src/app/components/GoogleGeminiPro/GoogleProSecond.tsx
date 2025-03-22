"use client";

import { Camera, History, Settings } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const GeminiProSecond: React.FC = () => {
	const [cameraAccess, setCameraAccess] = useState(false);
	const [showProcessing, setShowProcessing] = useState(false); // Control visibility of Page 2

	useEffect(() => {
		// Request camera permission on component mount
		const requestCameraPermission = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
				});
				setCameraAccess(true);
				// Stop the stream immediately after getting permission.  We only need
				// to confirm access, not keep the camera active.
				stream.getTracks().forEach((track) => track.stop());
			} catch (error) {
				console.error("Camera permission denied:", error);
				// Handle the error (e.g., show a message to the user)
				setCameraAccess(false);
			}
		};

		requestCameraPermission();
	}, []);

	const handleScanClick = () => {
		setShowProcessing(true);

		//Simulate the click of button and processing time, the redirection to results page would be handled here
		setTimeout(() => {
			setShowProcessing(true);
		}, 500);
	};

	return (
		<div className="flex">
			{/* Page 1: Home Screen */}
			<div className="w-[375px] h-[812px] bg-gradient-to-b from-blue-50 to-cyan-50 rounded-lg overflow-hidden shadow-lg relative border border-gray-300">
				<div className="absolute top-4 left-4">
					{/*  Logo (Placeholder - Replace with an actual SVG or image)  */}
					<div className="w-8 h-8 bg-blue-200 rounded-full"></div>
				</div>

				<div className="flex flex-col items-center justify-center h-full">
					<button
						onClick={handleScanClick}
						className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-md  ${
							!cameraAccess ? "opacity-50 cursor-not-allowed" : ""
						}`}
						disabled={!cameraAccess}
					>
						<Camera className="inline-block mr-2" />
						Scan
					</button>
					<div className="text-sm text-gray-700 mt-2">
						{cameraAccess
							? "" // No message needed if camera access is granted
							: "Please enable camera access in settings."}
					</div>

					<div className="mt-8 w-full">
						<Swiper spaceBetween={50} slidesPerView={1} loop={true}>
							<SwiperSlide>
								<div className="flex flex-col items-center">
									<img
										src="https://placehold.co/300x150/EEE/31343C"
										alt="Chord Example"
										className="rounded-lg shadow-sm"
									/>
									<p className="mt-2 text-black">Scan a Chord</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="flex flex-col items-center">
									<img
										src="https://placehold.co/300x150/EEE/31343C"
										alt="Tab Example"
										className="rounded-lg shadow-sm"
									/>
									<p className="mt-2 text-black">Scan a Tab</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="flex flex-col items-center">
									<img
										src="https://placehold.co/300x150/EEE/31343C"
										alt="Sheet Music Example"
										className="rounded-lg shadow-sm"
									/>
									<p className="mt-2 text-black">Scan Sheet Music</p>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>

				<div className="absolute bottom-4 w-full flex justify-around">
					<button className="text-gray-600 hover:text-gray-800">
						<History />
					</button>
					<button className="text-gray-600 hover:text-gray-800">
						<Settings />
					</button>
				</div>
			</div>

			{/* Page 2: Image Processing Screen */}
			{showProcessing && (
				<div className="w-[375px] h-[812px] bg-gradient-to-b from-blue-50 to-cyan-50 rounded-lg overflow-hidden shadow-lg relative border border-gray-300 ml-4">
					<div className="flex flex-col items-center justify-center h-full">
						<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
						<p className="mt-4 text-black">Analyzing...</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default GeminiProSecond;
