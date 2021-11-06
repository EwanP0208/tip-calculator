import React from "react";
const presetPercentages = [5,10,15,25,50];

class TipControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.buttonSelected = this.buttonSelected.bind(this);

        this.state = {
            selectedButton: 0,
            customPercentage: props.tipPercent
        }
    }

    componentWillReceiveProps(props) {
        this.setState({customPercentage: props.tipPercent})
    }

    handleInputChange(event) {
        this.props.onPercentageChange(event.target.value);
        this.setState({
            selectedButton: 0,
            customPercentage: event.target.value
        })
    }

    buttonSelected = selectedButton => ev => {
        this.props.onPercentageChange(selectedButton);
        this.setState({
            selectedButton,
            customPercentage: ''
        })
    }    

    render() {
        return (
            <div className="bill--form__percentage">
                <label>Select Tip %</label>
                <div className="percentage--tiles">
                    {presetPercentages.map((percentage) => (
                        <button className={percentage === this.state.selectedButton ? 'selected' : ''} type="button" key={percentage} onClick={this.buttonSelected(percentage)}>{percentage}%</button>
                    ))}
                    <input 
                        // We only want to use the passed in props if no buttons are selected
                        min="0" max="100"
                        value={this.state.selectedButton === 0 ? this.state.customPercentage : ''} 
                        type="number" 
                        placeholder="Custom" 
                        onChange={this.handleInputChange} 
                    />
                </div>
            </div>
        )
    }
}

export default TipControl;