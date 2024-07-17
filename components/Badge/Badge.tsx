import React from "react";
import Image from "next/image";
import scratchBadge from "../../assets/BadgeCollection/Badges/scratch.png";
import styles from "../../modules/BadgeCollection/badge.module.css";

interface BadgeProps {
  task: string;
}

const Badge: React.FC<BadgeProps> = ({ task }) => {
  let imgUrl: any;
  let badgeName: string = "";
  switch (task) {
    case "Scratch Mastery":
      imgUrl = scratchBadge;
      badgeName = "Scratch Mastery";
      break;
    default:
      imgUrl = "";
      break;
  }
  return (
    <div>
      <Image src={imgUrl} alt="Badge" />
      <h3 className={styles.badgeName}>{badgeName}</h3>
    </div>
  );
};

export default Badge;
