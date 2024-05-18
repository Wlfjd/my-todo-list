import { useState } from 'react';

import Header from 'components/Header';
import InputSection from 'components/InputSection';
import Layout from 'components/Layout';
import ListSection from 'components/ListSection';
import TodoBox from 'components/TodoBox';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  addTodo,
  deleteTodo,
  updateTodo,
} from 'redux_/modules/todo';

function App() {
  const data = useSelector((state) => state).todo;
  const dispatch = useDispatch();

  const WORKING_LIST = data.filter((item) => item.isDone !== true);
  const DONE_LIST = data.filter((item) => item.isDone === true);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onAddButtonClick = () => {
    dispatch(addTodo({ title, content }));
    setTitle("");
    setContent("");
  };

  const onDelete = (index) => {
    dispatch(deleteTodo({ index }));
  };

  const onToggleIsDone = (index) => {
    dispatch(updateTodo({ index }));
  };

  return (
    <Layout>
      <Header />
      <InputSection
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        onAddButtonClick={onAddButtonClick}
      />
      <ListSection title="Working...🔥">
        {WORKING_LIST.map((item) => (
          <TodoBox
            key={item.id}
            item={item}
            onDeleteHandler={() => onDelete(item.id)}
            onToggleIsDone={() => onToggleIsDone(item.id)}
          />
        ))}
      </ListSection>

      <ListSection title="Done !🎉">
        {DONE_LIST.map((item) => (
          <TodoBox
            key={item.id}
            item={item}
            onDeleteHandler={() => onDelete(item.id)}
            onToggleIsDone={() => onToggleIsDone(item.id)}
          />
        ))}
      </ListSection>
    </Layout>
  );
}

export default App;
