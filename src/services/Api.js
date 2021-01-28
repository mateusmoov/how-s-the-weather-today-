import axios from "axios";
import { useState, useEffect } from "react";
require("dotenv").config();

// REACT_APP_API_KEY

function Api() {
  const [location, setLocation] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location === false) {
    return <h1>You need click in allow to see if rain in your city. :)</h1>;
  } else {
    <h1>I'II make this later.</h1>;
  }
}

export default Api;
