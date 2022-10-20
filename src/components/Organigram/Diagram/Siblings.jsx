import { UserCard, UserList } from "../Cards"
import styles from "../styles/styles.module.sass";

const Siblings = ({siblings, siblingsLength,data, childs, scroll, userPos}) => {
  return (
    <div className={styles.siblings}>
        {siblingsLength >= 1 && <span className={styles.line}></span>}
        <div className={styles.users}>
        <div style={{ gridColumn: userPos }}>
            <UserCard data={data} parent child={childs} cardRef={scroll}/>
        </div>
        {siblings && (<UserList data={data.siblings} siblings={siblingsLength} />)}
    </div>
    </div>
  )
}

export { Siblings }