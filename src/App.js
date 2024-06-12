import "./App.css";
import "./Header.js";
import "./Studentdetails.js";
import Header from "./Header.js";
import Studentdetails from "./Studentdetails.js";
import Navbar from "./Navbar.js";
import { useState } from "react";
function App() {
  const [selected, setselectedchange] = useState("");
  // const [changeselected, setchangeselected] = useState("");
  // console.log(selected);
  return (
    <div className="App">
      <Header />
      <Navbar setselectedchange={setselectedchange} />
      <Studentdetails selected={selected} />
    </div>
  );
}

export default App;
