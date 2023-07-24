import Link from "next/link";

import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Best You</Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">Home </Link>
            <Link href="/calorie-tracker">Calorie Tracker</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
