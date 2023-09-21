import styled from "styled-components";

export const WrapperHome=styled.div.attrs({className:"divhome"})`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: white;
  flex-direction: row;
  .imgg{
    width: 50px;
    height: 50px;
  }
    .aside{
      width: 8%;
      height: 100vh;
      background-color: rgba(0,0,0,90%);
      display: flex;
      flex-direction: column;
    }
  .divwk{
    padding-top: 20px;
  }
  
  .main{
    background-color: wheat;
    width: 100%;
    height: 100vh;
  }
  

`