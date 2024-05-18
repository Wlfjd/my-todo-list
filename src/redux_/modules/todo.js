import { LIST_DATA } from 'list';

const AddTodo = "todo/AddTodo";
const DeleteTodo = "todo/DeleteTodo";
const UpdateTodo = "todo/UpdateTodo";

export const addTodo = (payload) => {
  return {
    type: AddTodo,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DeleteTodo,
    payload,
  };
};
export const updateTodo = (payload) => {
  return {
    type: UpdateTodo,
    payload,
  };
};

const initialState = LIST_DATA;

const todo = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case AddTodo:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload.title,
          content: action.payload.content,
          isDone: false,
        },
      ];
    case DeleteTodo:
      return state.filter((item) => item.id !== action.payload.index);

    case UpdateTodo:
      return state.map((todo) => {
        if (todo.id === action.payload.index) {
          return { ...todo, id: todo.id, isDone: !todo.isDone };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todo;
