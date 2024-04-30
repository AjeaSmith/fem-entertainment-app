export const fetchTrending = async () => {
	try {
		const response = await fetch(
			"https://ajeasmith.github.io/fem-entertainment-app/data.json"
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();

		const trending = data.filter((item) =>
			item.thumbnail.hasOwnProperty("trending")
		);
		return trending;
	} catch (error) {
		console.error("Error fetching data:", error);
		return null;
	}
};
