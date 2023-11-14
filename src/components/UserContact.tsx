import * as React from "react";

import clsx from "clsx";

import type { IconProps } from "./icons";
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  TwitterIcon,
} from "./icons";

interface UserContactProps extends React.ComponentPropsWithoutRef<"section"> {
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

const UserContact = ({
  email,
  phone,
  github,
  linkedin,
  twitter,
  className,
  ...props
}: UserContactProps) => {
  return (
    <section
      className={clsx(
        "bg-green-800 text-white-87 w-[341px] h-full relative flex flex-col gap-9 py-10",
        className,
      )}
      {...props}
    >
      <div className="flex-1" />
      <UserContactBlock
        icon={EmailIcon}
        title="Email"
        value={email}
        href={`mailto:${email}`}
      />
      <UserContactBlock
        icon={PhoneIcon}
        title="Phone"
        value={phone}
        href={`tel:${phone.replace(/[^+\d]/g, "")}`}
      />
      <UserContactDivider />
      <UserContactSocials
        github={github}
        linkedin={linkedin}
        twitter={twitter}
      />
    </section>
  );
};

type UserContactBlockProps = {
  icon: React.ComponentType<IconProps>;
  title: string;
  value: string;
  href?: string;
};

const UserContactBlock = ({
  icon: Icon,
  title,
  value,
  href,
}: UserContactBlockProps) => (
  <div className="flex flex-col gap-3 px-10">
    <div className="flex gap-1 items-center">
      <Icon width={16} height={16} className="fill-white-87" />
      <span className="body-2">{title}</span>
    </div>
    <span>{href ? <a href={href}>{value}</a> : value}</span>
  </div>
);

const UserContactDivider = () => (
  <div className="w-full h-[21px] bg-gray-300" />
);

const UserContactSocials = ({
  github,
  linkedin,
  twitter,
}: Pick<UserContactProps, "github" | "linkedin" | "twitter">) => {
  const hasSocials = Boolean(github || linkedin || twitter);

  return hasSocials ? (
    <div className="flex flex-col gap-3 px-10 mb-10">
      <span className="body-2">Find me on</span>
      <div className="flex gap-4">
        {github ? (
          <SocialLink
            icon={GithubIcon}
            baseUrl="https://github.com"
            username={github}
          />
        ) : null}
        {linkedin ? (
          <SocialLink
            icon={LinkedinIcon}
            baseUrl="https://linkedin.com"
            username={linkedin}
          />
        ) : null}
        {twitter ? (
          <SocialLink
            icon={TwitterIcon}
            baseUrl="https://x.com"
            username={twitter}
          />
        ) : null}
      </div>
    </div>
  ) : (
    <div className="h-[60px] mb-10" />
  );
};

type SocialLinkProps = React.PropsWithChildren<{
  icon: React.ComponentType<IconProps>;
  baseUrl: string;
  username: string;
}>;

const SocialLink = ({ icon: Icon, baseUrl, username }: SocialLinkProps) => (
  <a href={`${baseUrl}/${username}`} target="_blank" rel="noopener noreferrer">
    <Icon
      width={24}
      height={24}
      className="fill-white-60 hover:fill-white-87 transition-colors"
    />
  </a>
);

export { UserContact };
export type { UserContactProps };
