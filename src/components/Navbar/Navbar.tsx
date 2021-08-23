import { Link } from "react-router-dom";

import { LinksData } from "./LinksData";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.logo}>Portfolio</h2>
      <div className={styles.items}>
        {LinksData.map((link) => (
          <Link to={link.linkTo} key={link.linkTo} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Navbar };
