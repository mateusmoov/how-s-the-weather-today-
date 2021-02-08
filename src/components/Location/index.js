import "./styles.scss";
import Text from "../Text";
import LocationIcon from "../../assets/images/location-image.svg";

function Location() {
  return (
    <>
      <div className="location-container">
        <div className="location-image">
          <img src={LocationIcon} alt="location" width="24" />
        </div>
        <Text type="location">Brasília - Distrito Federal</Text>
      </div>
    </>
  );
}

export default Location;
