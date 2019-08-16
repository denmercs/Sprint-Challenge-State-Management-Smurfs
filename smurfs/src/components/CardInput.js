import React, { useState } from "react";

const NewPost = () => {
  const [state, setState] = useState({
    name: "",
    height: "",
    age: null
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("STATE RIGHT NOW", state);
  };

  const handleInputChange = e => {
    setState({
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="age"
            name="age"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="height"
            name="height"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
