import React from "react";

export default function Form(props) {
  const { update, input, setInput, initialValues, setList, list } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
    update(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setList([...list, input]);
    setInput(initialValues);
  };
  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={onChange}
            value={input.name}
          />
        </label>

        <label>
          Email
          <input
            onChange={onChange}
            type="email"
            name="email"
            placeholder="Enter Email"
            maxLength="30"
            value={input.email}
          />
        </label>

        <label>
          Role
          <select name="role" value={input.role} onChange={onChange}>
            <option value="">--- Select a Role ---</option>
            <option value="BE">Backend Engineer</option>
            <option value="FEE">Front End Engineer</option>
            <option value="Designer">Designer</option>
            <option value="FSE">Full Stack Engineer</option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
