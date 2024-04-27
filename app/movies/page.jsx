import Search from "@/components/search/search";

export const metadata = {
	title: "Movies | Entertainment App",
	description: "View all upcoming movies!",
};
export default function Movies() {
	return (
		<div>
			<Search />
			<h2>Movies Page</h2>
		</div>
	);
}
