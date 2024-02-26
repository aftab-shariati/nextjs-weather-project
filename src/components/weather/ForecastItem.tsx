import {Daily} from "@/types/api/ForecastResponse";
import WeatherIcon from "@/components/weather/WeatherIcon";

interface Props{
    item: Daily;
}

function ForecastItem({item}: Props) {
    let Day = new Date(item.dt * 1000).toLocaleDateString('en-us' , {weekday : "long"});
    console.log(Day)
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div>{Day}</div>
            <WeatherIcon icon={item.weather[0].icon} size={36}/>
            <div className={"mt-3"}>
                <span className={'text-primary'}>{item.temp.min}</span>
                -
                <span className={'text-primary'}>{item.temp.max}</span>
            </div>

        </div>
    );
}

export default ForecastItem;