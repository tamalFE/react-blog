import defaultImage from '../assets/default.png';

const BlogDetails = ({ list }) => {
  return (
    <div>
      <div className="container mx-auto my-16 p-9">
        <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
          {list['postDetails'] ? (
            <div className="card w-100 glass">
              <figure>
                <img
                  src={
                    list['postDetails']
                      ? list['postDetails']['img']
                      : defaultImage
                  }
                  alt="card!"
                  className="w-full h-80"
                />
              </figure>
              <dir className="card-body">
                <h2 className="card-title">
                  {list['postDetails']
                    ? list['postDetails']['title']
                    : 'Title not available'}
                </h2>
                <p>
                  {list['postDetails']
                    ? list['postDetails']['content']
                    : 'Content not available'}
                </p>
              </dir>
            </div>
          ) : (
            <center>
              <h3 className="text-3xl">Post data not available</h3>
            </center>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
