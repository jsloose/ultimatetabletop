import React from "react";
import "./npc_display.css";

const NPCDisp = ({id,setActiveTab}) => {

	const handleClick = () => {
		setActiveTab(id);
	};

    return (
		<div className="npcDisplayBox">
			<div>
				<button className="npcAtkButton" onClick={handleClick}>ATTACK!
				</button>
			</div>
			<div className="grid-container">
				<div className="npcdisp-name">Name</div>
				<div className="npcdisp-str">STR</div>
				<div className="npcdisp-dex">DEX</div>  
				<div className="npcdisp-con">CON</div>
				<div className="npcdisp-wis">WIS</div>
				<div className="npcdisp-int">INT</div>
				<div className="npcdisp-cha">CHA</div>
				<div className="npcdisp-image">Image</div>
				<div className="npcdisp-hp">HP</div>
				<div className="npcdisp-ac">AC</div>
			</div>
		</div>
	);
};

export default NPCDisp;