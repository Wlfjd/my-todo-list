import React, { useState } from 'react';

import Header from './components/Header';
import InputSection from './components/InputSection';
import Layout from './components/Layout';
import TodoBox from './components/TodoBox';
import { LIST } from './list';

function App() {
  const [listData, setListData] = useState(LIST);
  return (
    <Layout>
      <Header />
      <InputSection />
      <h3 style={{ padding: "0 16px", marginBottom: "3px" }}>Working...🔥</h3>
      <div style={{ display: "flex", width: "100%" }}>
        {listData.map((item) => (
          <TodoBox item={item} button="Done" />
        ))}
      </div>

      <h3 style={{ padding: "0 16px", marginBottom: "3px" }}>Done !🎉</h3>
      <div style={{ display: "flex", width: "100%" }}>
        {listData.map((item) => (
          <TodoBox button="Cancel" />
        ))}
      </div>
    </Layout>
  );
}

export default App;
