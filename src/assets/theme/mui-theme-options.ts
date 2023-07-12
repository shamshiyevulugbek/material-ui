export const options = {
  // breakpoints: {
  //   values: {
  //     xs: 530,
  //     sm: 750,
  //     md: 900,
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "var(--white)",
          backgroundColor: "var(--black)",
        },
        arrow: {
          color: "var(--black)",
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--skeleton)",
        },
      },
    },
  },

  typography: {
    fontFamily: '"Golos Text", sans-serif',
  },

  palette: {
    text: {
      primary: "#262626",
      secondary: "#7F92A0",
    },
    primary: {
      light: "#4ab3f4",
      main: "#1DA1F2",
      dark: "#1470a9",
      contrastText: "#fff",
    },
    secondary: {
      light: "#98a7b3",
      main: "#7F92A0",
      dark: "#586670",
      contrastText: "#262626",
    },
    error: {
      light: "#ff7b7f",
      main: "#FF5A5F",
      dark: "#b23e42",
      contrastText: "#fff",
    },
    warning: {
      light: "#fdab69",
      main: "#FD9644",
      dark: "#b1692f",
      contrastText: "#fff",
    },
    success: {
      light: "#55d5c7",
      main: "#2BCBBA",
      dark: "#1e8e82",
      contrastText: "#fff",
    },
    info: {
      light: "#8c8bdb",
      main: "#706FD3",
      dark: "#4e4d93",
      contrastText: "#fff",
    },
  },
};
