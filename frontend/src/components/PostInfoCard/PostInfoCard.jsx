import React from "react";
import "./PostInfoCard.css";

const PostInfoCard = ({ learnings, readTime }) => {
  return (
    <div className="post-info-card">
      {learnings && (
        <p className="post-info-learnings">
          <strong>What you are going to learn:</strong> {learnings}
        </p>
      )}
      {readTime && (
        <p className="post-info-learnings">
          <strong>Reading time:</strong> {readTime}
        </p>
      )}
    </div>
  );
};

export default PostInfoCard;
