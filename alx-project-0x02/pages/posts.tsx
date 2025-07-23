import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import { type Post } from "@/interfaces";
import PostModal from "@/components/common/PostModal";

export default function Posts() {
     const [posts, setPosts] = useState<Post[]>([
            { title: "First Post", content: "This is the first post." },
            { title: "Second Post", content: "This is the second post." },
            { title: "Third Post", content: "This is the third post." },
            { title: "Fourth Post", content: "This is the fourth post." },
        ]);
        const [modalOpen, setModalOpen] = useState(false);
    
        // Handler to add a new post
        const addPost = (data: Post) => {
            setPosts([data, ...posts]);
        };

  return (
    <div>
      <Header />
      <h1>Posts Page</h1>
      <div className="p-8 flex flex-col items-center gap-4">
            <button
                className="mb-6 px-5 py-2 bg-amber-300 text-white rounded-lg hover:bg-amber-400"
                onClick={() => setModalOpen(true)}> + Add Post
            </button>
        <div className="flex flex-wrap gap-4">
                {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
            </div>
            <PostModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={addPost} />
      </div>
    </div>
  );
}