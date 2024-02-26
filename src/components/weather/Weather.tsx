import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import {useState} from "react";
import {callWeatherApi} from "@/api/api";
interface props{
    city:string
}
function Weather({city}:props) {

    const [weatherState, setWeatherState] = useState<Weather>(
        {
            city: '',
            wind:'',
            humidity:'',
            description:'',
            icon:'',
            daily:[]
        }
    );

    const getWeatherData = async (city :string) =>{
      const response =   await callWeatherApi({city})
        console.log(response)

        const weather :Weather = {
          city : response.name,
          wind : response.wind.speed,
          humidity : response.main.humidity,
          description : response.weather[0].description,
          icon : response.weather[0].icon,
          daily:[]
      }
        setWeatherState(weather);
    }


    if(weatherState.city.length === 0){
        getWeatherData(city)
    }

    return (
        <div className={"bg-white shadow mt-4 rounded-2xl p-8 py-16"}>
            <SearchForm city={city} getWeatherData = {getWeatherData}/>
            <WeatherInfo weather ={weatherState} />
            <ForecastList/>
        </div>
    );
}

export default Weather;