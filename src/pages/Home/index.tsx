import { LinksData } from "./LinksData";
import styles from "./home.module.scss";
import profilePic from "../../assets/profile.jpg";

// @ts-ignore
import Zoom from "react-reveal/Zoom";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={styles.home}>
      <Zoom top big cascade>
        <img src={profilePic} alt="Profile" className={styles.image} />
        <h2 className={styles.title}>Hey, Niloy here</h2>
      </Zoom>
      <h3 className={styles.about}>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString("A Developer who loves to build cool things")
              .pauseFor(800)
              .deleteAll()
              .typeString("Web and Mobile app developer and mentor")
              .pauseFor(800)
              .start();
          }}
        />
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
