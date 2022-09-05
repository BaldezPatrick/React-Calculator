import React, { Component } from "react";
import './Calculator.css';
import Button from '../Components/Button';
import Display from "../Components/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = {...initialState}

    constructor(props) {
        super(props)
        this.clearNumber = this.clearNumber.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDig = this.addDig.bind(this)
    }

    clearNumber() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDig(n) {
        console.log(n)
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearNumber} triple />
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDig}/>
                <Button label="8" click={this.addDig}/>
                <Button label="9" click={this.addDig}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDig}/>
                <Button label="5" click={this.addDig}/>
                <Button label="6" click={this.addDig}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDig}/>
                <Button label="2" click={this.addDig}/>
                <Button label="3" click={this.addDig}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDig} double/>
                <Button label="." click={this.addDig}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}