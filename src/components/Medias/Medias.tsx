import "./Medias.css"

export default function Medias() {

    return (
        <div className="app-container">
            <img src={'../../assets/messenger.png'}/>
            <img src={process.env.PUBLIC_URL + './assets/facebook.webp'}/>
            <img src={process.env.PUBLIC_URL + './assets/insta.webp'}/>
            <img src={process.env.PUBLIC_URL + './assets/reddit.png'}/>
            <img src={process.env.PUBLIC_URL + './assets/medium.png'}/>
            <img src={process.env.PUBLIC_URL + './assets/yt.png'}/>
            <img src={process.env.PUBLIC_URL + './assets/netflix.webp'}/>
            <img src={process.env.PUBLIC_URL + './assets/prime.png'}/>
            <img src={process.env.PUBLIC_URL + './assets/canal.png'}/>
        </div>
    )
}