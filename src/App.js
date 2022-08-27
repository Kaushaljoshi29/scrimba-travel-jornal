import "./App.css";
import Navbar from "./Components/Navbar";
import TravelCard from "./Components/TravelCard";
import Horizontal from "./Components/Horizontal"
import data from "./data";

function App() {
  const mainRender = data.map((item) => {
    return (
      <>
        <TravelCard
          {...item}
        />
        <Horizontal />
      </>
    );
  });

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">{mainRender}</div>
    </div>
  );
}

export default App;
