import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="w-full flex">
      <div className="w-full mt-20">
        <Outlet />
      </div>
    </div>
  );
};
