import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import "./reset.scss";
import "./global.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="main-text">
          <Text type="title">Will It Rain Today?</Text>
          <Text type="subtitle">No.</Text>
          <Location />
        </div>
      </div>
    </>
  );
}

export default App;
