import React, { Component } from "react";
import './Calculator.css';
import Button from '../Components/Button';
import Display from "../Components/Display";

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.clearNumber = this.clearNumber.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDig = this.addDig.bind(this)
    }

    clearNumber() {
        console.log('Limpar')
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
                <Display value={100} />
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