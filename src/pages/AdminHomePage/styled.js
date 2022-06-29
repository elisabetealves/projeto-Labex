import styled from "styled-components";

export const MainCoainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 30px ;
  min-height: 350px;
  min-width: 450px;
  border-radius:10px;
  box-shadow: 0.15em 0.15em 0.15em 0.15em white;

  @media(max-width:768px){
      
  }

  @media(max-width:480px){
    box-shadow: none;

  }


  h2{
    font-size: 35px;
    margin: 20px;
    text-shadow: 0.1em 0.1em 0.15em black;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
     margin-left: 5px;
  
    }

  }

  svg{
      width: 3rem;
      height: 3rem;
      margin-top: -120px;
      color: #C71585;
      animation: teste 2s ease-in-out normal;
      margin-left: 10px;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      color: white;
  
    }
   }
`

export const Trips = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  height: 40px;
  background-color: #c2c1c1;
  border-radius: 8px;
  margin: 10px 0;
  border: none;
  color: black;
  font-weight: 600;
  text-shadow: 0.1em 0.1em 0.15em white;


  :hover{
    cursor: pointer;
    background-color: #C71585;
  }
  div {
    margin: 0 10px;
  }
  button{
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    border: none;
    background-color: #c2c1c1;
    cursor: pointer;
  

    svg{
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 2.5px;
    color: #341933;
    margin-left: -1px;
  }
  }
`;