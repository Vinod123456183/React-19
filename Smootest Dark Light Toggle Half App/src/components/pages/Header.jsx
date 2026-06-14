import React from "react";
import { useThemeColors } from "../../colors";
import Logo from "../lib/Logo";
import SearchBar from "../lib/SearchBar";
import ProfileCard from "../lib/ProfileCard";
const Header = () => {
  const { pinTheme, pinTheme2, bgColor } = useThemeColors(); //importing color for dark n light theme
  return (
    <header className="flex items-center justify-between py-4 px-7 lg:px-11">
      <div className="flex items-center justify-between w-full ">
        <Logo />
        <SearchBar />
        <ProfileCard />
      </div>
    </header>
  );
};

export default Header;
