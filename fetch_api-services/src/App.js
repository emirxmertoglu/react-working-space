import { useEffect } from "react";
import { PostService, UserService } from "./services";

function App() {
  useEffect(() => {
    PostService.getPosts().then((res) => console.log(res));
    PostService.getPostDetail(3).then((res) => console.log(res));
    PostService.newPost({
      userId: 666,
      title: "Post Title",
      body: "Post description",
    }).then((res) => console.log(res));
    UserService.getUsers().then((res) => console.log(res));
  }, []);

  return <>App</>;
}

export default App;
