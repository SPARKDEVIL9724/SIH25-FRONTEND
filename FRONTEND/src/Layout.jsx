import { NavBar } from "./Components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export function Layout() {
  return (
    <>
      <div className="layout-container">
        <NavBar />
        <main className="page-container">
          <Outlet />
        </main>
      </div>
    </>
  );
}
