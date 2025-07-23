import React from "react";
import UserCard from "@/components/common/UserCard";
import type { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

type UsersPageProps = {
  users: UserProps[];
};

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="flex justify-center text-2xl font-bold mb-6">Users</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {users.map(user => (
            <div key={user.id} className="w-full sm:w-[300px]">
              <UserCard
                id={user.id}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// SSG - fetch users at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data: UserProps[] = [];
  try {
    data = await res.json();
    if (!Array.isArray(data)) data = [];
  } catch {
    data = [];
  }

  return {
    props: {
      users: data,
    },
  };
}
