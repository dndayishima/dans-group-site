import Image from "next/image";

import { colors } from "../../styles/theme";

import styles from "./Header.module.css";

const DANS_GROUP_LOGO = "/images/logo/dans-logo-white.png";

const Header = () => {
  return (
    <header
      className={styles.container}
      style={{ backgroundColor: colors.blue }}
    >
      <div>
        <Image
          alt="Dan's Group logo"
          src={DANS_GROUP_LOGO}
          layout="intrinsic"
          height="75%"
          width="100%"
          objectFit="contain"
        />
      </div>
      <div>LINKS</div>
    </header>
  );
};

export default Header;
