import React from "react";

export default ({value}) => {
    const val = (value + "").length === 2 ? value : "0" + value;
    return <div>{val}</div>
}