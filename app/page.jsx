import { fetchData } from "@/lib/data";
import "./page.css";
import Search from "@/components/search/search";
import Card from "@/ui/Card";

export default async function Home() {
	const data = await fetchData();
	return (
		<section>
			<Search />
			<section className="trending">
				<h1>Trending</h1>
				<section className="trending__wrapper">
					{data
						.filter((item) => item.isTrending)
						.map((item, index) => (
							<Card name="trending" data={item} key={index} />
						))}
				</section>
			</section>
			<section className="recommended">
				<h1>Recommended for you</h1>
				<section className="recommended__wrapper">
					{data
						.filter((item) => !item.isTrending)
						.map((item, index) => (
							<Card name="recommended" data={item} key={index} />
						))}
				</section>
			</section>
		</section>
	);
}
