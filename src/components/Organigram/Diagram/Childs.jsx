import { UserList } from "../Cards";
import styles from "../styles/styles.module.sass";

const Childs = ({ data }) => {
  return (
    <div className={styles.childrens}>
      <span className={styles.line}></span>
      <div className={styles.users}>
        <UserList data={data} />
      </div>
    </div>
  );
};

export { Childs }
