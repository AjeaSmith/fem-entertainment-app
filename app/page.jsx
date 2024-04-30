import { fetchTrending } from "@/lib/data";
import styles from "./page.module.css";
import Search from "@/components/search/search";
import TrendingCard from "@/ui/trendingCard";

export default async function Home() {
	const data = await fetchTrending();
	return (
		<>
			<Search />
			<section className={styles.trending}>
				<h1 className={`${styles.trending__heading}`}>Trending</h1>
				<section className={`${styles.trending__wrapper}`}>
					{data.map((item, index) => (
						<TrendingCard card={item} key={index} />
					))}
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
