export const styles = {
  cardSection: theme => ({
    width: "240px",
    display: "flex",
    boxShadow: "none",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.palette.primary.text}`,
    [theme.breakpoints.down("md")]: {
      width: "180px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "140px"
    }
  }),
  img: theme => ({
    width: "70%",
    height: "158px",
    borderRadius: "50%",
    zIndex: "10",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      height: "40%"
    }
  }),
  foodImpormation: theme => ({
    zIndex: "0",
    top: "50%",
    width: "100%",
    padding: "1em",
    height: "auto",
    display: "flex",
    marginTop: "40%",
    paddingTop: "3em",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.text}`,
    boxShadow: `0 0 4px ${theme.palette.primary.text}`,
  }),
  cost: {
    width: "100%",
    display: "flex",
    paddingTop: "1em",
    alignItems: "center",
    justifyContent: "space-between",
  },
};