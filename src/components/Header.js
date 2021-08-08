import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {

  const onClick = (e)=>{
    console.log(e.target.innerText)
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick = {onClick} />
    </header>
  );
};

export default Header;

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
//CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }