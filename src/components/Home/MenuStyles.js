export const styles = {
  menuPageSection: (theme) => ({
    width: "100vw",
    minHeight: "100vh",
    paddingTop: "5.2em",
    paddingBottom: "3em",
    backgroundColor: theme.palette.primary.main,
  }),
  containerSection: (theme) => ({
    width: "70%",
    minHeight: "100vh",
    // height: "100vh",
    [theme.breakpoints.down("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    // backgroundColor: theme.palette.primary.main
    backgroundColor: "#FFF",
    paddingTop: "1em",
  }),

  foodSection: { 
    gap: "1em",
    width: "100%", 
    display: "flex",
    height: "200vh", 
    flexWrap: "wrap",
    marginTop: "1em",
    justifyContent: "center",
    backgroundColor: "yellow", 
  },

  closeCardSection: theme => ({
    gap: "1em",
    width: "100%",
    height: "50vh",
    padding: "1em",
    display: "flex",
    overflow: "scroll",
    marginBottom: "2em",
    boxShadow: `0 0 3px ${theme.palette.primary.text}`,
  }),
  closeCard: theme => ({
    minWidth: "300px", 
    height: "100%", 
    backgroundColor: "purple", 
  }),
  foodOrderSection: theme => ({
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1em"
  }),
  foodOrderCard: theme => ({
    height: "30vh",
    width: "300px",
    minWidth: "200px",
    position: "relative",
    overflow: "none",
    [theme.breakpoints.down("lg")]: {
      width: "270px"
    },
    [theme.breakpoints.down("md")]: {
      width: "240px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    }
  }),
  foodAvatar: theme => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  }),
  foodImage: theme => ({
    width: "150px",
    height: "150px",
    borderRadius: "50%", 
    position: "absolute",
    top: "-30px"
  })
};
