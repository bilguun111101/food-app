import { useState } from "react";
import { styles } from "./MenuStyles";
import useGetData from "../GetDataFromFS";
import CloseFood from "./CloseFood/CloseFood";
import { Box, Container, CircularProgress } from "@mui/material";

// lodash import
import _ from "lodash";
import AddData from "./BackDrops/AddData";
import { useEffect } from "react";

const MenuSection = () => {
  const foodsDatas = useGetData("foods");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!_.isEmpty(foodsDatas)) setLoading(true);
  }, [foodsDatas])

  return (
    <Box sx={styles.menuPageSection}>
      <Box display="flex" justifyContent="center">
        {!loading ? 
          <Box sx={styles.loadingSection}>
            <CircularProgress color="success"/>
          </Box>
        : 
          <Container sx={styles.containerSection}>
            <Box sx={styles.closeCardSection}>
              {_.map(foodsDatas, (obj, idx) => <CloseFood key={idx} data={obj} />)}
            </Box>

            <>
              <Box sx={styles.foodOrderSection}>
                {_.map(foodsDatas, (obj, idx) => <AddData key={idx} data={obj} />)}
              </Box>
            </>
          </Container>
        }
      </Box>
    </Box>
  );
};

export default MenuSection;
