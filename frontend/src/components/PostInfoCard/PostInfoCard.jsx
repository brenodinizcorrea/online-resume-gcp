import React from "react";
import "./PostInfoCard.css";

const PostInfoCard = ({ learnings, readTime, tags }) => {
  return (
    <div className="post-info-card">
      {learnings && <p className="post-learnings">O que você vai aprender: {learnings}</p>}
      {readTime && <p className="post-readtime">Tempo de leitura: {readTime}</p>}
      {tags && tags.length > 0 && (
        <div className="post-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="post-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostInfoCard;
