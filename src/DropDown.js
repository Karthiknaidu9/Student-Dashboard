import React, { useState } from "react";
import "./DropDown.css";

function Dropdown({ setselected }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => {
    const selectedElement = e.target.options[e.target.selectedIndex];
    const eventSelected = `${selectedElement.parentNode.label} ${selectedElement.text}`;
    setSelectedOption(eventSelected);
    setselected(eventSelected); // Call the setselected function passed as a prop
  };

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">Select an option :</label>
      <select
        className="dropdown-select"
        value={selectedOption || ""}
        onChange={handleChange}
      >
        <option value="">Select...</option>
        <optgroup label="Gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </optgroup>
        <optgroup label="Handicapped">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </optgroup>
        <optgroup label="Blood Group">
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </optgroup>
      </select>
      {selectedOption && (
        <p className="selected-option">You selected: {selectedOption}</p>
      )}
    </div>
  );
}

export default Dropdown;
