import "./styles.scss";
import NavbarImage from "../../assets/images/navbar-image.svg";
import Text from "../Text";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-image">
          <img src={NavbarImage} alt="logo" />
        </div>

        <div className="navbar-text">
          <Text type="navbar">
            <a href="https://ongrace.com/portal/">Home</a>
          </Text>
          <Text type="navbar">
            <a href="https://youtu.be/vcaPiiFZu2o">Other Places</a>
          </Text>
          <Text type="navbar">
            <a href="https://ongrace.com/portal/">Contact</a>
          </Text>
        </div>
      </div>
    </>
  );
}

export default Navbar;
