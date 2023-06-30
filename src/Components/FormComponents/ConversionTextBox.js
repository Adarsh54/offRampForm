import React from "react";
import './ConversionTextBox.css';
import MoonPay from '../Images/MoonPay.png';

function ConversionTextBox () {
    return (
        <div className="conversionBox">
            <p className="conversionText">1 BTC = $40000</p>
            <div className="offRampService">
                <p className="imgText">By</p>
                <img className="offRampLogo" src={MoonPay} />
                <p className="imgText">MoonPay</p>
            </div>
        </div>
    );
}
export default ConversionTextBox;