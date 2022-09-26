import React, { useState } from "react";
import { ItemContainer } from "../../components/ItemContainer/ItemContainer";

export const Items = () => {
  const [itemsList, setItemsList] = useState([
    {
      id: "1",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas
  similique eius quia omnis consequatur illo saepe, suscipit nemo
  repudiandae reprehenderit, perspiciatis illum? Qui ea provident quae
  asperiores, recusandae aliquam.`,
      header: "Roleta rzymska",
      alt: "Roleta",
      image: "https://random.imagecdn.app/345/140",
      price: "140 zł/m2",
    },
    {
      id: "22",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas
  similique eius quia omnis consequatur illo saepe, suscipit nemo
  repudiandae reprehenderit, perspiciatis illum? Qui ea provident quae
  asperiores, recusandae aliquam.`,
      header: "Zadaszenie tkaninowe",
      alt: "Roleta",
      image: "https://random.imagecdn.app/345/140",
      price: "140 zł/m2",
    },
    {
      id: "33",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas
  similique eius quia omnis consequatur illo saepe, suscipit nemo
  repudiandae reprehenderit, perspiciatis illum? Qui ea provident quae
  asperiores, recusandae aliquam.`,
      header: "Osłona silikonowa",
      alt: "Roleta",
      image: "https://random.imagecdn.app/345/140",
      price: "140 zł/m2",
    }
  ]);
  return (
    <div className="Items">
      {itemsList.map((item,key) => (
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
