import Link from "next/link";

import { navigationLinks } from "../../constants/navigationLinks";

import styles from "./MobileMenu.module.css";

const MobileMenu = () => {
  return (
    <div className={styles.container}>
      {navigationLinks.map((link, i) => (
        <div key={i}>
          <div className={styles.link}>
            <Link href={link.href}>{link.text}</Link>
          </div>
          <hr className={styles.separator} />
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
