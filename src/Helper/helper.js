import {Sunny} from '../Images/Sunny.png';
import {Cloudy} from '../Images/Cloudy.png';
import {Fog} from '../Images/Fog.png';
import {Light_Fog} from '../Images/Light Fog.png';
import {Drizzle} from '../Images/Drizzle.png';
import {Rain} from '../Images/Rain.png';
import {Snow} from '../Images/Snow.png';
import {Light_Snow} from '../Images/Light Snow.png';
import {Freezing_Drizzle} from '../Images/Freezing Drizzle.png';
import {Freezing_Rain} from '../Images/Freezing Rain.png';
import {Ice_Pellets} from '../Images/Ice Pellets.png';
import {Heavy_Ice_Pellets} from '../Images/Heavy Ice Pellets.png';
import {Thunderstorm} from '../Images/Thunderstorm.png';

export const getFeelsLike = (weatherCode) => {
    if(weatherCode === 1000){
        return 'Sunny';
    }else if(weatherCode>= 1100 && weatherCode <2000){
        return Cloudy;
    }else if(weatherCode === 2000){
        return Fog;
    }else if(weatherCode >= 2100 && weatherCode < 4000){
        return Light_Fog;
    }else if(weatherCode === 4000){
        return Drizzle;
    }else if(weatherCode >= 4100 && weatherCode < 5000){
        return Rain;
    }else if(weatherCode === 5000){
        return Snow;
    }else if(weatherCode >= 5100 && weatherCode < 6000){
        return Light_Snow;
    }else if(weatherCode === 6000){
        return Freezing_Drizzle;
    }else if(weatherCode >= 6100 && weatherCode < 7000){
        return Freezing_Rain;
    }else if(weatherCode === 7000){
        return Ice_Pellets;
    }else if(weatherCode >= 7100 && weatherCode < 8000){
        return Heavy_Ice_Pellets;
    }else if(weatherCode === 8000){
        return Thunderstorm;
    }else{
        return 'Unknown';
    }
}

export const getWeatherImages = (weatherCode) => {
    if(weatherCode === 1000){
        return Sunny;
    }else if(weatherCode>= 1100 && weatherCode <2000){
        return 'Cloudy';
    }else if(weatherCode === 2000){
        return 'Fog';
    }else if(weatherCode >= 2100 && weatherCode < 4000){
        return 'Light Fog';
    }else if(weatherCode === 4000){
        return 'Drizzle';
    }else if(weatherCode >= 4100 && weatherCode < 5000){
        return 'Rain';
    }else if(weatherCode === 5000){
        return 'Snow';
    }else if(weatherCode >= 5100 && weatherCode < 6000){
        return 'Light Snow';
    }else if(weatherCode === 6000){
        return 'Freezing Drizzle';
    }else if(weatherCode >= 6100 && weatherCode < 7000){
        return 'Freezing Rain';
    }else if(weatherCode === 7000){
        return 'Ice Pellets';
    }else if(weatherCode >= 7100 && weatherCode < 8000){
        return 'Heavy Ice Pellets';
    }else if(weatherCode === 8000){
        return 'Thunderstorm'
    }else{
        return 'Unknown';
    }
}