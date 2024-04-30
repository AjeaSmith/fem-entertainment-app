import styles from "./page.module.css";
import Search from "@/components/search/search";
import data from "../lib/data.json";

export default function Home() {
	const trendingData = data.filter((item) =>
		item.thumbnail.includes("trending")
	);
	console.log("trending", trendingData)
	return (
		<>
			<Search />
			<section className={styles.trending}>
				<h1 className={`${styles.trending__heading}`}>Trending</h1>
				<section className={`${styles.trending__wrapper} snaps-inline`}>
					{data.map((card, index) => (
						<div
							key={index}
							className={styles.trending__item}
							style={{
								background: `url(${card.thumbnail.trending.large})`,
							}}
						>
							<button>bookmark</button>
							<div>
								<p>
									{card.year} - {card.category} - {card.rating}
								</p>
								<h3>{card.title}</h3>
							</div>
						</div>
					))}

					{/* <div className={styles.trending__item}>
						<button>bookmark</button>
						<div>
							<p>2019 - Movie - PG</p>
							<h3>Movie title</h3>
						</div>
					</div>
					<div className={styles.trending__item}>
						<button>bookmark</button>
						<div>
							<p>2019 - Movie - PG</p>
							<h3>Movie title</h3>
						</div>
					</div>
					<div className={styles.trending__item}>
						<button>bookmark</button>
						<div>
							<p>2019 - Movie - PG</p>
							<h3>Movie title</h3>
						</div>
					</div>
					<div className={styles.trending__item}>
						<button>bookmark</button>
						<div>
							<p>2019 - Movie - PG</p>
							<h3>Movie title</h3>
						</div>
					</div> */}
				</section>
			</section>
			<section>
				<h1>Recommended for you</h1>
				<section className={styles.recommended__wrapper}>
					<div>
						<button>bookmark</button>
						<div>
							<p>2020 - Movie - PG</p>
							<h3>Movie title</h3>
						</div>
					</div>
				</section>
			</section>
		</>
	);
}
