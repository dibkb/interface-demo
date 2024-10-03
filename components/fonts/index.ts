import { Inter, Manrope, Outfit } from "next/font/google";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
export const manropeLocal = localFont({
  src: "./Manrope-VariableFont_wght.ttf",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
});
export const primary = Outfit({
  subsets: ["latin"],
});
export const inter = Inter({
  subsets: ["latin"],
});
