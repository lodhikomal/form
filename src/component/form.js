import React from "react";
import { useState } from "react";

const Form = () => {
  const [item, setItem] = useState({
    firstname: "",
    Lastname: "",
    Email: "",
    mobileno: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setItem({ ...item, [name]: value });
  };
  const onSubmitInput = (e) => {
    e.preventDefault();
  };

  return (
    <div classame="container">
      <form onSubmit={onSubmitInput}>
        <label>
          First name:
          <input
            type="text"
            name="firstname"
            autoComplete="off"
            onChange={handleInput}
            value={item.firstname}
            placeholder="enter your name"
          ></input>
        </label>
        <br />
        <br />
        Last name
        <input
          type="text"
          autoComplete="off"
          name="Lastname"
          onChange={handleInput}
          value={item.Lastname}
          placeholder="enter your name"
        ></input>
        <br />
        <br />
        Email
        <input
          type="Email"
          autoComplete="off"
          name="Email"
          onChange={handleInput}
          value={item.Email}
          placeholder="enter your name"
        ></input>
        <br />
        <br />
        Mobile Number
        <input
          type="text"
          autoComplete="off"
          name="mobileno"
          onChange={handleInput}
          value={item.mobileno}
          placeholder="enter your name"
        ></input>
        <br />
        <br />
        <button type="submit" onClick={handleInput}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
