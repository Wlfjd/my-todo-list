import React, { useState } from 'react';

import Header from './components/Header';
import InputSection from './components/InputSection';
import Layout from './components/Layout';
import TodoBox from './components/TodoBox';
import {
  DONE_LIST,
  WORK_LIST,
} from './list';

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

    const addDoneItem = workList.find((item) => item.id === index);
    setDoneList([
      ...doneList,
      {
        id: doneList.length + 1,
        title: addDoneItem.title,
        content: addDoneItem.content,
      },
    ]);
  };

  const onCanelHandler = (index) => {
    const newDoneList = doneList.filter((item) => item.id !== index);
    setDoneList(newDoneList);

    const addWorkItem = doneList.find((item) => item.id === index);
    setWorkList([
      ...workList,
      {
        id: workList.length + 1,
        title: addWorkItem.title,
        content: addWorkItem.content,
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
      <h3 style={{ padding: "0 16px", marginBottom: "3px" }}>Working...🔥</h3>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {workList.map((item) => (
          <TodoBox
            item={item}
            button="Done"
            onDeleteHandler={() =>
              onDeleteHandler(workList, setWorkList, item.id)
            }
            onDoneHandler={() => onDoneHandler(item.id)}
          />
        ))}
      </div>

      <h3 style={{ padding: "0 16px", marginBottom: "3px" }}>Done !🎉</h3>
      <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        {doneList.map((item) => (
          <TodoBox
            item={item}
            button="Cancel"
            onDeleteHandler={() => {
              onDeleteHandler(doneList, setDoneList, item.id);
            }}
            onCanelHandler={() => onCanelHandler(item.id)}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
