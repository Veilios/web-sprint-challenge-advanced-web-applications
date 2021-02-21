import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth().get(`http://localhost:5000/api/colors`)
      .then(res => {
        console.log("getData for BubblePage res: ", res.data);
        setColorList(res.data);
      })
      .catch(err => console.error("Could not retrieve colors: ", err.message));
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
