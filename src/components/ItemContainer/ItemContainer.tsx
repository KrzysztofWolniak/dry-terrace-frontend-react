import React, { useState } from "react";
import "./ItemContainer.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import itemData from "../../interfaces/itemData";


export const ItemContainer = (props:itemData) => {
  const [Id,setId]= useState(props.id);
  const onClickHandler = () => {
    console.log(Id);
  };
  return (
    
      <Card
        sx={{  minWidth: "450",maxWidth:"450px" , cursor:"pointer"}}
        onClick={() => onClickHandler()}
      >
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.header}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.text}
          </Typography>
          <Typography variant ="h4" >
            {props.price}
          </Typography>
        </CardContent>
      </Card>
    
  );
};
