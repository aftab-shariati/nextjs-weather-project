import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import {useState} from "react";
interface props{
    city:string
}
function Weather({city}:props) {

    const [weatherState, setWeatherState] = useState<Weather>(
        {
            city: city,
            wind:'',
            humidity:'',
            description:'',
            icon:'',
            daily:[]
        }
    );
    console.log(weatherState)
    
    return (
        <div>
            <SearchForm/>
            <WeatherInfo/>
            <ForecastList/>
        </div>
    );
}

export default Weather;