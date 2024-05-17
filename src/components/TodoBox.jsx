import React from 'react';

function TodoBox({ item, button }) {
  return (
    <div
      style={{
        padding: "16px",
        background: "white",
        borderRadius: "20px",
        height: "120px",
        display: "flex",
        flexDirection: "column",
        width: "33%",
        margin: "10px",
        border: "3px solid #038387",
      }}
    >
      <div style={{ flex: 1 }}>
        <h4 style={{ marginTop: 0 }}>{item?.title}</h4>
        {item?.content}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            padding: "6px",
            flex: 1,
            borderRadius: "10px",
            border: "2px solid green",
            background: "none",
          }}
        >
          Delete
        </button>
        <button
          style={{
            padding: "6px",
            border: "2px solid red",
            background: "none",
            flex: 1,
            borderRadius: "10px",
          }}
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default TodoBox;
