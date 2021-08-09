import PropTypes from "prop-types";

const Button = ({ color, text, onAdd }) => {


  return (
    <button onClick={onAdd} className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "Add",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
