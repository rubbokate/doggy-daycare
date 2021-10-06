import styled from "styled-components";

import React from "react";

// Glow Script

export const H1 = styled("h1")`
h1
{
  font-size: 48px;
  text-shadow: -1px -1px #f00, 1px 1px #a00, -3px 0 4px #000;
  font-family:"Segoe print", Arial, Helvetica, sans-serif;
  color: #dd0000;
  padding:64px 0 0 0;
  margin:16px auto;
  font-weight:lighter;
  -moz-box-shadow:none;  
  -webkit-box-shadow: none;  
  box-shadow:none;  
  text-align:center;
  display:block;
  min-height:172px;
  min-width:800;
  max-height:172px;
  max-width:800px;  
  ${'' /* background-image:url(images/background-h1-tesla.jpg); */}
}

`



export const ScribbleText = styled("h1")`
.scribble-text-fx--v1 {
  .scribble-text-fx__decoration {
    width: calc(100% + 24px); 
    height: calc(100% + 12px);
  
    > * {
      stroke-width: 2px; 
    }
  }
}
`;


export const CrazyStyles = styled("div")`

    body {
        padding: 0;
        margin: 0; 
        height: 100vh;
        background: #18191f;
        font-family: 'Poppins', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        
      }
      
      div {
          
        position: relative;
        display: flex;
        
      }
      
      p {
          background-color: midnightblue;
        list-style: none;
        border-radius: 30%;
        
      }
      
      label {
        position: relative;
        
      }
      
      input[type="checkbox"] {
          
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 80px;
        width: 80px;
        z-index: 100;

      }
      
      div {
          
        position: relative;
        height: 80px;
        width: 80px;
        background: white;
        color: #555;
        display: flex;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 46px;
        cursor: pointer;
        margin: 0 4px;
        border-radius: 20px;
        box-shadow: -1px -1px 4px rgba(255, 255, 255, 0.05),
          4px 4px 6px rgba(0, 0, 0, 0.2),
          inset -1px -1px 4px rgba(255, 255, 255, 0.05),
          inset 1px 1px 1px rgba(0, 0, 0, 0.1);
          
      }
      
       div:before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 75px;
        height: 38px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background: rgba(255, 255, 255, 0.05);
      } 

      input[type="checkbox"] ~ div {

        box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.05),
          inset 4px 4px 6px rgba(0, 0, 0, 0.2);
        color: yellow;
        text-shadow: 0 0 15px yellow, 0 0 25px yellow;
        animation: glow 5s linear infinite;

      }
      
      input[type="checkbox"]:checked ~ div {
      
        box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.05),
          inset 4px 4px 6px rgba(0, 0, 0, 0.2);
        color: yellow;
        text-shadow: 0 0 15px yellow, 0 0 25px yellow;
        animation: glow 5s linear infinite;

      }
      
      @keyframes glow {
        0% {
          filter: hue-rotate(0deg);
        }
        100% {
          filter: hue-rotate(360deg);
        }
      }


}
`

export function GlowStyle() {

  return (
    <CrazyStyles >
  <div>
    <input type="checkbox" />
    <div>H</div>
  </div>
    <div>
    <input type="checkbox" />
    <div>A</div>
  </div>
  <div>
    <input type="checkbox" />
    <div>P</div>
  </div>
  <div>
    <input type="checkbox" />
    <div>P</div>
  </div>
  <div>
    <input type="checkbox" />
    <div>Y</div>
  </div>
  <div>
    <input type="checkbox"  />
    <div>P</div>
  </div>
  <div>
    <input type="checkbox" />
    <div>A</div>
  </div>
  <div>
    <input type="checkbox"  />
    <div>W</div>
  </div>
  <div>
    <input type="checkbox"  />
    <div>S</div>
  </div>
  

</CrazyStyles>
  )

}