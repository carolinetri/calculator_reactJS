import React, {Component} from 'react';
import Bouton from './Bouton';
import {Container, Row} from 'reactstrap';
import './Calc.css';

const array = ["7", "8", "9", "+", "4", "5", "6", "-", "3", "2", "1", "/", "0", ".", "=", "*" ]

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: [],

        };
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        this.setState({tab: array});
    }

    handleClick(item) {
        this.props.sendData(item);
    }

    render() {
        return (
            <Container className="calc">
                <h1>Calculatrice</h1>
                <hr />
                <Row className="line">
                    <Bouton onClickBtn={() => this.handleClick("Retour")} num="Retour" />
                    <Bouton onClickBtn={() => this.handleClick("C")} num="C"/>
                </Row>
                <Row className="line">
                    {this.state.tab.map(item => ( 
                        <Bouton key={item} onClickBtn={() => this.handleClick(item)} num={item} />
                    ))}
                </Row>
            </Container>
        )
    }

}

export default Calc;