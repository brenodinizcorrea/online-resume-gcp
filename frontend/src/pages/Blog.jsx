import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import PostsList from "../components/PostsList/PostsList";
import TagsFilter from "../components/TagsFilter/TagsFilter";
import postsMap from "../blog/posts";

const postsData = Object.entries(postsMap).map(([id, post]) => ({
  id,
  title: post.title,
  description: post.learnings,
  tags: post.tags || [],
}));

const allTags = Array.from(new Set(postsData.flatMap(post => post.tags)));

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filteredPosts = postsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem" }}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <TagsFilter tags={allTags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      <PostsList posts={filteredPosts} />
      {filteredPosts.length === 0 && <p>Nenhum post encontrado.</p>}
    </div>
  );
};

export default Blog;
