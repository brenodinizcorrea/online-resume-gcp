import React from "react";
import { useParams } from "react-router-dom";
import PostHero from "../components/PostHero/PostHero";
import PostInfoCard from "../components/PostInfoCard/PostInfoCard";

// importar posts JSX
import Post1 from "../blog/posts/Post1";

const postsMap = {
  1: { 
    component: Post1, 
    title: "Aprendendo Python", 
    learnings: "Você vai aprender conceitos básicos de Python, variáveis, loops e funções.", 
    readTime: "5 minutes" 
  },
};

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
        <PostInfoCard learnings={post.learnings} readTime={post.readTime} />
        <PostComponent />
      </div>
    </div>
  );
};

export default PostPage;
