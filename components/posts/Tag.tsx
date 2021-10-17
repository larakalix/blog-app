import React from "react";
import { Tag } from "../../interfaces/post";

const TagBox = ({ title, mark }: Tag) => {
  return (
    <div className="flex items-center border border-gray-200 text-xs text-gray-600 font-light rounded-full px-4 py-2">
      <p>#{title}</p>
    </div>
  );
};

export default TagBox;
