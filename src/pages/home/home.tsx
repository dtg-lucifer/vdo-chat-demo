import { Link } from "react-router-dom";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <main className={styles.main__wrapper}>
      <div>
        <span>Hey,</span> Welcome to the video chat app
      </div>
      <Link to="/call">Make a call</Link>
    </main>
  );
};

export default Home;
