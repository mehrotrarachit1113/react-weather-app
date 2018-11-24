 import axios from 'axios';

 const API_KEY = '0cec13b6bce587d447bb435b9d057f2d';
 const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

 export const FETCH_WEATHER = 'FETCH_WEATHER';

 export function fetchWeather(city){
   const url = `${ROOT_URL}&q=${city},in`;
   const request = axios.get(url);

   return{
     type : FETCH_WEATHER,
     payload : request
   };
 }
