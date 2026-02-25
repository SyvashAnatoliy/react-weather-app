import clearSkyDay from '../../assets/images/clearSkyDay.svg';
import clearSkyNight from '../../assets/images/clearSkyNight.svg';
import fewCloudsDay from '../../assets/images/fewCloudsDay.svg';
import fewCloudsNight from '../../assets/images/fewCloudsNight.svg';
import scatteredCloudsDay from '../../assets/images/scatteredCloudsDay.svg';
import scatteredCloudsNight from '../../assets/images/scatteredCloudsNight.svg';
import brokenCloudsDay from '../../assets/images/brokenCloudsDay.svg';
import brokenCloudsNight from '../../assets/images/brokenCloudsNight.svg';
import showerRainDay from '../../assets/images/showerRainDay.svg';
import showerRainNight from '../../assets/images/showerRainNight.svg';
import rainDay from '../../assets/images/rainDay.svg';
import rainNight from '../../assets/images/rainNight.svg';
import thunderstormDay from '../../assets/images/thunderstormDay.svg';
import thunderstormNight from '../../assets/images/thunderstormNight.svg';
import snowDay from '../../assets/images/snowDay.svg';
import snowNight from '../../assets/images/snowNight.svg';
import mistDay from '../../assets/images/mistDay.svg';
import mistNight from '../../assets/images/mistNight.svg';

const convertImgUrl = (weather) => {
    const code = weather.currentWeather.weather[0].icon;
    const url = {
        '01d': clearSkyDay,
        '01n': clearSkyNight,
        '02d': fewCloudsDay,
        '02n': fewCloudsNight,
        '03d': scatteredCloudsDay,
        '03n': scatteredCloudsNight,
        '04d': brokenCloudsDay,
        '04n': brokenCloudsNight,
        '09d': showerRainDay,
        '09n': showerRainNight,
        '10d': rainDay,
        '10n': rainNight,
        '11d': thunderstormDay,
        '11n': thunderstormNight,
        '13d': snowDay,
        '13n': snowNight,
        '50d': mistDay,
        '50n': mistNight
    }
    return url[code];
}

export default convertImgUrl
