"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
export default function TrendingCard({ card }) {
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

	return (
		<div
			style={{
				backgroundImage: `url(${
					viewportWidth >= 768
						? card.thumbnail.trending.large
						: card.thumbnail.trending.small
				})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className={styles.trending__item}
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

			<div className={styles.trending__content}>
				<p className={styles.trending__subheading}>
					{card.year} - {card.category} - {card.rating}
				</p>
				<h3>{card.title}</h3>
			</div>
		</div>
	);
}
