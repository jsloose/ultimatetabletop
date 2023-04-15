import "./Button.css";

const Button = ({ className, value, onClick }) => {
  return (
    <button className="button1" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;