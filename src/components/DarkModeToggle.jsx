import React from "react";

// The component will receive the current dark mode state and a fucntion that changes the state
const DarkModeToggle = ({ DarkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {DarkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
