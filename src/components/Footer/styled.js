import styled from "styled-components";

export const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 60px;
   width: 100%;
   background-color: #341933;
   color: white;
   font-size: 17px;
   font-weight: bold;
   padding: 0 20px;
   position: fixed;
   bottom: 0;
   z-index: 100;
   text-shadow: 0.1em 0.1em 0.15em #939;

   
   @media(max-width:768px){
      
   }

   @media(max-width:480px){
     font-size: 15px;
   }


   span{
      color: #C71585;
   }


`

export const Titulo = styled.div`
  margin-top: 10px;

  
  @media(max-width:768px){
     
  }

  @media(max-width:480px){
    margin-top: 12px;
  }
`

export const RedeSocial = styled.div`
    svg{
    width: 1.5rem;
    height: 1.5rem;
    margin: 5px 8px;
    color: #C71585;
    border-radius: 20px;

    @media(max-width:768px){
     
    }
  
    @media(max-width:480px){
      margin-top: 5px;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`