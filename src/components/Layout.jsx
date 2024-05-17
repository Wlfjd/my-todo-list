import React from 'react';

function Layout({ children }) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        backgroundColor: "white",
        width: "800px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        maxWidth: "1200px",
      }}
    >
      {children}
    </div>
  );
}

export default Layout;
