//Saved as: Test1/App_v1.jsx

import './Test1/myStyle.css';
import './Test1/navBarStyle.css';
import './Test1/sideBarStyle.css';
import './Test1/npcDisplay.css';
import './Test1/attackDisplay.css';

function TopMenu() {
	return (
		<div className="navbar">
			<a href="#StartBattle">Start Battle</a>
			<a href="#CreateNPC">Create NPC</a>
			<a href="#SearchNPC">Search NPC</a>
			<div className="dropdown">
				<button className="dropbtn">Dropdown
				</button>
				<div className="dropdown-content">
					<a href="#Link1">Link 1</a>
					<a href="#Link2">Link 2</a>
					<a href="#Link3">Link 3</a>
				</div>
			</div>
		</div>
	);
}

function SideMenu() {
	return (
		<div className="vertical-menu">
			<a href="#npc1">NPC 1</a>
			<a href="#npc2">NPC 2</a>
			<a href="#npc3">NPC 3</a>
			<a href="#npc4">NPC 4</a>
		</div>
	);
}

function MonsterDisplay() {
	const monster = {
		name: "Rakshasa",
		size: "medium",
		type: "fiend",
		alignment: "lawful evil",
		armorClass: 16,
		hitPoints: 110,
		speed: 40,
		strength: 14,
		dexterity: 17,
		constitution: 18,
		intelligence: 13,
		wisdom: 16,
		charisma: 20,
		savingThrows: "None",
		skills: "Deception, Insight",
		weakness: "Magical Piercing",
		resistance: "Non-magical",
		immunity: "None",
		senses: "Darkvision 60",
		language: "Common, Infernal",
		challengeRating: 13,
		abilities: "Limited Magic Immunity, Innate Spellcasting",
		source: "Monster Manual"
	}

	

	return (
		<div className="grid-container">
			<div className="npcdisp-atk">
				<button onClick={myFunction}>ATTACK!
				</button>
			</div>
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
	);
}

function AttackDisplay(){

	return (
		<div className="attack-main">
			<div className="attack-display">
				<div>
					<button onClick={myFunction2}>EXIT ATTACK
					</button>
				</div>
				<div>
					Monster
				</div>
				<div className="atkgrid-container">
					<div className="atkgrid-s1">1</div>
					<div className="atkgrid-s2">2</div>
					<div className="atkgrid-s3">3</div>
					<div className="atkgrid-s4">4</div>
				</div>
				<div>
					Damage
				</div>
				<div className="dmggrid-container">
					<div className="dmggrid-d1">1</div>
					<div className="dmggrid-d2">2</div>
					<div className="dmggrid-d3">3</div>
					<div className="dmggrid-d4">4</div>
					<div className="dmggrid-d5">5</div>
					<div className="dmggrid-d6">6</div>
					<div className="dmggrid-d7">7</div>
					<div className="dmggrid-d8">8</div>
					<div className="dmggrid-d9">9</div>
					<div className="dmggrid-d0">0</div>
				</div>
			</div>
		</div>
	);
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

function myFunction2() {
    document.getElementById("demo").innerHTML = "Goodbye World";
}

function App() {
    let words = "Justin";
	return (
		<div className="App-header">
			<header>
				<TopMenu />
				<SideMenu />
				<MonsterDisplay />
                <AttackDisplay />
                <div id='demo'>
                    {words}
                </div>
			</header>
		</div>
  );
}

export default App;

