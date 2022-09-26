import React from "react";
import { styles } from "./MenuStyles";
import { Box, Card, Container, Grid } from "@mui/material";

const MenuSection = () => {
  return (
    <Box sx={styles.menuPageSection}>
      <Box display="flex" justifyContent="center">
        <Container sx={styles.containerSection}>
          <Box sx={styles.closeCardSection}>
            <Card sx={styles.closeCard}></Card>
            <Card sx={styles.closeCard}></Card>
            <Card sx={styles.closeCard}></Card>
          </Box>
          <Grid container sx={styles.foodSection}>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MenuSection;
