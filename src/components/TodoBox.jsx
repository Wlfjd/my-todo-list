import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  deleteTodo,
  updateTodo,
} from 'redux_/modules/todo';
import styled from 'styled-components';

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
  &:hover {
    background-color: #e0e0e0;
  }
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

function TodoBox({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteTodo({ index: item.id }));
  };

  const onToggleState = (e) => {
    e.stopPropagation();
    dispatch(updateTodo({ index: item.id }));
  };

  const goToDetail = (e) => {
    navigate(`/todos/${item.id}`);
  };

  return (
    <BoxContainer onClick={goToDetail}>
      <div>
        <h4 style={{ marginTop: 0 }}>{item?.title}</h4>
        <p>{item?.content}</p>
      </div>
      <ButtonContainer>
        <Stbutton color="green" onClick={onDelete}>
          Delete
        </Stbutton>
        <Stbutton color="red" onClick={onToggleState}>
          {item.isDone ? "Cancel" : "Done"}
        </Stbutton>
      </ButtonContainer>
    </BoxContainer>
  );
}

export default TodoBox;
