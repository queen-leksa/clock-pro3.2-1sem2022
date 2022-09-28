import React from "react";
import Time from "../Time";
import Arrow from "../Arrow";
import "./style.css";

export default () => {
    return <div className="watch">
        <Arrow value="11" type="h" />
        <Arrow value="50" type="m" />
        <Arrow value="36" type="s" />
        <div className="watch-nail"/>
        <div className="watch-info">
            <Time value="11"/>:<Time value="50"/>:<Time value="36"/>
        </div>
    </div>
}