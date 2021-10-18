import React from "react";
import Link from "next/link";
import { Tag } from "../../interfaces/post";
import { SparklesIcon } from "@heroicons/react/solid";

const TagBadge = ({ id, title, mark }: Tag) => {
  return (
    <li className="relative inline-flex items-center border border-gray-200 text-xs text-gray-600 font-light rounded-full px-4 py-2 m-1 hover:text-white hover:bg-pink-500 hover:border-pink-600">
      <Link href={`/tags/${encodeURIComponent(title)}`}>
        <a>
          <p className="capitalize flex items-center">
            #{title}
            {mark && <SparklesIcon width={14} className="ml-2 text-yellow-400" />}
          </p>
        </a>
      </Link>
    </li>
  );
};

export default TagBadge;
