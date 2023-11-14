import * as React from "react";

import clsx from "clsx";

interface UserInfoProps extends React.ComponentPropsWithoutRef<"section"> {
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  description: string;
  technologies: string[];
}

const UserInfo = ({
  firstName,
  lastName,
  title,
  location,
  description,
  technologies,
  className,
  ...props
}: UserInfoProps) => (
  <section
    className={clsx(
      "absolute top-[47px] left-[613px] p-10 flex flex-col gap-4",
      className,
    )}
    {...props}
  >
    <h1 className="heading-lg">
      <span className="block text-green-800">{firstName}</span>
      <span className="block">{lastName}</span>
    </h1>
    <span className="heading-sm">
      {title} · {location}
    </span>
    <p>{description}</p>
    <span className="heading-sm">Working with technologies:</span>
    <ul className="list-disc list-inside flex flex-col gap-3">
      {technologies.map((tech) => (
        <li key={tech} className="ml-2">
          <span className="hover:text-green-800 transition-colors cursor-default">
            {tech}
          </span>
        </li>
      ))}
    </ul>
  </section>
);

export { UserInfo };
export type { UserInfoProps };
