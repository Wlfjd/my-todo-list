import React from 'react';

import Layout from 'components/Layout';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const style = {
  border: "3px solid #d0cfcf",
  borderRadius: "20px",
  margin: "100px auto",
  padding: "20px",
  minHeight: "calc(100vh - 200px)",
};

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const StBackButton = styled.button`
  background: #038387;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
`;
const StTitle = styled.h2`
  padding: 16px;
  border-bottom: 1px solid #eaeaea;
`;

const StContent = styled.p`
  padding: 16px;
`;

function Detail() {
  const { id } = useParams();

  const data = useSelector((state) => state).todo;

  const foundDetailData = data.find((item) => item.id === parseInt(id));

  return (
    <Layout style={style}>
      <StHeader>
        <div>id: {foundDetailData.id}</div>
        <StBackButton>Back</StBackButton>
      </StHeader>
      <main>
        <StTitle>{foundDetailData.title}</StTitle>
        <StContent>{foundDetailData.content}</StContent>
      </main>
    </Layout>
  );
}

export default Detail;
