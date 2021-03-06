import theme from "../../theme";

const style = {
  img: {
    height: 240,
    "&:hover": {
      transform: "rotate(360deg)",
      transition: "all 0.5s",
    },
    [theme.breakpoints.down("xl")]: {
      height: 500,
    },
    [theme.breakpoints.down("lg")]: {
      height: 400,
    },
    [theme.breakpoints.down("md")]: {
      height: 300,
    },
    [theme.breakpoints.down("sm")]: {
      height: 10,
    },
  },
  btnAction: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 90,
    height: 40,
    // backgroundClor: "green"
  },
  btn: {
    backgroundColor: theme.palette.green.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
};
export default style;
