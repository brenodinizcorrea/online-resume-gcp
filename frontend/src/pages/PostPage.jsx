import React from "react";
import { useParams } from "react-router-dom";
import PostHero from "../components/PostHero/PostHero";
import PostInfoCard from "../components/PostInfoCard/PostInfoCard";

// importar postsMap do index.js
import postsMap from "../blog/posts";

const PostPage = () => {
  const { id } = useParams();
  const post = postsMap[id];

  if (!post) return <p>Post não encontrado.</p>;

  const PostComponent = post.component;

  return (
    <div>
      {/* Hero full width */}
      <PostHero title={post.title} />

      {/* Card de informações */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem" }}>
        <PostInfoCard 
          learnings={post.learnings} 
          readTime={post.readTime} 
          tags={post.tags} 
        />
        <PostComponent />
      </div>
    </div>
  );
};

export default PostPage;
