import styles from "./styles/Controls.module.sass";
import { Slider } from "@mui/material";

const ZoomSlider = ({ zoom, handleChange }) => {
  return (
    <div className={styles.slider}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
        }}
        orientation="vertical"
        defaultValue={1.75}
        aria-label="Zoom"
        min={1}
        step={0.01}
        max={2.25}
        value={zoom}
        onChange={handleChange}
      />
    </div>
  );
};

export default ZoomSlider;
