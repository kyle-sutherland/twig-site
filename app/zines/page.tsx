import React from "react";
import ZineCard from "../components/zinecard";

interface ZinesProps {
  zines: (typeof ZineCard)[];
}

const Zines: React.FC<ZinesProps> = ({ zines }) => {};
