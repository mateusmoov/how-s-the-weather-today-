import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import mainImage from "./assets/images/main-image.svg";
import "./reset.scss";
import "./global.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="main-text">
          <Text type="title">Will It Rain Today?</Text>
          <div className="container-subtitle">
            <Text type="subtitle">
              Unlikely, there is a 10% chance of {"\n"} rain in your city.
            </Text>
          </div>
          <Location />
        </div>
        <img src={mainImage} alt="main" width="700" />
      </div>
    </>
  );
}

export default App;
