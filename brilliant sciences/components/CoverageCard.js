import {Fragment} from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default ({text, image}) => {
  return (
    <Fragment>
        <Card sx={{ maxWidth: "15rem" }} className="Card">
            <CardMedia
              component="img"
              alt="img"
              height="50%"
              image={image}
              style={{maxHeight: "10rem", minWidth: "15rem"}}
            />
            <CardContent style={{backgroundColor: "transparent"}}>
              <Typography gutterBottom variant="h6" component="div">
                {text}
              </Typography>
            </CardContent>
          </Card>
    </Fragment>
  )
}
