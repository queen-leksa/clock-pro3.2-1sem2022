import React from "react";
import "./style.css";

export default ({value, type}) => {
    const style = {
        transform: `rotate(${type === "h" ? 360 / 12 * value : value * 6}deg)`
    }
    return <div className={`arrow arrow-${type}`} style={style} />
}