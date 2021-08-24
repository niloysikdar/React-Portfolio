import styles from "./home.module.scss";
import { LinksData } from "./LinksData";
import profilePic from "../../assets/profile.jpg";

const Home = () => {
  return (
    <div className={styles.home}>
      <img src={profilePic} alt="Profile" className={styles.image} />
      <h2 className={styles.title}>Hey, Niloy here</h2>
      <h3 className={styles.about}>
        A Developer who loves to build cool things
      </h3>
      <div className={styles.links}>
        {LinksData.map((item) => (
          <a href={item.link} target="_blank" rel="noreferrer" key={item.title}>
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export { Home };
