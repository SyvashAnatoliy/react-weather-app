export const CityApiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=';
export const CityApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c72fe5f182msh5d52e8a072fd61ap18acdajsna642ed925d39',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(CityApiUrl, CityApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}