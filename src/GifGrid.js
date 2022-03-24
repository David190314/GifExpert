import React from "react";
import 'animate.css'
import { GifGridItem } from "./GifGridItem";
import { useFecthGifs } from "./hooks/useFetchGifs";

import "./GifGrids.css";

export const GifGrid = ({ categorie }) => {
  const { data:images } = useFecthGifs(categorie);
  return (
    <>
      <h3> {categorie} </h3>
      <div className="cardGrid animate__animated animate__bounce ">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
