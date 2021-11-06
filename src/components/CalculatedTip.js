import React from "react";

class CalculatedTip extends React.Component {
    calculateAmounts = ({bill, tip, people}) => {
        //Can't divide by 0
        if (!people || people === "0") { 
            return {
                totalPerPerson: "0.00",
                tipPerPerson: "0.00"
            }
        }

        bill =   parseFloat(bill) || 0;
        tip =    parseInt(tip)    || 0;
        people = parseInt(people) || 1;

        let tipAdded = (tip / 100) * + bill;
        let total = bill + tipAdded;
    
        return {
            totalPerPerson: (total / people).toFixed(2),
            tipPerPerson: (tipAdded / people).toFixed(2)
        }
    }

    render() {
        const {billValue, tipPercent, numberOfPeople} = this.props;

        const calculatedData = this.calculateAmounts({
            bill: billValue,
            tip:   tipPercent,
            people: numberOfPeople
        })

        return(
            <div>
                <div className="bill--result">
                    <div className="bill--result__text">
                        <p className="bill--result__title">Tip Amount</p>
                        <p className="bill--result__pp">/ person</p>
                    </div>
                    <p className="bill--result__value">£{calculatedData.tipPerPerson}</p>
                </div>
                <div className="bill--result">
                    <div className="bill--result__text">
                        <p className="bill--result__title">Total</p>
                        <p className="bill--result__pp">/ person</p>
                    </div>
                    <p className="bill--result__value">£{calculatedData.totalPerPerson}</p>
                </div>
            </div>
        )
    }
}

export default CalculatedTip;