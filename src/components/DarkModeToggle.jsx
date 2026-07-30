import React from "react";

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Toggle Light" : "Toggle Dark"}
    </button>
  );
};

export default DarkModeToggle;
