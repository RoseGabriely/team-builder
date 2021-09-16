import "./App.css";
import Form from "./Form";
import React, { useState } from "react";

function App() {
  const initialValues = {
    name: "",
    email: "",
    role: "",
  };

  const [list, setList] = useState([]);

  const [input, setInput] = useState(initialValues);

  const update = (name, value) => {
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="App">
      <h1>Form</h1>
      <Form
        input={input}
        setInput={setInput}
        update={update}
        initialValues={initialValues}
        setList={setList}
        list={list}
      />
      {list.map((person, index) => {
        return (
          <div key={index}>
            <p>Name: {person.name}</p>
            <p>Email: {person.email}</p>
            <p>Role: {person.role}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
