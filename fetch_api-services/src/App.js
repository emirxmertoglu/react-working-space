import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("emir");
  const [avatar, setAvatar] = useState(false);
  const [users, setUsers] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", avatar);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    console.log("form submitted");
  };

  const addPost = (data) => {
    const headers = new Headers();
    //headers.append("Content-type", "application/json");
    headers.append("Authorization", "Bearer emirxmertoglu");

    const formData = new FormData();
    formData.append("userId", data.userId);
    formData.append("title", data.title);
    formData.append("body", data.body);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      //body: JSON.stringify(data),
      body: formData,
      headers,
    })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.log);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));

    addPost({
      userId: 666,
      title: "Post Title",
      body: "Post description",
    });
  }, []);

  return (
    <>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type="file"
          onChange={(e) => setAvatar(e.target.files[0])}
        />{" "}
        <br />
        <button disabled={!name || !avatar} type="submit">
          Submit
        </button>
      </form>

      <h1>User List</h1>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default App;
