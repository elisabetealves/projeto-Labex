import styled from 'styled-components';

export const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  color: white;
  font-weight: bold;
  min-height: 300px;
  min-width: 450px;
  border-radius: 10px;
  box-shadow: 0.15em 0.15em 0.15em 0.15em white;

  @media(max-width:768px){
      
  }

  @media(max-width:480px){
    box-shadow: none;
  }

  h1{
    font-size: 32px;
    margin: 12px 25px;
    font-weight: bold;
    color: white;
    margin-top: 10px;
    text-shadow: 0.1em 0.1em 0.15em white;

    span{
    color: #FF1493;
    }

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      font-size: 45px;
  
    }

  }

  h2{
    font-size: 38px;
    margin: 12px 25px;
    font-weight: bold;
    color: white;
    margin-top: -1px;
    margin-bottom: 10px;
    text-shadow: 0.1em 0.1em 0.15em black;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
     font-size: 35px;
  
    }

  }

  input{
    margin: 10px;
    padding: 5px 10px;
    min-width: 300px;
    border-radius: 8px;
    box-shadow: 1px 1px 3px 2px #939;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      height: 1.8rem;
    }
  }

  input::placeholder {
    color: black;
    text-shadow: 0.1em 0.1em 0.15em #939;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      font-size: 16px;
    }
  }

  svg{
    width: 2.5rem;
    height: 2.5rem;
    color: #C71585;
    animation: teste 2s ease-in-out normal;
    margin-left: 10px;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      color: white;
      width: 3rem;
      height: 3rem;
    }

  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 300px;
  margin-top: 15px;
  min-height: 40px;
  button{
   padding: 5px 20px;
   border-radius: 8px;
   background-color: #C71585;
   border: none;
   color:black;
   font-weight: 800;
   font-size: 15px;
   border-color:#FF1493;
   box-shadow: 1px 1px 3px 2px gray;
   text-shadow: 0.1em 0.1em 0.15em white;

   
   :hover{
     cursor: pointer;
     background-color: #e2eefa;
     color:#FF1493;
   }
   
  }
  
`