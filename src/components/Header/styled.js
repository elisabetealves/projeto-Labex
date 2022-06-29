import styled from "styled-components";

export const MainContainer = styled.div`
   display: flex;
   justify-content: space-between;
   background-color:	#341933;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 60px;
   z-index: 100;
 

  h1{
    font-size: 35px;
    margin: 12px 25px;
    font-weight: bold;
    color: white;
    margin-top: 10px;
    cursor: pointer;
    text-shadow: 0.1em 0.1em 0.15em #939;

    @media(max-width:768px){
    
    }

    @media(max-width:480px){
      margin: 12px;
    }
  
  }

  span{
    color:#C71585;
  }
`

export const Buttons = styled.div`
  margin: 50px;

  @media(max-width:768px){
    
  }

  @media(max-width:480px){
    margin: 77px;
  }
 
`

export const ButtonOne = styled.button`
  margin: 10px 15px ;
  padding: 8px;
  border-radius: 8px;
  background-color: #C71585;
  color:black;
  font-weight: 800;
  font-size: 16px;
  border: none;
  text-shadow: 0.1em 0.1em 0.15em white;
   
  :hover{
    cursor: pointer;
    background-color: #e2eefa;
    color:#C71585;
  }

  @media(max-width:768px){
    
  }

  @media(max-width:480px){
    position: relative;
    top: 2px;
    margin: 0;
    right: 5px;
  }
`
export const ButtonTwo = styled.button`
  //margin: 10px 15px ;
  padding: 8px;
  border-radius: 8px;
  background-color: #C71585;
  color:black;
  font-weight: 800;
  font-size: 16px;
  border: none;
  text-shadow: 0.1em 0.1em 0.15em white; 
   
  :hover{
    cursor: pointer;
    background-color: #e2eefa;
    color:#C71585;
  }

  @media(max-width:768px){
    
  }

  @media(max-width:480px){
    position: relative;
    top: 2px;
    margin-right: -60px;
  }
`