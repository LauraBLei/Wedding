import { Outlet } from "react-router";
import { Header } from "./header";

export const Layout = () => {
  return (
    <div className="w-full flex">
      <Outlet />
      <Header />
    </div>
  );
};
