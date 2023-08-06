import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { useEffect, useState } from 'react';
import { postList } from '../apiRequest/apiCalls';
import Loader from '../component/Loader';
import BlogList from '../component/BlogList';

const ByCategoryPage = () => {
  const { categoryID } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let data = await postList(categoryID);
      setList(data);
    })();
  }, [categoryID]);

  return (
    <div>
      <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
    </div>
  );
};

export default ByCategoryPage;
