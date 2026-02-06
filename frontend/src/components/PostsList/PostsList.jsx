import React from "react";
import PostCard from "../PostCard/PostCard";

const PostsList = ({ posts }) => {
  return (
    <div className="posts-list" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          description={post.description}
          url={`/blog/${post.id}`}
          tags={post.tags} // <- aqui garantimos que tags são passadas
        />
      ))}
    </div>
  );
};

export default PostsList;
