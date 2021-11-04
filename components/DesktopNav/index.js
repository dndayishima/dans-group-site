import Link from "next/link";

import { navigationLinks } from "../../constants/navigationLinks";

import styles from "./DesktopNav.module.css";

const DesktopNav = () => {
  return (
    <ul className={styles.container}>
      {navigationLinks.map((link, i) => (
        <li key={i} className={styles.link}>
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
