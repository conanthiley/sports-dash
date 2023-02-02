import { Link, Outlet } from "react-router-dom";
import "./styles/RootLayout.css";
export default function RootLayout() {
  return (
    <div id="root">
      <div id="sidebar">
        <header>
          <nav>
            <div id="sidebar-contents">
              <Link to="/">
                <h1>Sidebar</h1>
              </Link>

              <form>
                <input placeholder="Search..." />
              </form>
              <button>Search</button>
            </div>
            <br />
            <Link id="navlink" to="/players">
              Players
            </Link>
            <br />
            <Link id="navlink" to="/teams">
              Teams
            </Link>
            <br />
            <Link id="navlink" to="/calender">
              Calender
            </Link>
          </nav>
        </header>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
