import React from "react";
import { DiAndroid } from "react-icons/di";
import { Color } from "../../components/Color/Color";
import { IconFunctionComp } from "../../components/Icon/IconFunctionComp";
import { useAppSelector } from "../../hooks/reduxHooks";
import color from "../../interfaces/color";
import "./ItemDetails.css";

export const ItemDetails = (props: any) => {
  const colorsList:Array<color> = useAppSelector((state) => state.items.availableColors);
  return (
    <div className="container-lg text-left">
      <div className="row align-items-start  ">
        <div className="col text-center ">
          <img src="https://random.imagecdn.app/500/500" alt="test" />
        </div>
        <div className="col test">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas
            similique eius quia omnis consequatur illo saepe, suscipit nemo
            repudiandae reprehenderit, perspiciatis illum? Qui ea provident quae
            asperiores, recusandae aliquam.
          </p>
          
          <div className="text-center">
            <button className="px-sm-3">
              <IconFunctionComp
                size="48"
                color="red"
                text="Dodaj do koszyka "
                icon={DiAndroid}
                onHover
              />
            </button>
          </div>
          <p>Dostępne kolory</p>
          <div className=" d-flex  flex-wrap ">
            {colorsList.map((item,key)=>(
              <Color key={key} color={item} />
            )

            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};
