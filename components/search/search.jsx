import Image from "next/image";
import styles from "./search.module.css";
export default function Search() {
	return (
		<form className={styles.form}>
			<span className={styles.search__wrapper}>
				<Image
					className={styles.search__logo}
					src={"/assets/icon-search.svg"}
					width={24}
					height={24}
					alt="magnifying glass"
				/>
				<input
					className={styles.search__input}
					type="search"
					placeholder="Search for movies or TV series"
				/>
			</span>
		</form>
	);
}
