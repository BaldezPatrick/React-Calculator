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
        if(this.state.current === 0) {
            this.setState({operation, current: 1, clearDisplay: true})
        } else {
            const isEquals = operation === '='
            const currentOp = this.state.operation
            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOp} ${values[1]}`)
            }catch(e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0
            this.setState({
                displayValue: values[0],
                operation: isEquals ? null : operation,
                current: isEquals ? 0: 1,
                clearDisplay: !isEquals,
                values
            })
        }
    }

    addDig(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }
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