import Link from "next/link";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Homepage</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
