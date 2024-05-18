import Header from 'components/Header';
import InputSection from 'components/InputSection';
import Layout from 'components/Layout';
import ListSection from 'components/ListSection';
import TodoBox from 'components/TodoBox';
import { useSelector } from 'react-redux';

function Home() {
  const data = useSelector((state) => state).todo;

  const WORKING_LIST = data.filter((item) => item.isDone !== true);
  const DONE_LIST = data.filter((item) => item.isDone === true);

  return (
    <Layout>
      <Header />
      <InputSection />
      <ListSection title="Working...🔥">
        {WORKING_LIST.map((item) => (
          <TodoBox key={item.id} item={item} />
        ))}
      </ListSection>
      <ListSection title="Done !🎉">
        {DONE_LIST.map((item) => (
          <TodoBox key={item.id} item={item} />
        ))}
      </ListSection>
    </Layout>
  );
}

export default Home;
