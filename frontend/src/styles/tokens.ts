// src/styles/tokens.ts

export const tokens = {
  colors: {
    primary: "#7C3AED",
    secondary: "#F25D2A",
    accent: "#06B6D4",

    background: "#09090B",
    surface: "#18181B",
    card: "#202024",

    text: "#FFFFFF",
    muted: "#A1A1AA",

    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",

    border: "rgba(255,255,255,0.08)",
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    full: "9999px",
  },

  shadow: {
    sm: "0 2px 8px rgba(0,0,0,.08)",
    md: "0 10px 30px rgba(0,0,0,.20)",
    lg: "0 20px 50px rgba(0,0,0,.35)",
  },

  transition: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "400ms ease",
  },
} as const;