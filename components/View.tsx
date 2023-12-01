"use client";

import { CldImage } from "next-cloudinary";

const View = ({ src }: { src: string }) => {
  return (
    <div>
      <CldImage
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
        className="rounded-lg"
        crop="fill"
      />
    </div>
  );
};

export default View;
