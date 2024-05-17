import React, { useState } from 'react';

import Header from 'components/Header';
import InputSection from 'components/InputSection';
import Layout from 'components/Layout';
import ListSection from 'components/ListSection';
import TodoBox from 'components/TodoBox';
import {
  DONE_LIST,
  WORK_LIST,
} from 'list';

function App() {
  const [workList, setWorkList] = useState(WORK_LIST);
  const [doneList, setDoneList] = useState(DONE_LIST);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onAddButtonClick = () => {
    setWorkList([...workList, { title, content }]);
    setTitle("");
    setContent("");
  };

  const onDeleteHandler = (list, onChange, index) => {
    const newListData = list.filter((item) => item.id !== index);
    onChange(newListData);
  };
  const onDoneHandler = (index) => {
    const newWorkList = workList.filter((item) => item.id !== index);
    setWorkList(newWorkList);

    const doneItem = workList.find((item) => item.id === index);
    setDoneList([
      ...doneList,
      {
        id: doneList.length + 1,
        title: doneItem.title,
        content: doneItem.content,
      },
    ]);
  };

  const onCanelHandler = (index) => {
    const newDoneList = doneList.filter((item) => item.id !== index);
    setDoneList(newDoneList);

    const workItem = doneList.find((item) => item.id === index);
    setWorkList([
      ...workList,
      {
        id: workList.length + 1,
        title: workItem.title,
        content: workItem.content,
      },
    ]);
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
        {workList.map((item) => (
          <TodoBox
            button="Done"
            item={item}
            onDeleteHandler={() =>
              onDeleteHandler(workList, setWorkList, item.id)
            }
            onDoneHandler={() => onDoneHandler(item.id)}
          />
        ))}
      </ListSection>

      <ListSection title="Done !🎉">
        {doneList.map((item) => (
          <TodoBox
            button="Cancel"
            item={item}
            onDeleteHandler={() => {
              onDeleteHandler(doneList, setDoneList, item.id);
            }}
            onCanelHandler={() => onCanelHandler(item.id)}
          />
        ))}
      </ListSection>
    </Layout>
  );
}

export default App;
