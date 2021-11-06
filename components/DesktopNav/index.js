import Link from "next/link";

import { classNames } from "../../utils/classNames";
import { navigationLinks } from "../../constants/navigationLinks";

import styles from "./DesktopNav.module.css";

const DesktopNav = () => {
  return (
    <ul className={styles.container}>
      {navigationLinks.map((link, i) => (
        <li
          key={i}
          className={classNames([
            styles.link,
            i === 1 ? styles.activeLink : "",
          ])}
          //className={styles.link}
        >
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
