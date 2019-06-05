import React from 'react';
import {Col} from 'reactstrap';
import './Bouton.css';


function Bouton(props) {
    let clsBtn = "clsBtn";
    if ((props.num === "Retour") || (props.num === "C")) {
        clsBtn += " clsOthers";
    } else {
        clsBtn += " clsNum";
    }
    return (
        <Col md="3"><button className={clsBtn} onClick={props.onClickBtn}>{props.num}</button></Col>
    )
}

export default Bouton;