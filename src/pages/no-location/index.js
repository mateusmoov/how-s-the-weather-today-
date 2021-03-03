import Text from "../../components/Text";
import "./styles.scss";
import "../../reset.scss";

function NoLocation() {
  return (
    <>
      <div className="container-text-location">
        <div className="text">
          <Text type="title">
            Click on the allow button to see the weather today.
          </Text>
        </div>
      </div>
    </>
  );
}

export default NoLocation;
