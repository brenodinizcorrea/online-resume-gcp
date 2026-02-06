import React from "react";
import "./PostHero.css";

const PostHero = ({ title, learnings, readTime }) => {
  return (
    <div className="post-hero">
      <h1>{title}</h1>
      {learnings && <p className="post-learnings">{learnings}</p>}
      {readTime && <p className="post-readtime">{readTime}</p>}
    </div>
  );
};

export default PostHero;
