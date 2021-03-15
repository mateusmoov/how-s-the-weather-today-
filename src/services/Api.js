import { useState, useEffect } from "react";

const Clima = () => {
  const [data, setData] = useState({});
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=-15.7792&lon=-47.9341&appid=19115628040997e391bb0310a0002db7";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <>
      <p>{data?.current?.weather[0].description}</p>
    </>
  );
};

export default Clima;
