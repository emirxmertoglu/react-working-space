import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>Home</title>
      </Helmet>

      <h2>Home page</h2>
    </>
  );
}
