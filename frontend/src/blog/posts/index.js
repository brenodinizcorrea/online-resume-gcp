// src/blog/posts/index.js
import Post1 from "./Post1";
import Post2 from "./Post2"; // futuramente

const postsMap = {
  1: { 
    component: Post1, 
    title: "Aprendendo Python", 
    learnings: "Você vai aprender conceitos básicos de Python, variáveis, loops e funções.", 
    readTime: "5 minutes",
    tags: ["Python", "Iniciante", "Programação"]  // <- novas tags
  },
  2: { 
    component: Post2, 
    title: "Aprendendo Statistics", 
    learnings: "Você vai aprender conceitos básicos de Python, variáveis, loops e funções.", 
    readTime: "5 minutes",
    tags: ["Statistics"]  // <- novas tags
  },
  // 2: { component: Post2, title: "Outro Post", learnings: "...", readTime: "X minutes", tags: ["Tag1", "Tag2"] },
};

export default postsMap;
