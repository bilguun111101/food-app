import { Box, Typography, Button, CardMedia, CardContent, CardActions, Card } from "@mui/material";
import { styles } from "./CloseFoodStyle";
import { DeleteDoc } from "../../DeleteData";
import RemoveIcon from "@mui/icons-material/Remove";

const CloseFood = props => {
  const propsy = props.data;
  const deleteThis = () => {
    DeleteDoc("foods", propsy.uid)
  }

  return (
    <Card sx={styles.card}>
      <CardMedia 
        component="img" 
        image={propsy.image} 
        alt="green iguana" />
      <CardContent>
        <Typography gutterBottom color="primary.text" variant="h5" component="div" sx={styles.name}>
          {propsy.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingLeft: "18px" }}>
        <Box sx={styles.bottom}>
          <Typography component="div" variant="h7" color="primary.text">
            {`₮${propsy.cost}`}
          </Typography>
          <Button sx={styles.btn} onClick={deleteThis}>
            <RemoveIcon color="error" />
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}

export default CloseFood