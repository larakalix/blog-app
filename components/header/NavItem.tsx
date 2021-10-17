import React from "react";
import Link from "next/link";

interface Props {
  text: string;
  href: string;
}

const NavItem = ({ text, href }: Props) => {
  return (
    <Link href={href}>
      <a className="flex items-center p-4 rounded-sm transition-colors hover:bg-blue-400 hover:text-white">{ text }</a>
    </Link>
  );
};

export default NavItem;
