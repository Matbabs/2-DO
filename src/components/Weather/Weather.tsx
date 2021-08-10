import { useEffect, useState } from "react"
import weatherService from "../../services/weatherService"
import "./Weather.css"

export default function Weather(props: any) {

    const wt: any = {}
    const {city, state, country} = props
    const [weather, setWeather] = useState(wt)

    useEffect(() => {
        const sub = weatherService.weather.subscribe(() => setWeather(weatherService.maps.get(city)))
        weatherService.getWeather(city, state, country)
        return () => sub.unsubscribe()
    }, [true])

    return (
        <div className="weather-container">
            <span>{city}</span> <br/>
            <small>{state}, {country}</small>
            { weather && weather.data && (
                <div>
                    <div>
                        Temp: <span> {weather.data.current.weather.tp}°C </span> <br/>
                        Humidity: <span> {weather.data.current.weather.hu}% </span> <br/>
                        Wind spd: <span> {weather.data.current.weather.ws}m/s </span> <br/>
                        Wind dir: <span> {weather.data.current.weather.wd}° </span> <br/>
                        Atmo prs: <span> {weather.data.current.weather.pr}hPa </span> <br/>
                        Aqicn: <span> {weather.data.current.pollution.aqicn} </span> 
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${weather.data.current.weather.ic}@2x.png`}/>
                </div>
            )}
        </div>
    )
}