import React from "react"
import { ContainerError } from "./styled"

import { Header } from '../../components/Header/Header'
import { goToListTrip, goHome } from "../../routes/Coordinator";

const ErrorPage = () => {
   return (

      <ContainerError>
         <Header
            first={{ function: goToListTrip, text: "Viagens" }}
            second={{ function: goHome, text: "Home" }}
         />
         {/* <ErrorImg src={ErrorImage} /> */}
      </ContainerError>


   )
};

export default ErrorPage;
