import React, { useState } from "react";
import "./EmployeeList.css";

function EmployeeList() {
  const [employee, setEmployee] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = () => {
    if (employee.trim() === "") return;
    const newEmployee = { id: Date.now(), name: employee };
    setEmployees([...employees, newEmployee]);
    setEmployee("");
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((e) => e.id !== id));
  };

  return (
    <div className="employee-container">
      <h1 className="title">👩‍💼 Employee List</h1>

      <div className="input-section">
        <input
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          placeholder="Enter employee name"
          className="employee-input"
          type="text"
        />
        <button onClick={handleAddEmployee} className="add-btn">
          ➕ Add
        </button>
      </div>

      <ul className="employee-list">
        {employees.map((e) => (
          <li key={e.id} className="employee-item">
            <span>{e.name}</span>
            <button
              onClick={() => handleDeleteEmployee(e.id)}
              className="delete-btn"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
