import '../../App.css';
import styled from "styled-components";


export const WrapperNewHome=styled.div`

  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  background: #ECF0F1;
  display: grid;
  grid-template-columns: minmax(220px, 1fr) 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr max-content;

  gap: 3px;
  //flex-direction: row;

  .aside {
    width: 230px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    grid-column: 1/2;
    grid-row: 1 / 4;


  }


  //// -----------------------------------
  //
  //.p-contextmenu .p-menuitem {
  //  background-color: white;
  //
  //}
  //
  //.icomen{
  //  margin-right: 20px;
  //}
  ///* Change the font color of the menu items */
  //.p-contextmenu .p-menuitem-text {
  //  color: darkred !important;
  //}
  //
  ///* Change the background color of the menu items on hover */
  //.p-contextmenu .p-menuitem:hover {
  //  color:yellow !important;
  //
  //}
  //
  //
  //
  ///* Change the font color of the menu items on hover */
  //.p-contextmenu .p-menuitem:hover .p-menuitem-text {
  //  color: #fff;
  //}
  //
  //.p-menuitem-active .p-menuitem-link{
  //  background-color: #6869F5 !important;
  //  color: whitesmoke !important;
  //}
  //.p-menuitem-active .p-menuitem-link .p-menuitem-text{
  //  color: whitesmoke !important;
  //}
  //.badge.bg-primary.rounded-pill{
  //  background: #DE4A37 !important;
  //  /*position: absolute;*/
  //  /*top: 3px;*/
  //  /*right:2px;*/
  //}
  //
  //.nav-item .dropdown{
  //  z-index:-1 !important;
  //}
  //
  //div.dropdown-menu.show{
  //  width:230px !important;
  //}
  //
  //.dbackk button.btn.btn-danger{
  //  margin-top: 30px !important;
  //}
  //
  //.cmddiv.badge.bg-primary.rounded-pill{
  //  background-color: darkgrey !important;
  //}
  //
  //
  //ul.pagination{
  //  /*width:700px !important;*/
  //  /*margin: auto !important;*/
  //  margin:auto !important;
  //}
  //
  //.page-item.active a.page-link.selp {
  //  color: white !important;
  //  background-color: #DE4A37 !important;
  //
  //}
  //
  //.page-item:not(first-child) .page-link{
  //  background: #97A5A6 !important;
  //
  //}
  //
  //.page-item:last-child .page-link,.page-item:first-child .page-link {
  //  background:gray !important;
  //}
  //
  //.btn.btn-outline-light{
  //  margin-right: 10px !important;
  //}
  //
  //
  ////----------------------------------------
  .divbtns {
    margin-left: auto;
  }

  .commands {
    height: 100%;
  }

  .dvgrid {
    width: 100%;
    height: 100%;
    overflow-y: auto;

  }

  .divpag {
    width: 100%;
    display: flex;
    align-items: center;
    //  width:100%x;
    //  margin:auto;
    //}
    //ul.pagination{
    //  margin: auto !important;
  }

  .footeras {
    background: #97A5A6;
    height: 50px;
    width: 100vw;
    text-align: left;
    grid-row: 4/-1;
    grid-column: 1/-1;

  }

  .footeras p {
    margin: 7px 5px;
    color: white;
    font-size: .8em;
  }

  .main {
    padding: 10px;
    width: 100%;
    height: 100%;
    grid-column: 2/-1;
    grid-row: 1/4;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr 45px;
  }

  .serv {
    margin: 5px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 14px;
    grid-row: 1/1;

  }

  .divutil {
    background: wheat;
    color: darkred;
    height: 55px;
    display: flex;
    align-items: center;
    justify-items: flex-end;

  }

  .btn.btn-info {
    margin: 0px 10px 0px auto !important;
  }

  .divutil p {
    line-height: 20px;
    margin: auto 5px;
  }

  .divsearch {
    border: none;
    height: 35px;
    border-radius: 5px;
    margin-left: 5px;
    width: 30%;
  }


  .divtop {
    position: sticky;
    background-color: #97A5A6;
    color: #2E3E51;
    top: 0px;

    height: 40px;
    font-size: .7em;
    padding: 8px 0px;
    display: grid;
    grid-template-columns: 80px 150px minmax(400px, 1fr) 150px 150px 145px;
    grid-row-gap: 6px;
    grid-column-gap: 6px;
    z-index: 1000;
  }

  .divcontainer {
    grid-row: 2/4;
    width: 100%;
    height: 100%;

    overflow-y: auto;
    overflow-x: auto;
  }

  //.divgrd:nth-child(even){
  //  background-color: #0e715e;
  //}
  //
  //.divgrd:nth-child(odd){
  //  background-color: gold;
  //}

  .divgrd, .divuti, .divtop {
    width: 100%;
  }

  .nav {
    height: 100% !important;
    display: flex;
    flex-direction: column;

  }

  .qsrv {
    z-index: 1;
  }

  .nav-item {
    width: 100% !important;

    margin: 2px auto;
  }

  .nav {
    background-color: #5d6166 !important;
    width: 100% !important;
  }

  #topmenu {
    background-color: #2E3E51 !important;

  }

  .alert.alert-dismissible.alert-danger {
    --bs-alert-bg:  #DE4A37 !important;

  }

  .divc {
    background-color: transparent;
    width: 300px;
    height: 40vh;
    //border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    margin: auto;
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
    z-index: 100;
  }

  .dfront, .dback {
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
    z-index: 100;
  }

  //lq;ll;;;;;;;;;;;;;;;

  .divcc {
    background-color: transparent;
    width: 100%;
    height: 50px;
    //border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    margin: auto;
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

  .dfrontt, .dbackk {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    z-index: initial !important;
  }

  .dbackk {
    background-color: #2E3E51;
    color: white;
    height: 155px;
    transform: rotateY(180deg);

  }

  .dbackk button.btn.btn-danger {
    margin-top: 20% !important;
  }

  //fsfsdf
  .divcq {
    background-color: transparent;
    width: 300px;
    height: 20vh;
    //border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    margin-top: 5px;
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

  //.card-header {
  //  border-bottom: 1px solid #404040;
  //  color: white !important;
  //  height: 25% !important;
  //  margin-bottom: 0px !important;
  //}

  .card-body p {
    margin-top: 5px;
    line-height: 20px;
  }

  .dfrontq p {
    color:
  }

  .card-text {
    margin-top: 2px;
  }

  .dfrontq, .dbackq {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    border-radius: 5px;
    color: white;
    font-size: .8em;
  }


  .dfrontq p {
    margin-top: 5px;
    color: #2E3E51;

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

  .dfrontql {
    background: #287864;
    color: white;
  }

  .dfrontqr {
    background: #2E3E51;
    color: white;
  }


  .dfrontq .card-header {
    border-bottom: 1px solid #2E3E51 !important;
    color: #2E3E51 !important;
    height: 25% !important;
    margin-bottom: 0px !important;
    //  background: black;
    //  
  }

  .dfrontql .card-header, .dfrontqr .card-header {
    border-bottom: 1px solid white !important;
    color: white !important;
    height: 25% !important;
    margin-bottom: 0px !important;
    //  background: black;
    //  
  }

  .dfrontql, .dfrontqr {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    border-radius: 5px;
    color: white;
    font-size: .8em;
  }


  //.dfrontqr .card-header{
  //  border-bottom: 1px solid white !important; 
  //}

  .dbackqLogin {
    position: relative;
    //top: 100px;
    //left: 30px;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    border-radius: 5px;
    color: white;
    font-size: .8em;
    z-index: 1000 !important;
  }

  .dbackqLogin {
    background-color: #4899DD;
    color: white;
    transform: rotateY(180deg);
  }

  div.dropdown-menu .show {
    width: 250px !important;
  }

  .cmddiv span.badge.bg-primary.rounded-pill {
    background-color: darkgrey !important;
  }

  .imgspin {
    margin-top: 100px;
    width: 50px;
    height: 50px;

  }

  .pagination.page-item.active a.page-link.selp {
    color: white;
    background-color: red !important;

  }

  /* Ascunde initial al doilea div */

  .firstDiv {
    border: 1px solid red;
    background-color: dimgray;
    transition: transform 0.8s;

  }

  .secondDiv {
    display: none;

  }

  .authusr {
    margin-top: auto;
  }

  /* Afiseaza al doilea div la hover pe primul div */
  //.firstDiv:hover + .secondDiv {
  //  display: block;
  //}
  //.firstDiv:hover {
  //  
  //  display: none;
  //}
  //.secondDiv{
  //  border: 1px solid blue;
  //}


  .btn-success {
    margin: 50px auto;
  }


  .authusr {
    background: #2E3E51;
  }

  li.nav-item.authusr p {
    font-size: .7em;
    font-weight: normal;
    line-height: 20px;
    padding: 0px;
    margin: 0px auto;
    color: white !important;
  }


`


export default WrapperNewHome;
