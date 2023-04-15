import React from "react";

const Dropdown = () => {

	const options = [
	{ label: 'Monster 1', value: 'Goblin Leader' },
	{ label: 'Monster 2', value: 'Goblin Follower' },
	{ label: 'Monster 3', value: 'Goblin Mage' },
	{ label: 'Monster 4', value: 'Flower' },
	];

 	const [value, setValue] = React.useState('fruit');

 	const handleChange = (event) => {
   		setValue(event.target.value);
 	};

 	return (
		<div className="drpSelect" >
            <select value={value} onChange={handleChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
            </select>
	    </div>
    );
};

export default Dropdown