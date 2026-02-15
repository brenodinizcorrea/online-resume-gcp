// src/blog/posts/index.js
import Post1 from "./Post1";

const postsMap = {
  1: { 
    component: Post1, 
    title: "Example", 
    learnings: "Example", 
    readTime: "5 minutes",
    tags: ["Python"]  // <- novas tags
  },
  // 2: { component: Post2, title: "Outro Post", learnings: "...", readTime: "X minutes", tags: ["Tag1", "Tag2"] },
};

export default postsMap;
