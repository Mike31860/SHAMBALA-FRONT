import { cx } from "@utils/commons";
import Link, { LinkProps } from "next/link";
import React from "react";

export interface AppLinkProps extends Omit<LinkProps, "href"> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

const AppLink: React.FC<AppLinkProps> = ({
  href,
  children,
  className,
  target,
  rel,
  ...props
}) => {
  if (!href) {
    return <div className={cx(["w-100 h-full", className])}>{children}</div>;
  }
  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AppLink;
