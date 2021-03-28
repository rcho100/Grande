import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'All About Lattes', author: 'Barista Bob', body: "It's never too late for a latte..." },
    { id: 2, title: 'Frappuccino Fridays', author: 'Connoisseur Cathy', body: "Happy Friday! I can't believe it's finally friday..." },
    { id: 3, title: 'No Cap for Cappucinos' , author: 'Barista Bob', body: 'There are a lot of differing opinions on cappucinos...' }
  ])

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
export default Home;
