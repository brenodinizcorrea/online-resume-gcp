import React from "react";
import "./PostCard.css";

const PostCard = ({ title, description, url, tags }) => {
  return (
    <a href={url} className="post-card-link">
      <div className="post-card">
        <h3>{title}</h3>
        <p>{description}</p>

        {tags && tags.length > 0 && (
          <div className="post-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="post-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default PostCard;
