import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => (
  <div className={styles.wrapper}>
    <nav className={styles.navbar}>
      <Link href="/">
        <a className="navbar-brand">NotEd</a>
      </Link>
      <Link href="/new">
        <a className="create">Create Note</a>
      </Link>
    </nav>
  </div>
);

export default Navbar;
