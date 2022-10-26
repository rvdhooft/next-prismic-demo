import { SliceZone } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { components } from "../slices";

export const Spotlight = ({ image, slices }) => {
  return (
    <div className="flex">
      <div style={{ maxWidth: "40%" }}>
        <PrismicNextImage field={image} layout="" />
      </div>
      <SliceZone slices={slices} components={components}></SliceZone>
    </div>
  );
};
