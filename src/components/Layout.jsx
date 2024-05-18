import React from 'react';

import styled from 'styled-components';

const StWrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1200px;
  ${(props) => props.style && { ...props.style }}
`;

function Layout({ children, style }) {
  return <StWrapper style={style}>{children}</StWrapper>;
}

export default Layout;
