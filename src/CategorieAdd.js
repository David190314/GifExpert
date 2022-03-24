import React, { useState } from "react";
import PropTypes from "prop-types";

const CategorieAdd = ({ setCategorie }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handeSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2)
      setCategorie([inputValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={handeSubmit}>
      <label>Ingresa una categoria </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Panda"
      />
    </form>
  );
};

export default CategorieAdd;

CategorieAdd.propTypes = {
  setCategorie: PropTypes.func.isRequired
};
