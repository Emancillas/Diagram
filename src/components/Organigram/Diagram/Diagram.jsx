import { useEffect, useRef, useState } from "react";
//Components
import { Parent, Siblings, Childs } from "./index";
//Styles
import styles from "../styles/styles.module.sass";

const Diagram = ({ data, scale, reva }) => {
  const [hasParent, setHasParent] = useState(false);
  const [siblings, setSiblings] = useState(false);
  const [childs, setChilds] = useState(false);
  const siblingsLength = data.siblings.length;
  const userPos = Math.round((siblingsLength + 1) / 2);
  const scroll = useRef();
  const [first, setFirst] = useState(true)

  const handleChilds = () => {
    data.children.length > 1 ? setChilds(true) : setChilds(false);
    data.siblings.length > 1 ? setSiblings(true) : setSiblings(false);
    data.parent != undefined ? setHasParent(true) : setHasParent(false);
  };

  useEffect(() => {
      handleChilds();
      setFirst(false);
      scroll.current.scrollIntoView({
        behavior: "smooth",
        inline: first ? "start" : "center",
        block: "center",
      });
  }, [reva]);

  return (
    <div className={styles.Diagram} style={{ transform: scale }}> 
      {hasParent && <Parent data={data.parent}/>}
      <Siblings 
        siblings={siblings}
        siblingsLength={siblingsLength}
        data={data}
        childs={childs}
        scroll={scroll}
        userPos={userPos}
        />
      {childs && <Childs data={data.children}/>}
    </div>
  );
};

export { Diagram }
