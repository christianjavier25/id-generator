import { Link } from "react-router-dom";
import Styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={Styles.navbar}>
      <ul>
        <Link to="/" className={Styles.title}>
          ID Generator
        </Link>
        {/* <Link to="/about">About</Link> */}
      </ul>
    </nav>
  );
}
