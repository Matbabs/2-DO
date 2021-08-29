import "./API.css"
import { useEffect, useState } from "react"
import apiService from "../../services/apiService"

export default function API() {

    const [apis, setAPI] = useState([])

    useEffect(() => {
        const sub = apiService.news.subscribe(setAPI)
        apiService.getNews()
        return () => sub.unsubscribe()
    }, [])

    return (
        <div className="api-containers">
            {apis && apis.map((art: any, id) => (
                <div key={id}>
                    <span> {art.API}</span> <br/>
                    <small>{art.Description}</small> <br/>
                    <a href={`${art.Link}`}>{art.Link}</a>
                   <hr/>
                </div>
                
            ))}
        </div>
       
    )

}