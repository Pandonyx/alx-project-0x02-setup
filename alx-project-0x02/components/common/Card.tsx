import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="bg-grey-200 rounded-2xl shadow-md p-6 min-w-[250px] mb-4">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <div className="text-base text-gray-700">{content}</div>
  </div>
);

export default Card;
