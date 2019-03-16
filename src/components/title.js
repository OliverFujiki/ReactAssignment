import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>ReactAssignment</h1>
    </header>
  );
}
const headerStyle = {
  background: "#180606",
  font: "verdena",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
