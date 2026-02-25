import { WEATHER_API_URL, WEATHER_API_KEY } from '../api/weatherApi.js';
import { useCallback } from 'react';

function useWeatherSearch(setWeather) {

  const handleOnSearchChange = useCallback((searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const weather3HoursFetch = fetch(
      `${WEATHER_API_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const weather5DaysFetch = fetch(
      `${WEATHER_API_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, weather3HoursFetch, weather5DaysFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const weather3HoursResponse = await response[1].json();
        const weather5DaysResponse = await response[2].json();

        const filteredData = {
          currentWeather: weatherResponse,
          weather3Hours: weather3HoursResponse,
          weather5Days: weather5DaysResponse,
        };
        setWeather(filteredData);
        console.log(filteredData);
      })
      .catch((err) => console.log(err));
  }, [setWeather]);

  return {
    handleOnSearchChange
  };
};

export default useWeatherSearch;
