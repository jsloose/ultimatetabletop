import React, { useState } from "react";
import Wrapper from './Wrapper.js'
import ButtonBox from './ButtonBox.js'
import Button from './Button.js'
import Screen from './Screen.js'

const NumPad = () => {
  let [calc, setCalc] = useState({
		sign: "",
		num: 0,
		res: 0,
	});

  const btnValues = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ["B",0,"C"],
  ];

  const toLocaleString = (num) =>
		String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  const removeSpaces = (num) => num.toString().replace(/\s/g, "");

  const numClickHandler = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;  //I know its here, I just don't know why.
	
		if (removeSpaces(calc.num).length < 16) {
		  setCalc({
			...calc,
			num:
			  calc.num === 0 && value === "0"
				? "0"
				: removeSpaces(calc.num) % 1 === 0
				? toLocaleString(Number(removeSpaces(calc.num + value)))
				: toLocaleString(calc.num + value),
			res: !calc.sign ? 0 : calc.res,
		  });
		}
	};

  const resetClickHandler = () => {
		setCalc({
		  ...calc,
		  sign: "",
		  num: 0,
		  res: 0,
		});
	};

  return (
	  <Wrapper>
		<Screen value={calc.num ? calc.num : calc.res} />
		<ButtonBox>
		  {
			btnValues.flat().map((btn, i) => {
			  return (
				<Button
				  key={i}
				  className={btn === "=" ? "equals" : ""}
				  value={btn}
				  onClick={
            btn === "C"
            ? resetClickHandler
            : numClickHandler
				  }
				/>
			  );
			})
		  }
		</ButtonBox>
	  </Wrapper>
	);
};

export default NumPad;