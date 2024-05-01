import Image from "next/image";
import "./search.css";
export default function Search() {
	return (
		<form>
			<span>
				<Image
					src={"/assets/icon-search.svg"}
					width={24}
					height={24}
					alt="magnifying glass"
				/>
				<input type="search" placeholder="Search for movies or TV series" />
			</span>
		</form>
	);
}
