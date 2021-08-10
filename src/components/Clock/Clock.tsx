import { useEffect, useState } from "react"
import "./Clock.css"

export default function Clock() {

    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        setTimeout(() => {
            const date = new Date()
            setTime({
                hours: date.getUTCHours(),
                minutes: date.getUTCMinutes(),
                seconds: date.getUTCSeconds()
            })
        }, 1000);
    }, [time])

    function timeToAngle(timing: number, base: number) {
        return `rotate(${(timing * 360 / base) - 90}deg)`
    }

    return (
        <div className="clock-container">
            <div className="center"></div>
            <div className="arrow hours" style={{transform: timeToAngle(time.hours, 12)}}></div>
            <div className="arrow minutes" style={{transform: timeToAngle(time.minutes, 60)}}></div>
            <div className="arrow seconds" style={{transform: timeToAngle(time.seconds, 60)}}></div>
        </div>
    )
}