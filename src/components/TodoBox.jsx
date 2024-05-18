import React from 'react';

import styled from 'styled-components';

function TodoBox({ item, onToggleIsDone, onDeleteHandler }) {
  return (
    <BoxContainer>
      <div style={{ flex: 1 }}>
        <h4 style={{ marginTop: 0 }}>{item?.title}</h4>
        <p>{item?.content}</p>
      </div>
      <ButtonContainer>
        <Stbutton color="green" onClick={onDeleteHandler}>
          Delete
        </Stbutton>
        <Stbutton color="red" onClick={onToggleIsDone}>
          {item.isDone ? "Cancel" : "Done"}
        </Stbutton>
      </ButtonContainer>
    </BoxContainer>
  );
}

export default TodoBox;

const BoxContainer = styled.div`
  padding: 16px;
  background: white;
  border-radius: 20px;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin: 4px;
  width: 27%;
  border: 3px solid #038387;
`;

const Stbutton = styled.button`
  padding: 6px;
  flex: 1;
  border-radius: 10px;
  border: 2px solid ${(props) => props.color};
  background: none;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;
