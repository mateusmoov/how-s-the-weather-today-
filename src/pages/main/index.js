import Api from "../../services/Api";
import Text from "../../components/Text";
import "./styles.scss";
import "../../reset.scss";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="main-text">
          <Text type="title">How's the weather today?</Text>
          <Api />
        </div>
      </div>
    </>
  );
}

export default Main;
