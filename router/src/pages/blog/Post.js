import { useParams } from "react-router-dom";

export default function Post() {
  const { url } = useParams();

  return <div>Blog Post = {url.replaceAll("-", " ").toLocaleUpperCase()}</div>;
}
