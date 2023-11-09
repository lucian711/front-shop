import { createTheme, MantineThemeOverride } from "@mantine/core";

// type globalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * MercuryX gloabal styles
 */
// eslint-disable-next-line react-refresh/only-export-components
export const globalTheme: MantineThemeOverride = createTheme({
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  /** break */
  breakpoints: {
    xs: "22.4375rem",
    sm: "47.9375rem",
    md: "63.9375rem",
    lg: "85.3125rem",
    xl: "119.9375rem"
  }
});
