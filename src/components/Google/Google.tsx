import { useState } from "react"
import "./Google.css"

export default function Google() {

    const [search, setSearch] = useState("")

    function handleChange(e: any) {
        setSearch(e.target.value)
    }

    function handleKeyDown(e: any){
        if (e.key === 'Enter')
            searchInGoogle()
    }

    function searchInGoogle() {
        window.open(`https://www.google.com/search?q=${search}`)
        setSearch("")
    }

    return (
        <div className="google-container">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
            <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={search}/>
            <button onClick={searchInGoogle} type="submit">rechercher</button>
            <div className="app-google">
                <img src={process.env.PUBLIC_URL + './assets/gmail.webp'}/>
                <img src={process.env.PUBLIC_URL + './assets/drive.png'}/>
            </div>
        </div>
    )

}