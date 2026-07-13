import { useState, useEffect } from 'react';
import Article from '../components/Article';
import Search from '../components/Search';
import postsData from '../posts.json';

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={setPosts} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        // <Article title={title} tags={tags} date={date} />
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
