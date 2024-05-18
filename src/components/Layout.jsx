import React from 'react';

import styled from 'styled-components';

function Layout({ children }) {
  return <StWrapper>{children}</StWrapper>;
}

export default Layout;

const StWrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 800px;
  height: 100vh;
  margin: 0 auto;
  max-width: 1200px;
`;
