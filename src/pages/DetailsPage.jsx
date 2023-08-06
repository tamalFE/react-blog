import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postDetails } from '../apiRequest/apiCalls';
import Layout from '../layout/Layout';
import Loader from '../component/Loader';
import BlogDetails from '../component/BlogDetails';

const DetailsPage = () => {
  const { postID } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let data = await postDetails(postID);
      setList(data);
    })();
  }, [postID]);

  return (
    <div>
      <Layout>
        {list === null ? <Loader /> : <BlogDetails list={list} />}
      </Layout>
    </div>
  );
};

export default DetailsPage;
