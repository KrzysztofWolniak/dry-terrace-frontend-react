import React from "react";
import "./ItemContainer.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const ItemContainer = (props:any) => {
  const onClickHandler = () => {
    console.log(props.id);
  };
  return (
    
      <Card
        sx={{  minWidth: "450",maxWidth:"450px" , cursor:"pointer"}}
        onClick={() => onClickHandler()}
      >
        <CardMedia
          component="img"
          height="400"
          image="https://random.imagecdn.app/345/140"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Roleta Rzymska
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas
            similique eius quia omnis consequatur illo saepe, suscipit nemo
            repudiandae reprehenderit, perspiciatis illum? Qui ea provident quae
            asperiores, recusandae aliquam.
          </Typography>
          <Typography variant ="h4" >
            140 zł/m2
          </Typography>
        </CardContent>
      </Card>
    
  );
};
