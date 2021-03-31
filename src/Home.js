import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('Could not fetch the data for that resource.')
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        // auto catches network / connection error
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <p>Loading...</p> }
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
export default Home;
