import styled from "styled-components";

export const WrapperRegister=styled.div`
  width:100%;
  height: 100%;
  margin:0px;
  padding: 0px;

  
 
.myalert{
 
  position:absolute;
  top: 50px;
  z-index: 2001;
}

.alert{
  position: absolute;
  z-index:2001 !important;
  width:90% !important;
  top: 30px;
  left: 5%;
  margin: 100px auto !important;
  
}
  .fade-in-out {
    opacity: 0;
    transition: opacity 1s ease-in-out; /* Tranzitie de 1 secundă */
  }

  .fade-in-out.visible {
    opacity: 1;
  }
  
  
  .divlogin{
    width: 100%;
    height:100%;
    position: relative;
  }

  form{
    margin: 0px auto;
    width: 40%;
    position: absolute;
    top: 10%;
    left:30%;
    z-index: 2000;
  }
  fieldset{
    width: 80%;
    margin: auto;
  }
  
 form .btn-primary,form .btn-info{
    width: 100px !important;
    margin: 20px 20px;
  }
  //fieldset{
  //  background: grey;
  //  padding:0px;
  //  border: 1px solid red;
  //  position: relative;
  //
  //
  //}

  legend {
    position: absolute;
    top: 70px;
    left: 18px;
    color:red;
  }
  
  form{
    background: grey;
    border: 1px solid green;
    
  }

  //.divlogin{
  //  background: grey;
  //  
  //}

  .form-group{
    background: grey;
  }
  
  





`