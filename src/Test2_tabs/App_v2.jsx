//Saved as: Test2/App_v1.jsx

import "./Test2/tab_styling.css";

function RunTabs() {
	return (
		<div>
			<h2>Tabs</h2>
			<p>Click on the buttons inside the tabbed menu:</p>

			<div className="tab">
				<button className="tablinks" onClick={openCity('London')}>London</button>
				<button className="tablinks" onClick={openCity('Paris')}>Paris</button>
				<button className="tablinks" onClick={openCity('Tokyo')}>Tokyo</button>
			</div>

			<div id="London" className="tabcontent">
				<h3>London</h3>
				<p>London is the capital city of England.</p>
			</div>
		  
			<div id="Paris" className="tabcontent">
				<h3>Paris</h3>
				<p>Paris is the capital of France.</p> 
			</div>
		  
			<div id="Tokyo" className="tabcontent">
				<h3>Tokyo</h3>
				<p>Tokyo is the capital of Japan.</p>
			</div>


		</div>
	);
}

function openCity(cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
  }

const App = () => {
  return (
    <div>
		<RunTabs />
    </div>
  );
};
export default App;



