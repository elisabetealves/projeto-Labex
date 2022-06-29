import styled from "styled-components"

export const Lista = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
  width: 98vw;
  font-weight: bold;
  justify-content: space-around;


  @media(max-width:768px){
      
  }

  @media(max-width:480px){
    position: relative;
    top: -280px;
    margin: 50px;
    width: 9vw;
    height: 9vw;
  }
  
  div{
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 350px;
    height: 350px;
    border-radius: 15px;

    @media(max-width:480px){
      margin: 2px;
    }
    
  }

  svg{
    width: 2rem;
    height: 2rem;
    color: black; 
   }

  
  .DivCard{
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: #c2c1c1;
    
  }
  
  button{
    margin-top: 220px;
    padding: 5px 20px;
    border-radius: 8px;
    width: 150px;
    padding: 8px;
    background-color:#C71585;
    color:black;
    font-weight: 800;
    font-size: 16px;
    border: none;
    text-shadow: 0.1em 0.1em 0.15em white;
    box-shadow: 0.1em 0.1em 0.15em black;
    margin-left: 70px;
    position: fixed;

    :hover{
      cursor: pointer;
     background-color: #e2eefa;
     color:#C71585;
     border: none;
    }

    @media(max-width:480px){
      margin-left: 60px;
    }
  }
`

export const Div = styled.div`
  position: relative;
  margin: 2px 5px;
  top: -30px;

  .top-top{
     position: relative;
    top: 5px;
    margin: 10px;
    text-align: left;
  }

  .top{
    position: relative;
    top: -5px;
    margin: 10px;
    text-align: left;
  }

  .top1{
    position: relative;
    top: -12px; 
    margin: 10px;
    text-align: left;
  }

  .top2{
    position: relative;
    top: -20px; 
    margin: 10px;
    text-align: left;
  }

 `

export const CardName = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #C71585;
  text-shadow: 0.1em 0.1em 0.15em #939;
`

