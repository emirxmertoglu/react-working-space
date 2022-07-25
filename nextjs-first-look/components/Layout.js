import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav className="nav">
        <ul className="list">
          <li className="item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="item">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      {children}

      <style jsx>{`
        .list {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          list-style: none;
          margin: 0;
          background-color: #fff;
        }

        .item:not(:last-child) {
          margin-right: 20px;
        }

        .item a {
          padding: 20px 0;
          display: block;
          font-weight: 500;
          color: #000;
        }
      `}</style>
    </>
  );
}
