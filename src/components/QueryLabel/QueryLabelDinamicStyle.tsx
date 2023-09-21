import React from "react";
import styled from "styled-components";

interface WrapperProps {
    text: number;
    tag:string
}

export const WrapperDinamicQuery = styled.div<WrapperProps>`


  margin:20px auto;
  height: 62px;
  width: 62px;
  position: relative;

  .icon {
    height: 60px;
    width: 60px;
    
  }

  .caption {
    background-color: rgba(120,120,120,80%);
    content-visibility: revert;
    position: absolute;
    top:5px;
    font-size: 15px;
    right: -190px;
    z-index: 100;
    width: 200px;
    height: max-content;
  } 
  .notice{

    width: 30px;
    height: 30px;
    padding:0px;
    border: 1px solid white;
    border-radius: 15px;
    position: absolute;
    top:-7px;
    right: -7px;
    background-color:
            ${(props) => {

              if(props.text>0&&props.tag==="Query"){
                return "red"
              }
                return  "#568c60"
            }};    
  }
  font-size:
          ${(props) => {

            if(props.text>999){
              return ".5em"
            }
            return  ".7em"
          }};
}
  .pind{
    margin-top: 30%;
    line-height: 10px;
    text-align: center;
  }
                  

`