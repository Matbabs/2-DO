import { BehaviorSubject } from "rxjs"

export class WeatherService {

    static instance = new WeatherService()
    readonly URL = "http://api.airvisual.com/v2/city?"
    readonly API_KEY = "&key=6121f94a-de66-4313-b614-dcc135e9775c"
    private _maps = new Map<string, any>()
    private _weather = new BehaviorSubject({})

    getWeather(city: string, state: string, country: string) {
        fetch(`${this.URL}city=${city}&state=${state}&country=${country}${this.API_KEY}`)
        .then(res => res.json())
        .then(res => {
            this._maps.set(city, res)
            this._weather.next(res)
        })
    }

    get weather() {return this._weather}
    get maps() {return this._maps}

}

export default WeatherService.instance