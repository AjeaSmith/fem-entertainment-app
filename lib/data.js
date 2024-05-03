export const fetchData = async () => {
	try {
		const response = await fetch(
			"https://ajeasmith.github.io/fem-entertainment-app/data.json"
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		return null;
	}
};
