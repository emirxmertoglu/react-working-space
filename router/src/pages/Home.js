import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>Home</title>
      </Helmet>

      <h2 className="text-3xl text-center font-medium">Home page</h2>
    </>
  );
}
