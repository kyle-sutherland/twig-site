import React, { useState } from "react";
import Image from "next/image";
import { LinkButton } from "./buttons";

interface Props {
  imageSource: string;
  imageAlt: string;
  zineSource: string;
  title: string;
  description: string;
}

const ZineCard: React.FC<Props> = ({
  imageSource,
  imageAlt,
  zineSource,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="zineCard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="zineCardContent">
        <div
          className={"zinCardImageSide ${isHovered} ? zineCardHidden : '' }"}
        >
          <Image src={imageSource} alt={imageAlt} fill objectFit="cover" />
        </div>
        <div
          className={
            "zineCardDescriptionSide ${isHovered} ? '' : zineCardHidden }"
          }
        >
          <h3 className="zineCardTitle">{title}</h3>
          <p className="zineCardDescription">{description}</p>
        </div>
      </div>
      <LinkButton target="_blank" href={zineSource} />
    </div>
  );
};

export default ZineCard;
