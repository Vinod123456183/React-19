// src/hooks/useThemeColors.jsx
import { useContext } from "react";
import { ThemeContext } from "./components/contexts/ThemeContext"; // update path if different

export const useThemeColors = () => {
  const { theme } = useContext(ThemeContext);

  return {
    bgColor: theme === "light" ? "bg-[#e1e1e1]" : "bg-[#101010]", // Premium light mode and dark mode backgrounds
    bgColorgray: theme === "light" ? "bg-[#f8f8f8]" : "bg-[#090909]", // Gray background for dark mode, light for light mode

    borderClass: theme === "light" ? "border-gray-500" : "border-gray-300", // Softer border for light, darker for dark mode
    lightborderClass: theme === "light" ? "border-[#aaa]" : "border-gray-600", // Softer border for light, darker for dark mode
    lightborderClass2: theme === "light" ? "border-[#aaa]" : "border-gray-400", // Softer border for light, darker for dark mode

    // Premium text colors for both modes
    textColor: theme === "light" ? "text-[#050505]" : "text-[#ffffff]", // Dark text for light mode, white for dark mode

    // Name and date color, more muted for dark mode
    nameColor: theme === "light" ? "text-[#222222]" : "text-[#d1d1d1]", // Name color for premium feel
    dateColor: theme === "light" ? "text-[#666666]" : "text-[#aaaaaa]", // Muted gray for date, lighter gray for dark mode

    // Tag color, subtle for both modes
    tagColor: theme === "light" ? "text-[#888888]" : "text-[#777777]", // Subtle text for tags

    // Premium pin theme (blue color can be a premium color)
    pinTheme: theme === "light" ? "text-[#2563eb]" : "text-[#2563eb]", // Different shades of blue for both modes

    // Secondary pin theme for differentiation
    pinTheme2: theme === "light" ? "text-[#6b7280]" : "text-[#d1d5db]", // Muted gray for light, light gray for dark mode
    blackBlue: theme === "light" ? "text-[#000]" : "text-blue-600", // Muted gray for light, light gray for dark mode
    whiteTransparent: theme === "light" ? "bg-[#fff]" : "bg-transparent", // Muted gray for light, light gray for dark mode
    placeholderText:
      theme === "light" ? "placeholder-gray-600" : "placeholder-gray-500", // Muted gray for light, light gray for dark mode
    greyBlackText: theme === "light" ? "text-gray-700" : "text-gray-300", // Muted gray for light, light gray for dark mode
    bgColor2: theme === "light" ? "bg-[#fff]" : "bg-[#f9f9f9]", // Muted gray for light, light gray for dark mode
    allBlack: theme === "light" ? "text-[#111]" : "text-[#222]", // Muted gray for light, light gray for dark mode
    blackWhiteText: theme === "dark" ? "text-[#f9f9f9]" : "text-[#111]", // Muted gray for light, light gray for dark mode
    bgInput: theme === "light" ? "bg-[#f9f9f9]" : "bg-[#111]", // Muted gray for light, light gray for dark mode
  };
};
