import React from "react";
import './PaymentMethodBox.css';
import GooglePay from '../Images/GooglePay.png';

function PaymentMethodBox () {
    return (
        <div className="payBox">
            <img className="GPay" src={GooglePay} alt="HI"/>
        </div>
    );
}
export default PaymentMethodBox;