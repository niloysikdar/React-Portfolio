import { LinksData } from "./LinksData";
import styles from "./home.module.scss";
import profilePic from "../../assets/profile.jpg";

// @ts-ignore
import Zoom from "react-reveal/Zoom";

const about = "<A Developer who loves to build cool things />";
const about_next = "<Web and Mobile app developer and mentor />";

const Home = () => {
  return (
    <div className={styles.home}>
      <Zoom top big cascade>
        <img src={profilePic} alt="Profile" className={styles.image} />
        <h2 className={styles.title}>Hey, Niloy here</h2>
      </Zoom>
      <Zoom right cascade>
        <h3 className={styles.about}>{about}</h3>
        <h3 className={styles.about_next}>{about_next}</h3>
      </Zoom>
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
