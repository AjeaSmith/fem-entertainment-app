import Search from "@/components/search/search";

export const metadata = {
	title: "Bookmark | Entertainment App",
	description: "View all your bookmarked shows/movies",
};
export default function bookmark() {
	return (
		<div>
			<Search />
			<h2>Bookmark page</h2>
		</div>
	);
}
