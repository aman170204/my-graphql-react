import React, { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPostData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  // const onClickHandler = () => {
  //   getPostData();
  // };

    useEffect(() => {
      getPostData();
    }, [])


  return (
    <div>
      <h2 className="text-center">All Posts</h2>
      {/* <button className="btn btn-primary" onClick={onClickHandler}>
        Get Data
      </button> */}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Posts;
