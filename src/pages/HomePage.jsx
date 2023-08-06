import { useEffect, useState } from 'react';
import BlogList from '../component/BlogList';
import Layout from '../layout/Layout';
import { postNewest } from '../apiRequest/apiCalls';
import Loader from '../component/Loader';

const HomePage = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let data = await postNewest();
      setList(data);
    })();
  }, []);

  return (
    <div>
      <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
    </div>
  );
};

export default HomePage;
