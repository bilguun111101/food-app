import React from "react";
import { styles } from "./MenuStyles";
import { Box, Container, Menu } from "@mui/material";

const MenuSection = () => {
  return (
    <Box sx={styles.menuPageSection}>
      <Menu display="flex" justifyContent="center">
        <Container sx={styles.containerSection}></Container>
      </Menu>
    </Box>
  );
};

export default MenuSection;
