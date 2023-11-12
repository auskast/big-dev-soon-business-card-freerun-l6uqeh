import * as React from "react";

import clsx from "clsx";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

const Container = ({ className, ...props }: ContainerProps) => (
  <div
    className={clsx(
      "w-[800px] h-[450px] rounded-3xl bg-white shadow-xl",
      className,
    )}
    {...props}
  />
);

export { Container };
export type { ContainerProps };
