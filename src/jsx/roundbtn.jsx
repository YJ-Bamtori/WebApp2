    import styled from 'styled-components'
    import { useState } from 'react'
    import '../App.css'

    const BtnContainer = styled.div`
      display: inline-flex;
      width: fit-content;
      height : 32px;
      border-radius:  80px;
      background-color: ${props => props.btnbackground};
      color: ${props => props.btncolor};
      align-items: center;
      justify-content: center;
      font-size: 16px;
      padding: 12px 12px;
      font-weight: 600;
      line-height: 24px;
      border : 1px solid ${props => props.btnborder};
      box-sizing: border-box;
      gap : 4px;
      transition: all 0.2s ease-in-out;
      pointer-events: ${props => props.clickable};
      cursor: pointer;


      &:hover{
        background-color :${props => props.hoverback};
        color: ${props => props.hovercolor};
        border : 1px solid ${props => props.hoverborder};
        }
      &:active{
        background-color :${props => props.activeback};
        color: ${props => props.activecolor};
        border : 1px solid ${props => props.activeborder};
        transition: none;

        }
        
    `


    function RoundBtn(props) {
      const btntext = props.btntext || '업로드';
      const state = props.state || 'default';
      const imgsrc = props.imgsrc || 'none';  // imgsrc를 props로 받아옴

      let clickable, btnbackground, btncolor, btnborder, hoverback, hovercolor, hoverborder, activeback, activecolor, activeborder; 

    
      if (state === 'default') {
        hoverback = '#D1FC36';
        hovercolor = '#1A1A1B';
        hoverborder = '#D1FC36';
        btnbackground = '#1A1A1B';
        btncolor =  '#FFFFFF';
        btnborder =  '#1A1A1B';
        activeback = '#9FC31D';
        activecolor = '#1A1A1B'
        activeborder = '#9FC31D'
        clickable = 'auto'

      } else if (state === 'edge') {
        hoverback = 'none';
        hovercolor = '#1A1A1B';
        hoverborder = '#1A1A1B';
        btnbackground = 'none';
        btncolor = props.btncolor || '#1A1A1B';
        btnborder = props.btnborder || 'rgba(26, 26, 27, 0.2)';
        activeback = '#ECEEF0';
        activecolor = '#1A1A1B'
        clickable = 'auto'

      } else if (state === 'disabled') {
        hoverback = '#ECEEF0';
        hovercolor = '#CFD3DA';
        hoverborder = '#ECEEF0';
        btnbackground = '#ECEEF0';
        btncolor = props.btncolor || '#CFD3DA';
        btnborder = props.btnborder || '#ECEEF0';
        activeback = '#ECEEF0';
        activecolor = '#CFD3DA'
        activeborder = '#ECEEF0'
        clickable = 'none'

      } else {
        console.log('rectbtn state 잘못입력함')
        return null;
      }

      return (
        <BtnContainer
          btnbackground={btnbackground}
          btncolor={btncolor}
          btnborder={btnborder}
          hoverback={hoverback}
          hoverborder={hoverborder}
          hovercolor={hovercolor}
          activeback={activeback}
          activeborder={activeborder}
          activecolor={activecolor}
          clickable = {clickable}
          onClick = {props.onClick}
        >
          {btntext} 
          {imgsrc !== 'none' && <img src={imgsrc}/>}

        </BtnContainer>
      );
    }

    export default RoundBtn;