import React from "react";
import { DiAndroid } from "react-icons/di";
import { IconFunctionComp } from "../../components/Icon/IconFunctionComp";

export const Icons = () => {
  return (
    <div className="IconsPage">
      <IconFunctionComp
        size="48"
        color="red"
        text="Function "
        icon={DiAndroid}
        onHover
      />

      <IconFunctionComp
        size="48"
        color="red"
        text="Function Component"
        icon={DiAndroid}
        onHover
      />
      <IconFunctionComp
        size="48"
        color="red"
        text="Another Comp"
        icon={DiAndroid}
        onHover
      />
     
      <IconFunctionComp
        size="48"
        color="red"
        text="123123123123123123123"
        icon={DiAndroid}
        onHover
      />
    </div>
  );
};