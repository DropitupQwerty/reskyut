import { createTheme } from "@mui/material";

const theme = createTheme ({
  palette: {
    mode: "light",
    primary: {
      main: "#ff4040",
  },
    secondary:{
      main: "#A267AC"
    }
  },
  typography: {
    fontFamily: [
      "Open Sans"
    ].join(","),
    h5:{
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "20px"
    }
  }
});

export default theme;