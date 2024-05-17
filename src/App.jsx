import { useState } from 'react';

import Header from 'components/Header';
import InputSection from 'components/InputSection';
import Layout from 'components/Layout';
import ListSection from 'components/ListSection';
import TodoBox from 'components/TodoBox';
import { LIST_DATA } from 'list';

function App() {
  const [todoData, setTodoData] = useState(LIST_DATA);

  const WORKING_LIST = todoData.filter((item) => item.isDone !== true);
  const DONE_LIST = todoData.filter((item) => item.isDone === true);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onAddButtonClick = () => {
    setTodoData([
      ...todoData,
      { id: todoData.length + 1, title, content, isDone: false },
    ]);
    setTitle("");
    setContent("");
  };

  const onDelete = (index) => {
    const newListData = todoData.filter((item) => item.id !== index);
    setTodoData(newListData);
  };

  const onChangeState = (index) => {
    const updatedTodos = todoData.map((todo) => {
      if (todo.id === index) {
        return { ...todo, id: todo.id, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodoData(updatedTodos);
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
            button="Done"
            item={item}
            onDeleteHandler={() => onDelete(item.id)}
            onDoneHandler={() => onChangeState(item.id)}
          />
        ))}
      </ListSection>

      <ListSection title="Done !🎉">
        {DONE_LIST.map((item) => (
          <TodoBox
            key={item.id}
            button="Cancel"
            item={item}
            onDeleteHandler={() => onDelete(item.id)}
            onDoneHandler={() => onChangeState(item.id)}
          />
        ))}
      </ListSection>
    </Layout>
  );
}

export default App;
