import axios from "axios";
import { useState, useEffect } from "react";
require("dotenv").config();

// REACT_APP_API_KEY

function api() {
  const [location, setLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  });
}

export default api;
