import "./Medias.css"

export default function Medias() {

    return (
        <div className="app-container">
            <a href="https://www.messenger.com/"><img src={'../../assets/messenger.png'} alt="icon"/></a> 
            <a href="https://www.facebook.com/"><img src={process.env.PUBLIC_URL + './assets/facebook.webp'} alt="icon"/></a>
            <a href="https://www.instagram.com/"><img src={process.env.PUBLIC_URL + './assets/insta.webp'} alt="icon"/></a>
            <a href="https://www.reddit.com/"><img src={process.env.PUBLIC_URL + './assets/reddit.png'} alt="icon"/></a> 
            <a href="https://www.notion.so/"><img src={process.env.PUBLIC_URL + './assets/notion.png'} alt="gdrive logo"/></a>
            <a href="https://medium.com/"><img src={process.env.PUBLIC_URL + './assets/medium.png'} alt="icon"/></a>
            <a href="https://www.youtube.com/"><img src={process.env.PUBLIC_URL + './assets/yt.png'} alt="icon"/></a> 
            <a href="https://www.netflix.com/browse"><img src={process.env.PUBLIC_URL + './assets/netflix.webp'} alt="icon"/></a>
            <a href="https://www.canalplus.com/live/"><img src={process.env.PUBLIC_URL + './assets/canal.png'} alt="icon"/></a>
        </div>
    )
}