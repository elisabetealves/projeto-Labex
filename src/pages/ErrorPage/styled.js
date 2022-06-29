import styled from "styled-components"
import ErrorImage from "../../assets/error.jpg"
import ErrorMobile from "../../assets/errorMobile1.png"

export const ContainerError = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
   margin: 0;
   //opacity: 0.9;
   box-sizing: border-box;
   background-image: url(${ErrorImage});
   background-size: cover;
   background-position: unset;
 
   background-blend-mode: color-burn;
   overflow: hidden;
   color: #cccccc;


 @media(max-width:768px){
      
   }

   @media(max-width:480px){
      background-image: url(${ErrorMobile}); 
      padding-bottom: 100px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

   }
`

export const ErrorImg = styled.img`
 width: 100vw;
 height: 100vh;
 `
