import Location from "../../components/Location";
import Text from "../../components/Text";
import NavbarImage from "../../assets/images/navbar-image.svg";
import "./styles.scss";
import "../../reset.scss";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="main-text">
          <Text type="title">How's the weather today?</Text>
          <div className="navbar-container">
            <img src={NavbarImage} alt="logo" width="120" />
          </div>
          <Location />
        </div>
      </div>
    </>
  );
}

export default Main;
