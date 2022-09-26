import { styled, Box } from "@mui/material";

export const styles = {
  menuPageSection: (theme) => ({
    width: "100vw",
    paddingTop: "5.2em",
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.main,
  }),
  containerSection: (theme) => ({
    width: "70%",
    [theme.breakpoints.down("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  }),
};
