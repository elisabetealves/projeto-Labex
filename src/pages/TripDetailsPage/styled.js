import styled from "styled-components";

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98vw;
  font-weight: bold;
  color: white;
  margin-top: 70px;
  list-style: none;
`;

export const CanditadosDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  @media(max-width:768px){
    
  }

  @media(max-width:480px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-top: 15px;
    text-shadow: 0.1em 0.1em 0.15em black;
    text-align: center;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      position: relative;
      top: -30px;
      font-size: 26px;
    }
  }

  h3 {
    font-size: 28px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-top: 15px;
    text-shadow: 0.1em 0.1em 0.15em black;
    text-align: center;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      position: relative;
      top: -20px;
      font-size: 25px;
    }
  }

  p {
    font-size: 18px;
    text-shadow: 0.1em 0.1em 0.15em black;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      position: relative;
      top: -30px;
      font-size: 20px;
    }
  }

  div {
    
    min-width: 200px;
    margin: 0 30px;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    text-shadow: 0.1em 0.1em 0.15em black;
    font-size: 18px;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      position: relative;
      top: -30px;
      font-size: 25px;
    }
  }
`;

export const CardViagem = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  margin-top: -120px;
  min-height: 80px;
  min-width: 1000px;
  border-radius: 10px;
  box-shadow: 0.15em 0.15em 0.15em 0.15em white;

  @media(max-width:768px){
    
  }

  @media(max-width:480px){
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 35px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-top: 15px;
    text-shadow: 0.1em 0.1em 0.15em black;
    text-align: center;

    @media(max-width:768px){
      
    }

    @media(max-width:480px){
      position: relative;
      top: 30px;
    }
    
  }

  p {
    margin-left: 50px;
    text-shadow: 0.1em 0.1em 0.15em black;;
    padding: -20px;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
     margin-right: 50px;
     position: relative;
     top: 25px;
     font-size: 21px;
    }
  }

  .top{
    margin-top: 10px;
  }

  .top1{
    margin-top: -10px;
  }

  .top2{
    margin-top: -10px;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      padding-left: 290px;
      padding-right: 300px;
      text-align: center;
    }
  }

  .top3{
    margin-top: -10px;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      font-size: 19px;
    }
  }
  .top4{
    margin-top: -10px;

    @media(max-width:768px){
      
    }
  
    @media(max-width:480px){
      font-size: 19px;
    }
  }
`;

export const ButtonCandidato = styled.button`
  padding: 5px 10px;
  border-radius: 8px;
  margin: 10px 15px;
  margin-top: 25px;
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
    padding: 5px 6px;
  }
`;