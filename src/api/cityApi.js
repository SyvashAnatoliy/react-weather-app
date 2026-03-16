export const CityApiUrl =
	"https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=";

export const CityApiOptions = {
	method: "GET",
	headers: {
		"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
		"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
	},
};

try {
	const response = await fetch(CityApiUrl, CityApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}