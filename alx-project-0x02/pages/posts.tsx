import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import type { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => res.json())
      .then((data) => {
        // Map API response to PostProps
        const mapped = data.map((item: any) => ({
          title: item.title,
          content: item.body,
          userId: item.userId,
        }));
        setPosts(mapped);
        setLoading(false);
      });
  }, []);

  return (
    <div>
        <Header />
    
    <div className="p-8">
      <h1 className="item-center flex justify-center text-2xl font-bold mb-6">Posts</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className=" flex flex-wrap gap-4 justify-center">
          {posts.map((post, index) => (
            <div key={index} className="w-full sm:w-[320px] sm:lg:w-[360px]" >
            <PostCard
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}
