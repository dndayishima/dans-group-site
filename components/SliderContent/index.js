import Image from "next/image";

import { classNames } from "../../utils/classNames";
import styles from "./SliderContent.module.css";

const SliderContent = () => {
  return (
    <div className={styles.container}>
      <div
        className={classNames([
          styles.content,
          styles.contentHorizontalPadding,
        ])}
      >
        <div className={styles.leftContent}>
          <div className={classNames([styles.capitalize, styles.smallTitle])}>
            Bienvenue chez Dan's Group
          </div>
          <div className={classNames([styles.capitalize, styles.mainMessage])}>
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        <div className={styles.rightContent}>
          <Image
            alt="Graphic Design"
            src="/images/graphic-design-1.png"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
