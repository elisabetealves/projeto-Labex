import React from "react"
import { MainContainer, RedeSocial, Titulo } from "./styled"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs"

const Footer = () => {
   return (

      <MainContainer>
         <Titulo>Labe<span> X</span> - Todos os direitos reservados &#169; 2022 </Titulo>
         <RedeSocial > <BsFacebook /> <BsInstagram /> <BsTwitter /></RedeSocial >
      </MainContainer>

   );
};

export default Footer