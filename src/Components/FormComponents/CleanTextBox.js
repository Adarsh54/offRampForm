import React from "react";
import "./CleanTextBox.css";
import Dropdown from 'react-bootstrap/Dropdown';

function CleanTextBox(props) {

  return (
    <div className="textBox">
      <p className="tbHead">{props.label}</p>
      <div className="rowTextContainer">
        {props.isLabel ? <input className="tbInput" type='number'/> : <p className="conversion">3948394</p>}
        <Dropdown>
          <Dropdown.Toggle style={{fontSize: 30}} variant="avenir" id="dropdown-basic">
            Bitcoin
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Ethereum</Dropdown.Item>
            <Dropdown.Item href="#/action-2"></Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default CleanTextBox;
