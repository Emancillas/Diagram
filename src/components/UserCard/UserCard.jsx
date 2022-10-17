import { Avatar } from "@mui/material";
import { CardContainer } from "./CardContainer";
import { Container } from "./Container";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./UserCard.module.sass";


const UserCard = ({
  data,
  parent = true,
  child,
  toLeft,
  toRight,
}) => {
  return (
    <>
      <CardContainer>
      {child && (<span className={styles.child}></span>)}
        {parent && (<span className={styles.parent}></span>)}
        {toLeft && (<span className={styles.left}></span>)}
        {toRight && (<span className={styles.right}></span>)}
        <Avatar sx={{width: "60px", height: "60px"}}
          className={styles.avatar}
          alt={`${data.name} ${data.lastname}`}
          src={`/assets/${data.url}`}
          variant="circular"
        />
        <Container>
          <div className={styles.textContainer}>
            <PersonIcon sx={{width: "8px", height: "8px", color: "#B1B2FF"}}/>
            <p className={styles.name}> {`${data.name} ${data.lastname}`}</p>
          </div>
          <div className={styles.textContainer}>
            <WorkIcon sx={{width: "8px", height: "8px", color: "#AAC4FF"}}/>
            <p className={styles.job}> {data.job} </p>
          </div>
          <div className={styles.textContainer}>
            <EmailIcon sx={{width: "8px", height: "8px", color: "#96969686"}}/>
            <span className={styles.email}>{data.email}</span>
          </div>
        </Container>
      </CardContainer>
    </>
  );
};

export { UserCard };
