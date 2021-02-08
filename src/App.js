import Location from "./components/Location";
import Text from "./components/Text";
import NavbarImage from "./assets/images/navbar-image.svg";
import "./reset.scss";
import "./global.scss";

function App() {
  return (
    <>
      <div className="navbar-container">
        <img src={NavbarImage} alt="logo" width="120" />
      </div>
      <div className="main-container">
        <div className="main-text">
          <Text type="title">Will It Rain Today?</Text>
          <Text type="subtitle">Nop.</Text>
          <Location />
        </div>
      </div>
    </>
  );
}

export default App;
