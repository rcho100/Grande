import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");
  // grabbing data but naming it blogs in this context

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <p>Loading...</p> }
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
export default Home;
