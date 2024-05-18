import React from 'react';

import styled from 'styled-components';

function InputSection({
  title,
  content,
  setTitle,
  setContent,
  onAddButtonClick,
}) {
  return (
    <InputSectionWrapper>
      <InputWrapper>
        <InputContainer>
          <h4>Title</h4>
          <StInput value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <h4>Content</h4>
          <StInput
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </InputContainer>
      </InputWrapper>
      <StButon onClick={onAddButtonClick}>Add</StButon>
    </InputSectionWrapper>
  );
}

export default InputSection;

const InputSectionWrapper = styled.div`
  background: #e9e9e9;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 40px;
  align-items: baseline;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StButon = styled.button`
  background: #038387;
  border: none;
  padding: 8px 20px;
  color: white;
  border-radius: 20px;
  font-weight: 700;
  font-size: 16px;
`;

const StInput = styled.input`
  border: none;
  padding: 10px;
  border-radius: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
