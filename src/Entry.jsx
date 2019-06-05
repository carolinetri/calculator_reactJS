import React from "react";
import './Entry.css';

function Entry(props) {
    return (
        <div className="entry">
            <h1>Saisies</h1>  
            <div className="framed">{props.touche}</div>
        </div>
    )  
}

export default Entry;