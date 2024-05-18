import React from 'react';

import styled from 'styled-components';

function ListSection({ title, children }) {
  return (
    <>
      <StTitle>{title}</StTitle>
      <ListWrapper>{children}</ListWrapper>
    </>
  );
}

export default ListSection;

const StTitle = styled.h2`
  padding: 0 16px;
  margin-bottom: 3px;
`;

const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
