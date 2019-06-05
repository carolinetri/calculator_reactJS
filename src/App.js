/* eslint-disable no-eval */
import React, { Component } from 'react'; 
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Calc from './Calc';
import Entry from './Entry';
import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      entry: [],
      histo: [],
    };
    this.getData = this.getData.bind(this);
  }

  getData(val) {
    const entryInit = this.state.entry;
    switch(val) {
      case "=" :
        const resultCalculated = eval(entryInit);
        const tempHisto = {};
        tempHisto.op = entryInit;
        tempHisto.result = resultCalculated;
        const temp = [...this.state.histo, tempHisto];
        this.setState({entry: resultCalculated, result: resultCalculated, histo: temp});
        break;
      case "Retour" :
        if ((entryInit.length !== 0) && (entryInit.length !== undefined)) {
          let entryReturn = entryInit.substring(0, entryInit.length - 1);
          this.setState({entry: entryReturn});
        };
        break;
      case "C" :
        this.setState({result: "", entry: [], histo: []});   
        break;
      default :
        const tempEntry = entryInit + val;
        this.setState({entry: tempEntry})  

    }
  }

  render() {
    return (
      <Container className='App'>
        <Row>
          <Col md={6}>
            <Calc sendData={this.getData}/> 
          </Col>
          <Col md={6}>
            <Row>
              <Col md={12}>
                <Entry touche={this.state.entry}/>
              </Col>
              <Col md={12}>
                <Result historic={this.state.histo} />
              </Col>
            </Row>
          </Col>          
        </Row>
      </Container>
    );
  }
}

export default App;