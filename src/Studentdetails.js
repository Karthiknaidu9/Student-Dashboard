import React, { useEffect, useState } from "react";
import "./Studentdetails.css"; // Import the CSS file

const Studentdetails = ({ selected }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentsSlice, setStudentsSlice] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://3.223.98.72:1337/api/students");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.data) {
          setStudents(data.data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    const firstTenStudents = students.slice(count, count + 7);
    setStudentsSlice(firstTenStudents);
  }, [students, count]);

  useEffect(() => {
    if (selected) {
      const [label, value] = selected.split(" ");
      if (label && value) {
        const matchedStudents = students.filter(
          (student) => student.attributes && student.attributes[label] === value
        );
        setStudents(matchedStudents);
        console.log("Matched Students:", matchedStudents);
      }
    }
  }, [selected]);
  // Debugging log
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <div className="student-item student-topbar">
            <div className="innerdiv">
              <h3>Id</h3>
            </div>
            <div className="innerdiv">
              <h3>First Name</h3>
            </div>
            <div className="innerdiv">
              <h3>Last Name</h3>
            </div>
            <div className="innerdiv">
              <h3>Gender</h3>
            </div>
            <div className="innerdiv">
              <h3>Parent's Number</h3>
            </div>
          </div>
          <ul className="student-list">
            {studentsSlice.map((student) => (
              <li key={student.id} className="student-item">
                <div className="itemContainer">
                  <div className="itemContainerind">{student.id}</div>
                  <div className="itemContainerind">
                    {student.attributes
                      ? student.attributes.firstName
                      : "Unknown"}
                  </div>
                  <div className="itemContainerind">
                    {student.attributes ? student.attributes.lastName : ""}
                  </div>
                  <div className="itemContainerind">
                    {student.attributes ? student.attributes.gender : ""}
                  </div>
                  <div className="itemContainerind">
                    {student.attributes
                      ? student.attributes.parentContactNo
                      : ""}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="button-holder">
            <button
              className="button"
              onClick={() => {
                if (count > 0) setCount(count - 7);
              }}
              disabled={count === 0}
            >
              Prev
            </button>
            <button
              className="button"
              onClick={() => {
                if (count + 7 < students.length) setCount(count + 7);
              }}
              disabled={count + 7 >= students.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Studentdetails;
