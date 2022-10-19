import { useState } from "react";
import "./App.css";
import ResetButton from "./components/Controls/ResetButton";
import ZoomSlider from "./components/Controls/ZoomSlider";
import Diagram from "./components/Diagram/Diagram";
import { data } from "./data/data";

function App() {
  const [zoom, setZoom] = useState(1.75);
  const [scale, setScale] = useState(`scale(${zoom})`);
  const handleChange = (e) => {
    console.log(e.target.value)
    setZoom(e.target.value)
    setScale(`scale(${zoom})`)
  }
  const handleReset = () => {
    setZoom(1.75)
    setScale(`scale(1.75)`)
  }

  return (
    <div className="App">
      <section className="full-section">
        <div className="container">
          <ResetButton onClick={handleReset}/>
          <ZoomSlider zoom={zoom} handleChange={handleChange}/>
          <Diagram data={data} scale={scale} />
        </div>
      </section>
    </div>
  );
}
export default App;
