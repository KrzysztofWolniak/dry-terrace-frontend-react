import React, { useState } from "react";
import { ItemContainer } from "../../components/ItemContainer/ItemContainer";
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";

export const Items = () => {
  const itemsList = useAppSelector((state) => state.items.itemsList);
  //for future inplementation \/
  /*const dispatch = useAppDispatch();*/
  return (
    <div className="Items">
      {itemsList.map((item, key) => (
        <ItemContainer
          id={item.id}
          text={item.text}
          header={item.header}
          alt={item.alt}
          image={item.image}
          price={item.price}
          key={key}
        ></ItemContainer>
      ))}
    </div>
  );
};
