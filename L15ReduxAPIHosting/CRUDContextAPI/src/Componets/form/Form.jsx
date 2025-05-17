import React from "react";

const Form = ({ user, handleChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <br />

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={user.phone}
        onChange={handleChange}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <br />

      <button type="submit">{user.id ? "Update" : "Save"}</button>
    </>
  );
};

export default Form;
