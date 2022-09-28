import React from 'react'
import { styles } from './AddDataStyle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card, Typography, Box, Button, Rating, CardMedia } from "@mui/material";

const AddData = props => {
    const propsy = props.data;
    const addToOrder = () => {}
    return (
    <Card sx={styles.cardSection}>
        <CardMedia image={propsy.image} component="img" sx={styles.img} />
        <Box sx={styles.foodImpormation}>
            <Typography component="div" variant="h6" sx={{ marginTop: "10px" }} color="primary.text">
            {`${propsy.name}`}
            </Typography>
            <Typography component="div" sx={{ color: "silver" }}>
                Порц
            </Typography>
            <Box sx={styles.cost}>
            <Typography color="primary.text">{`₮${propsy.cost}`}</Typography>
            <Typography onClick={addToOrder}>
                <Button>
                    <AddCircleIcon color="success" />
                </Button>
            </Typography>
            </Box>
            <Rating name="read-only" value={propsy.rate} readOnly />
        </Box>
    </Card>
    )
}

export default AddData