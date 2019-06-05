import React from 'react';
import './Result.css';


function Result(props) {
        return(
            <div className="result">
                <h1>Résultat</h1> 
                <ul className="framed">
                    {props.historic.map((his, index) => (
                        <li className="listItem" key={index}>
                            <p className="op">{his.op}</p>
                            <p className="lastResult">{his.result}</p>                            
                        </li>
                    ))}
                </ul>    
            </div>
        )  
}

export default Result;