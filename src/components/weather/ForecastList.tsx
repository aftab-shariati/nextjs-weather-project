import ForecastItem from "@/components/weather/ForecastItem";
import type {Daily, ForecastResponse} from "@/types/api/ForecastResponse";
interface Props{
    forecast: ForecastResponse;
}

function ForecastList({forecast} : Props) {
    const dailyForecast = forecast?.daily || []; // Default to an empty array if forecast.daily is null
    return (
        <div className={"grid grid-cols-8"}>
            {
                dailyForecast.map((item: Daily) =>{
                 return <ForecastItem item={item}/>
                })
            }

        </div>
    );
}

export default ForecastList;