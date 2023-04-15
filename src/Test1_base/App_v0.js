//Saved as: Test1/App_v0.js

import logo from './logo.svg';
import './App.css';
import './myStyle.css'
import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
};

const status = {
	isLoggedIn: 0
};

const products = [
	{ title: 'Cabbage', isFruit: false, id: 1 },
	{ title: 'Garlic', isFruit: false, id: 2 },
	{ title: 'Apple', isFruit: true, id: 3 },
	{ title: 'Pear', isFruit: true, id: 4 }
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

function LogInButton() {
  return (
	<div>
		<button onclick={status.isLoggedIn = 1}>Log In</button>
	</div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </div>
  );
}

function Greeting() {
	let content;
	if (status.isLoggedIn) {
		content = <p>Welcome!</p>;
	} else {
		content = <p>Please Log In To Continue</p>;
	}
	return (
		<div>
			{content}
		</div>
	);
}

function AppDefault() {
	return (
	<div>
		<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
	</div>
	);
}

function Content() {
	let content;
	if (status.isLoggedIn) {
		content = 
			<div>
				<Greeting />
			</div>;
	} else {
		content = 
			<div>
				<Greeting />
				<LogInButton />
			</div>;
	}
	return (
		<div>
			{content}
		</div>
	);
}

function FruitList() {
	const listItems = products.map(product =>
		<li
			key={product.id}
			style={{
				color: product.isFruit ? 'magenta' : 'darkgreen'
			}}
		>
			{product.title}
		</li>
	);
	
	return (
		<ul>{listItems}</ul>
	);
}

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function MyButton2({ count, onClick}) {

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function App() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div className="App">
			<header className="App-header">
				<Greeting />
				<LogInButton />
				<FruitList />
				<MyButton />
				<MyButton2 count={count} onClick={handleClick} />
				<MyButton2 count={count} onClick={handleClick} />
			</header>
		</div>
  );
}

export default App;

