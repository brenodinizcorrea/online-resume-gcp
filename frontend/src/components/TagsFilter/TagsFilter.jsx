import React from "react";
import "./TagsFilter.css";

const TagsFilter = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="tags-box">
      {tags.map((tag, idx) => (
        <button
          key={idx}
          onClick={() => onSelectTag(tag === selectedTag ? "" : tag)}
          className={tag === selectedTag ? "tag-btn selected" : "tag-btn"}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagsFilter;
