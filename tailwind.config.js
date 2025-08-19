/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        "primary-foreground": "#ffffff",
        secondary: "#e2e8f0",
        "secondary-foreground": "#475569",
        accent: "#e2e8f0",
        "accent-foreground": "#475569",
        background: "#fafafa",
        foreground: "#1e293b",
        card: "#ffffff",
        "card-foreground": "#1e293b",
        popover: "#ffffff",
        "popover-foreground": "#1e293b",
        border: "#cbd5e1",
        input: "#cbd5e1",
        ring: "#6366f1",
        muted: "#f8fafc",
        "muted-foreground": "#64748b",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",

        "chart-1": "#6366f1",
        "chart-2": "#4f46e5",
        "chart-3": "#4338ca",
        "chart-4": "#3730a3",
        "chart-5": "#312e81",

        sidebar: "#f8fafc",
        "sidebar-foreground": "#1e293b",
        "sidebar-primary": "#6366f1",
        "sidebar-primary-foreground": "#ffffff",
        "sidebar-accent": "#e2e8f0",
        "sidebar-accent-foreground": "#475569",
        "sidebar-border": "#cbd5e1",
        "sidebar-ring": "#6366f1",

        notification: "#ef4444",
      },
      fontFamily: {
        regular: ["regular"],
        medium: ["medium"],
        semibold: ["semiBold"],
        bold: ["bold"],
        extrabold: ["extraBold"],
        black: ["black"],
      },
      borderRadius: {
        sm: "calc(0.5rem - 4px)",
        md: "calc(0.5rem - 2px)",
        lg: "0.5rem",
        xl: "calc(0.5rem + 4px)",
      },
      boxShadow: {
        "2xs": "0px 4px 8px -1px rgba(0, 0, 0, 0.05)",
        xs: "0px 4px 8px -1px rgba(0, 0, 0, 0.05)",
        sm: "0px 4px 8px -1px rgba(0, 0, 0, 0.10), 0px 1px 2px -2px rgba(0, 0, 0, 0.10)",
        default:
          "0px 4px 8px -1px rgba(0, 0, 0, 0.10), 0px 1px 2px -2px rgba(0, 0, 0, 0.10)",
        md: "0px 4px 8px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)",
        lg: "0px 4px 8px -1px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.10)",
        xl: "0px 4px 8px -1px rgba(0, 0, 0, 0.10), 0px 8px 10px -2px rgba(0, 0, 0, 0.10)",
        "2xl": "0px 4px 8px -1px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
