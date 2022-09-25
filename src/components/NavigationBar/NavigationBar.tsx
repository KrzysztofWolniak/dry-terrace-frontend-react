import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";
import { Link } from "react-router-dom";
import { IconFunctionComp } from "../Icon/IconFunctionComp";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavigationBarElements";


const NavigationBar = () => {
  return (
    <>
      <Nav>
        <NavLink  to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/icons">
            <IconFunctionComp
              size="48"
              color="#9D6B53   "
              text="Icons"
              icon={DiAndroid}
              onHover={false}
            />
          </NavLink>
          <NavLink to="/items">
            <IconFunctionComp
              size="48"
              color="#9D6B53"
              text="Items"
              icon={DiAndroid}
            />
          </NavLink>
          <NavLink to="/test">
            <IconFunctionComp
              size="48"
              color="#9D6B53"
              text="Test1"
              icon={AiOutlineShoppingCart}
            />
          </NavLink>
          <NavLink to="/test2">
            <IconFunctionComp
              size="48"
              color="#9D6B53"
              text="Test2"
              icon={DiAndroid}
            />
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/singin"> Sing In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavigationBar;
