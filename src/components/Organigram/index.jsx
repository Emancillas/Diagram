import { useState } from "react";
import { ResetButton, ZoomSlider } from "./Controls";
import { Diagram } from "./Diagram";
import styles from "./styles/styles.module.sass";

const Organigram = ({data}) => {
  const [zoom, setZoom] = useState(1.75);
  const [scale, setScale] = useState(`scale(${zoom})`);

  const handleChange = (e) => {
    setZoom(e.target.value);
    setScale(`scale(${zoom})`);
  };

  const handleReset = () => {
    setZoom(1.5);
    setScale(`scale(1.5)`);
  };
  return (
    <div className={styles.container}>
      <ResetButton onClick={handleReset} />
      <ZoomSlider zoom={zoom} handleChange={handleChange} />
      <Diagram data={data} scale={scale} reva={scale} />
    </div>
  );
};

export default Organigram;
