import React from "react";
import PostCard from "../PostCard/PostCard";

const PostsList = ({ posts }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {posts.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default PostsList;
