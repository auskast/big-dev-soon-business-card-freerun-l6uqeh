"use client";

import Image from "next/image";

import * as React from "react";

import clsx from "clsx";
import type { Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

const animationVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface UserImageProps extends React.ComponentPropsWithoutRef<typeof Image> {}

const UserImage = ({ alt, className, ...props }: UserImageProps) => {
  const [loaded, setLoaded] = React.useState(false);
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded, animationControls]);

  return (
    <motion.div
      initial="hidden"
      animate={animationControls}
      variants={animationVariants}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <Image
        alt={alt}
        className={clsx(
          "absolute top-[40px] left-[273px] w-[340px] h-[549px] z-10 object-cover",
          className,
        )}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </motion.div>
  );
};

export { UserImage };
export type { UserImageProps };
