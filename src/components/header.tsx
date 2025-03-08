import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="justify-self-end absolute right-0">
      <MenuIcon className="w-[30px] md:w-[50px] h-auto my-2 mx-2 text-customGreen cursor-not-allowed" />
    </div>
  );
};
