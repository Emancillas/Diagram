import ExploreIcon from '@mui/icons-material/Explore';
import { IconButton } from '@mui/material';
import styles from "../styles/controls.module.sass";

const ResetButton = ({ onClick }) => {
  return (
    <div className={styles.ResetButton}>
        <IconButton
            onClick={onClick}
            color="primary" 
            aria-label="Reset"
            size="large"
        >
            <ExploreIcon fontSize="large"/>
        </IconButton>
    </div>
  )
}

export { ResetButton }