import Search from "@/components/search/search";
import styles from "../page.module.css";
export const metadata = {
	title: "TV Series | Entertainment App",
	description: "View all upcoming shows!",
};
export default function Shows() {
	return (
		<div>
			<Search />
			Shows Page
		</div>
	);
}
