import React from "react";
import type { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="bg-white shadow-md rounded-xl p-6 mb-4 min-w-[260px]">
    <h3 className="text-lg font-bold mb-1">{name}</h3>
    <p className="text-gray-700 mb-1">{email}</p>
    <div className="text-gray-500 text-sm">
      <div>{address.street}, {address.city}</div>
      <div>{address.zipcode}</div>
    </div>
  </div>
);

export default UserCard;
