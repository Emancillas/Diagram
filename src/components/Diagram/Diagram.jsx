import { useEffect, useRef } from "react";
import { UserCard } from "../UserCard";
import UserList from "../UserCard/UserList";
import styles from "./Diagram.module.sass";

const Diagram = ({ data }) => {
  const siblingsLength = data.siblings.length;
  const childrenLength = data.children.length;
  const userPos = Math.round((siblingsLength + 1) / 2);
  const scroll = useRef();
  useEffect(() => {
    scroll.current.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth",
    });
  }, []);
  console.log(`childs: ${childrenLength} siblings: ${siblingsLength}`);
  return (
    <div className={styles.Diagram}>
      <div className={styles.parent}>
        <UserCard data={data.parent} parent={false} child />
      </div>
      <div className={styles.siblings}>
        {siblingsLength >= 1 && <span className={styles.line}></span>}
        <div className={styles.users}>
          <div style={{gridColumn: userPos }}>
            <UserCard data={data} parent child cardRef={scroll} />
          </div>
          <UserList data={data.siblings} siblings={siblingsLength}/>
        </div>
      </div>
      <div className={styles.childrens}>
        <span className={styles.line}></span>
        <div className={styles.users}>
          <UserList data={data.children}/>
        </div>
      </div>
    </div>
  );
};

export default Diagram;
