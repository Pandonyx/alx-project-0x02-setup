import React from "react";
import PostCard from "@/components/common/PostCard";
import type { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

type PostsPageProps = {
  posts: PostProps[];
};

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="flex justify-center text-2xl font-bold mb-6">Posts</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {posts.map((post, index) => (
            <div key={index} className="w-full sm:w-[320px] sm:lg:w-[360px]">
              <PostCard
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// SSG - fetches posts at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();
  const posts: PostProps[] = data.map((item: any) => ({
    title: item.title,
    content: item.body,
    userId: item.userId,
  }));

  return {
    props: {
      posts,
    },
  };
}
