import React, { useEffect, useState } from "react";
import "./DropDown";
import Dropdown from "./DropDown";
import "./Navbar.css";
import "./SearchComponent.js";
import SearchComponent from "./SearchComponent.js";
function Navbar({ setselectedchange }) {
  const [selected, setselected] = useState("");
  useEffect(() => {
    setselectedchange(selected);
  }, [selected]);
  return (
    <div className="navbar">
      <div className="drop">
        <Dropdown setselected={setselected} />
      </div>
      <SearchComponent />
      {/* {console.log(selected)} */}
    </div>
  );
}

export default Navbar;
