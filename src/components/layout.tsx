import { Outlet } from "react-router";
import { Sidebar } from "./sidebar";

export const Layout = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};
