import { UserCard } from "../Cards";
import styles from "../styles/styles.module.sass";

const Parent = ({data}) => {
  return (
    <div className={styles.parent}>
      <UserCard data={data} parent={false} child />
    </div>
  );
};

export { Parent }
