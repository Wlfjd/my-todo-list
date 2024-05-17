import React from 'react';

function InputSection({
  title,
  content,
  setTitle,
  setContent,
  onAddButtonClick,
}) {
  return (
    <div
      style={{
        backgroundColor: "#e9e9e9",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        borderBottomLeftRadius: "40px",
        alignItems: "baseline",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Title</h4>
          <input
            style={{ border: "none", padding: "10px", borderRadius: "10px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Content</h4>
          <input
            style={{ border: "none", padding: "10px", borderRadius: "10px" }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <button
        style={{
          background: "#038387",
          border: "none",
          padding: "8px 20px",
          color: "white",
          borderRadius: "20px",
          fontWeight: 700,
          fontSize: "16px",
        }}
        onClick={onAddButtonClick}
      >
        Add
      </button>
    </div>
  );
}

export default InputSection;
