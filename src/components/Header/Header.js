import React from "react";
import { MainContainer, Buttons, ButtonOne, ButtonTwo } from "./styled";
import { useNavigate } from 'react-router-dom';
import { goHome } from '../../routes/Coordinator'


export const Header = (props) => {
   const navigate = useNavigate()

   return (
      < MainContainer>

         <h1 onClick={() => goHome(navigate)}> Labe<span>X</span></h1>
         <Buttons>
            <ButtonOne onClick={() => props.first.function(navigate)}>{props.first.text}</ButtonOne>
            <ButtonTwo onClick={() => props.second.function(navigate)}>{props.second.text}</ButtonTwo>
         </Buttons>
      </ MainContainer>
   );
};