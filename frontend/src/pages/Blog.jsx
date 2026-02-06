import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import PostsList from "../components/PostsList/PostsList";

// Aqui você pode importar os posts JSX
import Post1 from "../blog/posts/Post1";
// futuramente: import Post2 from "../../blog/posts/Post2";

const postsData = [
  {
    id: 1,
    title: "Aprendendo Python",
    description: "Dicas para iniciantes",
    Component: Post1, // referência ao componente do post
  },
  // futuramente mais posts...
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // filtra os posts pelo título
  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem" }}>
      {/* Barra de busca */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {/* Lista de posts */}
      <PostsList posts={filteredPosts} />

      {/* Mensagem se não houver posts */}
      {filteredPosts.length === 0 && <p>Nenhum post encontrado.</p>}
    </div>
  );
};

export default Blog;
