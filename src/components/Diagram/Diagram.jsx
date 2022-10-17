import { UserCard } from "../UserCard";
import styles from "./Diagram.module.sass";

const Diagram = ({ data }) => {
  const siblings = data.siblings.length;
  const children = data.children.length;
  return (
    <div className={styles.Diagram}>
      <div className={styles.parent}>
        <UserCard data={data.parent} parent={false} child />
      </div>
      <div className={styles.mainUser}>
        <UserCard data={data} child />
      </div>
      <div className={styles.childrens}>
            <UserCard data={data.children[0]} toLeft/>
            <UserCard data={data.children[1]} toRight/>
      </div>
    </div>
  );
};

export default Diagram;
