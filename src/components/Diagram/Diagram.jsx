import { useEffect, useRef, useState } from "react";
import { UserCard } from "../UserCard";
import UserList from "../UserCard/UserList";
import styles from "./Diagram.module.sass";

const Diagram = ({ data }) => {
  const [hasParent, setHasParent] = useState(false);
  const [siblings, setSiblings] = useState(false);
  const [childs, setChilds] = useState(false);
  const siblingsLength = data.siblings.length;
  const userPos = Math.round((siblingsLength + 1) / 2);
  const scroll = useRef();

  const handleChilds = () => {
    data.children.length > 1 ? setChilds(true) : setChilds(false);
    data.siblings.length > 1 ? setSiblings(true) : setSiblings(false);
    data.parent != undefined ? setHasParent(true) : setHasParent(false);
  };
  useEffect(() => {
    handleChilds();
    scroll.current.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth",
    });
  }, []);
  console.log(data.parent);
  return (
    <div className={styles.Diagram}>
      {hasParent && (
        <div className={styles.parent}>
          <UserCard data={data.parent} parent={false} child />
        </div>
      )}
      <div className={styles.siblings}>
        {siblingsLength >= 1 && <span className={styles.line}></span>}
        <div className={styles.users}>
          <div style={{ gridColumn: userPos }}>
            <UserCard data={data} parent child={childs} cardRef={scroll} />
          </div>
          {siblings && (
            <UserList data={data.siblings} siblings={siblingsLength} />
          )}
        </div>
      </div>
      {childs && (
        <div className={styles.childrens}>
          <span className={styles.line}></span>
          <div className={styles.users}>
            <UserList data={data.children} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Diagram;
