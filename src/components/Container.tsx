import * as React from "react";

import clsx from "clsx";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

const Container = ({ className, ...props }: ContainerProps) => (
  <div
    className={clsx(
      "w-[1122px] h-[667px] rounded-[2rem] bg-card shadow-xl overflow-clip",
      className,
    )}
    {...props}
  />
);

export { Container };
export type { ContainerProps };
