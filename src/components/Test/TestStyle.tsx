import styled from "styled-components";


export const WrapperTest=styled.div`

  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  background: #ECF0F1;
  display: grid;
  grid-template-columns: minmax(220px ,1fr) 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr max-content;
  
  gap: 3px;
  //flex-direction: row;
  
  .aside{
    width: 230px;
    height:100%;
    display: flex;
    flex-direction: column;
    align-content:space-between;
    grid-column: 1/2;
    grid-row: 1 / 4;


  }
  
  
  .commands{
    height:100%;
  }
  
  .footeras{
    background: #97A5A6;
    height:50px;
    width: 100vw;
    text-align: left;
    grid-row:4/-1;
    grid-column:1/4;
  }
  .main{
    padding: 10px;
    width:80vw;
    height:100%;
    grid-column:2/-1;
    grid-row:1/4;
  }
  .serv{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 5px;

  }
  .nav{
    height:100% !important;
    display:flex;
    flex-direction:column;
    
  }
  .qsrv{
    z-index:1;
  }
  .nav-item{
    width:100% !important;
    
    margin:2px auto;
  }
  .nav{
    background-color: #5d6166 !important;
    width:100% !important;
  }
  //1
  //.flip-box {
  //  background-color: transparent;
  //  width: 300px;
  //  height: 200px;
  //  //border: 1px solid #f1f1f1;
  //  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  //}
  //
  ///* This container is needed to position the front and back side */
  ////2
  //.flip-box-inner {
  //  position: relative;
  //  width: 100%;
  //  height: 100%;
  //  text-align: center;
  //  transition: transform 0.8s;
  //  transform-style: preserve-3d;
  //}
  //
  ///* Do an horizontal flip when you move the mouse over the flip box container */
  ////3
  //.flip-box:hover .flip-box-inner {
  //  transform: rotateY(180deg);
  //}
  //
  ///* Position the front and back side */
  //.flip-box-front, .flip-box-back {
  //  position: absolute;
  //  width: 100%;
  //  height: 100%;
  //  -webkit-backface-visibility: hidden; /* Safari */
  //  backface-visibility: hidden;
  //}
  //
  ///* Style the front side (fallback if image is missing) */
  //.flip-box-front {
  //  background-color: #bbb;
  //  color: black;
  //}
  //
  ///* Style the back side */
  //.flip-box-back {
  //  background-color: dodgerblue;
  //  color: white;
  //  transform: rotateY(180deg);
  //}

  //--------------------
  
  .divc {
    background-color: transparent;
    width: 300px;
    height: 40vh;
    //border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    margin:auto;
  }


  .divf {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }


  .divc:hover .divf {
    transform: rotateY(180deg);
    z-index:100;
  }

  .dfront , .dback{
    //position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }





  .dfront {
      background: #287864;
      color: black;
      //position:relative;
  }

  .dback {
    background-color: dodgerblue;
    color: white;
    
    transform: rotateY(180deg);
    z-index:100;
  }

  //lq;ll;;;;;;;;;;;;;;;

  .divcc {
    background-color: transparent;
    width: 100%;
    height: 50px;
    //border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    margin:auto;
  }


  .divff {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }


  .divcc:hover .divff {
    
    transform: rotateY(180deg);
    
  }

  .dfrontt , .dbackk{
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    z-index:initial !important;
  }

  .dbackk {
    background-color: #2E3E51;
    color: white;
    height:155px;
    transform: rotateY(180deg);
    
  }

  .dbackk button.btn.btn-danger{
    margin-top: 20% !important;
  }
  
//fsfsdf
  .divcq {
    background-color: transparent;
    width: 300px;
    height: 30vh;
    //border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    margin:auto;
  }


  .divfq {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }


  .divcq:hover .divfq {
    transform: rotateY(180deg);
  }

  .card-header{
    border-bottom: 1px solid #404040 ;
    color:white !important;
    height:20% !important;
  }
  .dfrontq , .dbackq{
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    border-radius: 5px;
    color:white;
    font-size: .8em;
  }

.dfrontq p{
  margin-top:10px;
  color: white;
  
}



  .dfrontq {
    background: #97A5A6;
    color: black;
  }

  .dbackq {
    background-color: #4899DD;
    color: white;
    transform: rotateY(180deg);
  }


  div.dropdown-menu .show{
    width:250px !important;
  }

  .cmddiv span.badge.bg-primary.rounded-pill{
    background-color: darkgrey !important;
  } 
  
  
  
  
  
  
  
`


export default WrapperTest;