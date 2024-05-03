"use client";
import { useEffect, useState } from "react";

export default function Card({ data, name }) {
	const [viewportWidth, setViewportWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth);
		};

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Call handleResize once to set initial viewport width
		handleResize();

		// Remove event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return name === "recommended" ? (
		<div className="recommended__item">
			<div
				style={{
					borderRadius: "8px",
					backgroundImage: `url(${
						viewportWidth >= 768
							? data.thumbnail.regular.large
							: data.thumbnail.regular.small
					})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					display: "flex",
					justifyContent: "end",
				}}
			>
				<button>
					<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
							stroke="#FFF"
							strokeWidth="1.5"
							fill="none"
						/>
					</svg>
				</button>
			</div>
			<div className="recommended__content">
				<p>
					{data.year} - {data.category} - {data.rating}
				</p>
				<h3>{data.title}</h3>
			</div>
		</div>
	) : (
		<div
			style={{
				backgroundImage: `url(${
					viewportWidth >= 768
						? data.thumbnail.trending.large
						: data.thumbnail.trending.small
				})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="trending__item"
		>
			<button>
				<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
					<path
						d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
						stroke="#FFF"
						strokeWidth="1.5"
						fill="none"
					/>
				</svg>
			</button>

			<div className="trending__content">
				<p>
					{data.year} - {data.category} - {data.rating}
				</p>
				<h3>{data.title}</h3>
			</div>
		</div>
	);
}
