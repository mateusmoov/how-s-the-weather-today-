import Text from "../components/Text";
import NoLocation from "../pages/no-location";
import { useState, useEffect } from "react";
import "./api.scss";
import "../reset.scss";

const Clima = () => {
  const [data, setData] = useState({});
  const [url, setUrl] = useState();
  const [location, setLocation] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUrl(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`
      );
      setLocation(true);
    });
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLocation(true);
      });
  }, [location]);

  if (!location) {
    return <NoLocation />;
  }

  if (!data?.weather) {
    return <p>Loading</p>;
  }

  console.log(data);
  let urlImage = data?.weather[0]?.icon;

  return (
    <>
      <div className="main-container">
        <div className="main-text">
          <Text type="title">How's the weather today?</Text>
          <img
            src={`https://openweathermap.org/img/wn/${urlImage}@2x.png`}
            alt="weather"
          />
          <Text type="subtitle">{data?.weather[0]?.description}</Text>
          <Text type="location">{data?.name}</Text>
        </div>
      </div>
    </>
  );
};

export default Clima;
