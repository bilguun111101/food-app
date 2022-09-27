import React from "react";
import { styles } from "./MenuStyles";
import useGetData from "../GetDataFromFS";
import CloseFood from "./CloseFood/CloseFood";
import { Box, Card, CardMedia, Container, Grid } from "@mui/material";

// lodash import
import _ from "lodash";

const MenuSection = () => {
  const foodsDatas = useGetData("foods");
  return (
    <Box sx={styles.menuPageSection}>
      <Box display="flex" justifyContent="center">
        <Container sx={styles.containerSection}>
          <Box sx={styles.closeCardSection}>
            {_.map(foodsDatas, (obj, idx) => <CloseFood key={idx} data={obj} />)}
          </Box>

          <>
            <Box sx={styles.foodOrderSection}>
              <Card sx={styles.foodOrderCard}>
                <Box sx={styles.foodAvatar}>
                  <CardMedia component="img" sx={styles.foodImage} image="https://downshiftology.com/wp-content/uploads/2020/04/Tuna-Salad-3-500x500.jpg" />
                </Box>
              </Card>
            </Box>
          </>
        </Container>
      </Box>
    </Box>
  );
};

export default MenuSection;
