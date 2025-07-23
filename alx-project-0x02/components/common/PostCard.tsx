import React from "react";
import type { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => (
  <div className="bg-white shadow-md rounded-xl p-6 min-w-[250px] mb-4">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-700 mb-2">{content}</p>
    <div className="text-sm text-gray-500">User ID: {userId}</div>
  </div>
);

export default PostCard;
