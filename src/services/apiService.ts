import { BehaviorSubject } from "rxjs";


export class apiService {

    static instance = new apiService();
    readonly URL = "https://api.publicapis.org/entries";
    private _news = new BehaviorSubject([])

    getNews() {
        fetch(this.URL)
        .then(res => res.json())
        .then(res => this._news.next(res.entries))
    }

    get news(){return this._news}

}

export default apiService.instance