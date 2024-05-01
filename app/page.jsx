import { fetchTrending } from "@/lib/data";
import "./page.css";
import Search from "@/components/search/search";
import TrendingCard from "@/ui/trendingCard";

export default async function Home() {
	const data = await fetchTrending();
	return (
		<section>
			<Search />
			<section className="trending">
				<h1>Trending</h1>
				<section className="trending__wrapper">
					{data.map((item, index) => (
						<TrendingCard card={item} key={index} />
					))}
				</section>
			</section>
			<section>
				<h1>Recommended for you</h1>
				<section className="recommended__wrapper">
					<div>
						<button>bookmark</button>
						<div>
							<p>2020 - Movie - PG</p>
							<h3>Movie title</h3>
						</div>
					</div>
				</section>
			</section>
		</section>
	);
}
