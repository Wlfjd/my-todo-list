import React from 'react';

function ListSection({ title, children }) {
  return (
    <>
      <h2 style={{ padding: "0 16px", marginBottom: "3px" }}>{title}</h2>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default ListSection;
