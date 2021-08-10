import { useState } from "react"
import "./Card.css"

export default function Card(props: any) {

    const {cardData} = props
    const [isOpen, setIsOpen] = useState(true)
    const [position, setPosition] = useState({
        x: cardData.position.x,
        y: cardData.position.y
    })
    let relPosition = {x: 0, y: 0}

    function handleClick(e: any) {
        const rect = e.target.getBoundingClientRect()
        document.onmousemove = drag
        relPosition = {x: e.clientX - rect.left, y: e.clientY - rect.top}
    }

    function drag(e: any) {
        setPosition({x: e.clientX - relPosition.x, y: e.clientY - relPosition.y})
    }

    function handleRelease() {
        document.onmousemove = () => {};
    }

    function changeIsOpen() {
        setIsOpen(!isOpen)
    }

    return (
        <div className="card-container"
        style={{
            top: position.y,
            left: position.x,
            height: isOpen ? '' : '50px',
            padding: isOpen ? '25px' : '0px',
            paddingTop: isOpen ? '75px' : '0px'
        }}>
            <div className="card-header"
            onMouseDown={handleClick}
            onMouseUp={handleRelease}>
                <div>{cardData.title}</div>
                <div className="card-button"
                onClick={changeIsOpen}></div>
            </div>
            <div className="card-content"
            style={{
                height: isOpen ? '' : '0px'
            }}>
                {cardData.component}
            </div>
         </div>
    )
}