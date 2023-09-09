import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

import { Interface } from "readline"
interface IMyCard{
  img:string
}
export const MyCard:React.FC<IMyCard>=({img})=>{
   return <>
     <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
}