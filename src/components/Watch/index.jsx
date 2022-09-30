import React, {useState} from "react";
import Time from "../Time";
import Arrow from "../Arrow";
import "./style.css";

export default () => {
    const [time, setTime] = useState(new Date());
    // const rand = (n) => Math.floor(Math.random() * n + 1000000000000);
    // let time = new Date();
    setTimeout(function() {
        setTime(new Date());
    }, 1000);
    return <div className="watch">
        <Arrow value={time.getHours()} type="h" />
        <Arrow value={time.getMinutes()} type="m" />
        <Arrow value={time.getSeconds()} type="s" />
        <div className="watch-nail"/>
        <div className="watch-info">
            <Time value={time.getHours()}/>:<Time value={time.getMinutes()}/>:<Time value={time.getSeconds()}/>
        </div>
    </div>
}