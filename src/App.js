import React from 'react';
import './App.scss';
import CalculatedTip from './components/CalculatedTip';
import TipControl from './components/TipControl';

const DEFAULT_STATE = {
    billValue: '',
    tipPercent: '0',
    numberOfPeople: ''
}

class App extends React.Component {
    constructor() {
        super();

        this.state = DEFAULT_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePercentageChange = this.handlePercentageChange.bind(this);
        this.resetChanges = this.resetChanges.bind(this);
    }

    handleInputChange(event) {
        let targetName = event.target.name;
        let targetValue = event.target.value;

        // //Need to make sure that the bill value always has 2dp
        // if (targetName === "billValue") {
        //     targetValue = Number(targetValue).toFixed(2);
        // }

        this.setState({
            [targetName]: targetValue
        });
    }

    handlePercentageChange(percentage) {
        this.setState({tipPercent: percentage});
    }

    resetChanges() {
        this.setState(DEFAULT_STATE);
    }

    render() {
        return (
        <div className="app">
            <img className="app--title" alt="SPLITTER" src="images/logo.svg" />
            <div className="bill--container">
                <div className="bill--form">
                    <label>Bill</label>
                    <input className="bill--form__value"
                        name="billValue" type="number"
                        min="0" step="0.01" value={this.state.billValue} 
                        placeholder="0"
                        onChange={this.handleInputChange}
                    />
                    <TipControl 
                        tipPercent={this.state.tipPercent} 
                        onPercentageChange={this.handlePercentageChange}
                    />
                    <label>Number of People</label>
                    <input className="bill--form__people"
                        name="numberOfPeople" type="number"
                        min="1" value={this.state.numberOfPeople}
                        placeholder="0"
                        onChange={this.handleInputChange} 
                    />
                </div>
                <div className="bill--results">
                    <CalculatedTip 
                        billValue={this.state.billValue} 
                        tipPercent={this.state.tipPercent} 
                        numberOfPeople={this.state.numberOfPeople} 
                    />
                    <button className="button--reset" onClick={this.resetChanges}>Reset</button>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
