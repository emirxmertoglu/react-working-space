import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Post() {
  const { url } = useParams();
  const myUrl = url.split("-").join(" ").toLocaleUpperCase();

  return (
    <>
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>{myUrl} Detail</title>
      </Helmet>
      <h3>{myUrl} Title</h3>
    </>
  );
}
