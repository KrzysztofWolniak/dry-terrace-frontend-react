import React from "react";
import { ItemContainer } from "../../components/ItemContainer/ItemContainer";

export const Items = () => {
  return (
    <div className="Items">
      <ItemContainer id={1} ></ItemContainer>
      <ItemContainer id={2}></ItemContainer>
      <ItemContainer id={3}></ItemContainer>
      <ItemContainer id={4}></ItemContainer>
      <ItemContainer id={5}></ItemContainer>
      <ItemContainer id={6}></ItemContainer>
      <ItemContainer id={7}></ItemContainer>
    </div>
  );
};
