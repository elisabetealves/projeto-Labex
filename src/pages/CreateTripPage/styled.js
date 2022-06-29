import styled from "styled-components";

export const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: white;
  font-weight: bold;

  h2 {
    font-size: 35px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-top: 15px;
    text-shadow: 0.1em 0.1em 0.15em black;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      font-size: 30px;
      margin-left: -5px;
      //text-shadow: 0.1em 0.1em 0.15em #939;
      margin-bottom: 1.5rem;

    }
  }


  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    min-width: 450px;
    border-radius: 10px;
    box-shadow: 0.15em 0.15em 0.15em 0.15em white;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      box-shadow: none;
    }


    svg{
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -50px;
    color: #C71585;
    animation: teste 2s ease-in-out normal;
    margin-left: 10px;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      color: white;
    }

    }
  }
  input,
  select {
    margin: 6px;
    padding: 5px 10px;
    min-width: 300px;
    border-radius: 8px;
    border: none;
    height: 25px;
    box-shadow: 0.1em 0.1em 0.15em #939;


  }
  select{
    min-width: 325px;
    min-height: 35px;
    text-shadow: 0.1em 0.1em 0.15em #939;
  }

  input::placeholder {
    color: black;
    text-shadow: 0.1em 0.1em 0.15em #939;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 300px;
  margin-top: 20px;
  min-height: 40px;
    button {
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

      :hover {
        cursor: pointer;
        background-color: #e2eefa;
        color:#FF1493;
      }

      @media(max-width:768px){
      
      }
    
      @media(max-width:480px){
        margin-top: 20px;
      }
      
    }
`