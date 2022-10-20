import styles from "../styles/controls.module.sass";
import { Slider } from "@mui/material";

const ZoomSlider = ({ zoom, handleChange }) => {
  return (
    <div className={styles.slider}>
      <Slider
        orientation="vertical"
        defaultValue={1.75}
        aria-label="Zoom"
        min={0.5}
        step={0.01}
        max={2.5}
        value={zoom}
        onChange={handleChange}
      />
    </div>
  );
};

export { ZoomSlider }
