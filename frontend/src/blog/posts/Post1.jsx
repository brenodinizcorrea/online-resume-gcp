// src/posts/Post1.jsx
import React from "react";

const Post1 = () => {
  return (
    <div>
      <h2>Aprendendo Python</h2>
      <p>Dicas e exemplos para iniciantes.</p>
      <pre>
{`for i in range(5):
    print(i)`}
      </pre>
      <pre>
{`Resultado:
0
1
2
3
4`}
      </pre>
    </div>
  );
};

export default Post1;
