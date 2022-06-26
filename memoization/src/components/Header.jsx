import { memo } from "react";

function Header() {
  console.log("HEADER rendered");
  return <header>HEADER</header>;
}

export default memo(Header);
