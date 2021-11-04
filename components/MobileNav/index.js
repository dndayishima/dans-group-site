import PropTypes from "prop-types";
import Image from "next/image";

import styles from "./MobileNav.module.css";

const MENU_ICON = "/icons/menu-icon-white.png";
const MENU_CLOSE_ICON = "/icons/menu-icon-close-white.png";

const MobileNav = ({ isOpened, handleOpenNav }) => {
  return (
    <div className={styles.container} onClick={handleOpenNav}>
      <Image
        alt="Menu"
        src={isOpened ? MENU_CLOSE_ICON : MENU_ICON}
        height={35}
        width={35}
      />
    </div>
  );
};

MobileNav.propTypes = {
  isOpened: PropTypes.bool,
};

export default MobileNav;
