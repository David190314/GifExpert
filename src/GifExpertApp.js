import React, { useState } from "react";
import CategorieAdd from "./CategorieAdd";
import { GifGrid } from "./GifGrid";

const GifExperApp = () => {
  const [categorie, setCategorie] = useState([]);

  return (
    <>
      <h1>GifExperApp</h1>
      <CategorieAdd setCategorie={setCategorie} />
      <hr />
      <ol>
        {categorie.map((e, i) => (
          <GifGrid key={i} categorie={categorie} />
        ))}
      </ol>
    </>
  );
};

export default GifExperApp;
