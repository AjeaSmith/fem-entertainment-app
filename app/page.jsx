import styles from "./page.module.css";
import Search from "@/components/search/search";

export default function Home() {
	return (
		<>
			<Search />
			<section>
				<h1>Trending</h1>
				<section>
					<div>
						<button>bookmark</button>
						<div>
							<p>2019 - Movie - PG</p>
							<h3>Movie title</h3>
						</div>
					</div>
				</section>
			</section>
			<section>
				<h1>Recommended for you</h1>
				<section>
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
