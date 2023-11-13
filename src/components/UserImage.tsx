import Image from "next/image";

import * as React from "react";

import clsx from "clsx";

interface UserImageProps extends React.ComponentPropsWithoutRef<typeof Image> {}

const UserImage = ({ alt, className, ...props }: UserImageProps) => {
  return (
    <Image
      alt={alt}
      className={clsx(
        "absolute top-[40px] left-[273px] w-[340px] h-[549px] object-cover",
        className,
      )}
      {...props}
    />
  );
};

export { UserImage };
export type { UserImageProps };
