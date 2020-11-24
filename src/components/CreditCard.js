import React from 'react';

function CreditCard (props) {

    let secretNum = `**** **** **** ` + props.number.slice(-4);
    let style = { 
        color: props.color, 
        backgroundColor: props.bgColor,
        width: 300,
        margin: 10,
     };
  
    return (
      <div className="creditCard" style={style} id="iteration5">
        <div>
          <div>
            <p id="credidCard">{props.type}</p>
          </div>
        </div>
        <div className="creditPersonal">
          <p id="CreditCardNumber">{secretNum}</p>
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}{props.bank}
            </p>
          <p>{props.owner}</p>
        </div>
      </div>
    );
  }

export default CreditCard;