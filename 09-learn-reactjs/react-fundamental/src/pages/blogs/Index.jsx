import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Blog() {
  // const [posts, setPosts] = useState([]);
  const posts = useLoaderData();

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json));

  // console.log('Render');

  // return () => {
  //   console.log('Cleanup');
  // };
  // }, []);

  return (
    <>
      <h2>My Blog Posts</h2>
      {posts.map((item, index) => {
        return (
          <p key={index}>
            <Link to={`/blog/${item.id}`}>- {item.title}</Link>
          </p>
        );
      })}
    </>
  );
}

export default Blog;
