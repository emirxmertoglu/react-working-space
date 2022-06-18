import { useEffect, useState } from "react";

function Test() {
  const [postID, setPostID] = useState(1);
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("component mounted");
    let interval = setInterval(() => {
      console.log("interval");
    }, 1 * 1000);
    return () => {
      clearInterval(interval);
      console.log("interval cleared");
      console.log("component unmounted");
    };
  }, []);

  /* useEffect(() => {
    console.log("component updated");
  }); */

  useEffect(() => {
    console.log("postID changed", postID);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postID]);

  return (
    <>
      <h3>{postID}</h3>
      {post ? <pre>{JSON.stringify(post, null, 2)}</pre> : <p>Loading...</p>}
      <button onClick={() => setPostID((postID) => postID + 1)}>
        Next Post
      </button>
      <hr />
      <div
        style={{
          fontSize: 30,
          fontFamily: "sans-serif",
          color: "crimson",
          fontWeight: 600,
          marginTop: 20,
        }}
      >
        Test Component
      </div>
    </>
  );
}

export default Test;
