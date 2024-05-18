import React from 'react';

import styled from 'styled-components';

const StHeader = styled.div`
  background: white;
  padding: 6px 20px;
`;

function Header() {
  return (
    <StHeader>
      <h3>Todo-List *</h3>
    </StHeader>
  );
}

export default Header;
