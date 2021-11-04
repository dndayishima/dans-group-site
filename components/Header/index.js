import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import DesktopNav from "../DesktopNav";
import MobileNav from "../MobileNav";
import mobileMenu from "../MobileMenu";

import { colors } from "../../styles/theme";
import { classNames } from "../../utils/classNames";

import styles from "./Header.module.css";
import MobileMenu from "../MobileMenu";

const DANS_GROUP_LOGO = "/images/logo/dans-logo-white.png";

const Logo = React.forwardRef(({ href }, ref) => {
  return (
    <a href={href} ref={ref}>
      <Image
        alt="Dan's Group logo"
        src={DANS_GROUP_LOGO}
        layout="intrinsic"
        height="75%"
        width="100%"
        objectFit="contain"
      />
    </a>
  );
});

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleOpenNav = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <header
        className={classNames([
          styles.container,
          styles.headerHorizontalPadding,
        ])}
        style={{ backgroundColor: colors.blue }}
      >
        <Link href="/" passHref>
          <Logo />
        </Link>
        <div className={styles.desktopNav}>
          <DesktopNav />
        </div>
        <div className={styles.mobileNav}>
          <MobileNav isOpened={showMobileMenu} handleOpenNav={handleOpenNav} />
        </div>
      </header>
      <div
        className={classNames([
          styles.mobileMenu,
          showMobileMenu ? styles.mobileMenuShow : styles.mobileMenuHidden,
        ])}
      >
        <MobileMenu />
      </div>
    </>
  );
};

export default Header;
