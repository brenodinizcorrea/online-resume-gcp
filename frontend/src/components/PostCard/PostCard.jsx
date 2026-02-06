import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, description }) => {
  return (
    <Link 
      to={`/blog/${id}`} 
      style={{ textDecoration: "none", color: "inherit" }} // inline, pois page não tem CSS
    >
      <div 
        style={{
          padding: "1rem",
          marginBottom: "1rem",
          border: "1px solid #ccc",
          borderRadius: "6px",
          backgroundColor: "#f9f9f9",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer",
        }}
      >
        <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ margin: 0 }}>{description}</p>
      </div>
    </Link>
  );
};

export default PostCard;
