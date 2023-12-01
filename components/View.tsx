"use client";

import { CldImage } from "next-cloudinary";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const View = ({ src }: { src: string }, index: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, [inView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: index * 0.3, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
    >
      <CldImage
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
        className="rounded-lg"
        crop="fill"
      />
    </motion.div>
  );
};

export default View;
