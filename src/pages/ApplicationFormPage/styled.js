import styled from 'styled-components';

export const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  color: white;
  font-weight: bold;
  border-radius: 15px;
  box-shadow: 0.15em 0.15em 0.15em 0.15em white;
  min-height: 480px;
  min-width: 500px;

  h1{
    margin-bottom: 40px;
    font-size: 40px;
    text-shadow: 0.1em 0.1em 0.15em black;
  }
  
  svg{
    color: #C71585;
  }

  h2{
    font-size: 28px;
    margin-bottom: 15px;
    margin-top: -15px;
    text-shadow: 0.1em 0.1em 0.15em #939;

    span{
    color:#C71585;
    text-shadow: 0.1em 0.1em 0.15em black;

  }
  }
  
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input, select{
    margin: 5px;
    padding: 5px 10px;
    min-width: 300px;
    border-radius: 8px;
    height: 20px;
    border: none;
    box-shadow: 0.1em 0.1em 0.15em #939;
  }

  input::placeholder {
    color: black;
    text-shadow: 0.1em 0.1em 0.15em #939;
  }


  select{
    min-width: 320px;
    min-height: 30px;
    text-shadow: 0.1em 0.1em 0.15em #939;
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 300px;
  margin-top: 25px;
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