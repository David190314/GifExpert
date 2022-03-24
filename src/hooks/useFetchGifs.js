import React from "react";
import { getGifs } from "../helpers/getGifs";

export const useFecthGifs = (categorie) => {
  const [array, setArray] = React.useState({
    data: [],
    loading: true
  });

  React.useEffect(() => {
    getGifs(categorie)
    .then((imgs)=>{
        setArray({
            data:imgs,
            loading:false
        })
    })
  }, [categorie]);
  return array
};
