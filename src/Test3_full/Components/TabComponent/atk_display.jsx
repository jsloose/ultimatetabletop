import React from "react";
import "./attackDisplay.css";
import DropDown from "./dropdown.jsx";
import NumPad from "./numPad.js";

const ATKDisp = ({id,setActiveTab}) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <div className="attack-display">
            <div>
                <button className="atkDispExtButton" onClick={handleClick}>EXIT ATTACK
                </button>
            </div>
            <div>
                Monster
            </div>
            <div>
                <DropDown />
            </div>
            <div>
                Damage
            </div>
            <div>
                <NumPad />
            </div>
            <div>
                <button className = "atkDispSbtButton" onClick={handleClick}>SUBMIT
                </button>
            </div>
        </div>
    );
};

export default ATKDisp;

