import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // interface-theme-colors
        "interface-base-white": "#fafafa",
        "interface-base-black": "#1C1C1C",
        "interface-palette-primary": "#51EB82",
        "interface-palette-secondary": "#3EC76A",
        "interface-palette-success": "#ABE423",
        "interface-palette-warning": "#FF1A1A",
        "interface-palette-error": "#E4626F",
        "interface-primary": {
          100: "#dcfbe6",
          200: "#b9f7cd",
          300: "#97f3b4",
          400: "#74ef9b",
          500: "#30e76b",
          600: "#19da57",
          700: "#15ba4a",
          800: "#12993d",
          900: "#0e7930",
          1000: "#0a5823",
        },
        "interface-secondary": {
          100: "#dff6e6",
          200: "#bfeccd",
          300: "#9fe3b5",
          400: "#7eda9c",
          500: "#5ed083",
          600: "#33b05b",
          700: "#2c964e",
          800: "#247c40",
          900: "#1c6233",
          1000: "#154825",
        },
        "interface-neutrals": {
          50: "#F6F6F6",
          100: "#e6e6e6",
          200: "#d2d2d2",
          300: "#bdbdbd",
          400: "#a9a9a9",
          500: "#959595",
          600: "#818181",
          700: "#6d6d6d",
          800: "#595959",
          900: "#444444",
          1000: "#303030",
        },
        "interface-success": {
          100: "#e3f6b6",
          200: "#c7ed6c",
          300: "#79a414",
        },
        "interface-warning": {
          100: "#ffb3b3",
          200: "#ff6666",
          300: "#c40000",
        },
        "interface-error": {
          100: "#f6cbcf",
          200: "#ed969f",
          300: "#c12131",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
