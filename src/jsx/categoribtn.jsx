import styled from 'styled-components'
import { useState } from 'react'
import '../App.css'

const BtnContainer = styled.div`
  display: inline-flex;
  width: ${props => props.size};
  height : auto;
  border-radius:  80px;
  background-color: ${props => props.btnbackground};
  color: ${props => props.btncolor};
  align-items: center;
  justify-content: left;
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding};
  font-weight: 600;
  line-height: 24px;
  transition: all 0.3s ease-in-out;
  border : 1px solid ${props => props.btnborder};
  box-sizing: border-box;
  cursor: pointer;

  
  &:hover{
    background-color :${props => props.hoverback};
    color: ${props => props.hovercolor};
    border : 1px solid ${props => props.hoverborder};
    }
    
`


      function CategoriBtn(props) {
        const btntext = props.btntext || '업로드';
        const state = props.state || 'default';
        const size = props.size === 'sm' ? 'fit-content' : '100%'
        const fontSize = props.fontSize === 'sm' ? '14px' : '16px'
        const padding = props.padding === 'sm' ? '0px 12px' : '4px 12px;'

        let btnbackground, btncolor, btnborder, hoverback, hovercolor, hoverborder

        
  
        if (state === 'default') {
          hoverback = '#FFFFFF';
          hovercolor = '#1A1A1B';
          hoverborder = '#1A1A1B';
          btnbackground = '#FFFFFF';
          btncolor = size === 'fit-content' ? '#BBBBBB' : '#1A1A1B';
          btnborder = size === 'fit-content' ? '#BBBBBB' : '#FFFFFF';
        } else if (state === 'edge') {
          hoverback = '#1A1A1B';
          hovercolor = '#FFFFFF';
          hoverborder = '#1A1A1B';
          btnbackground = '#FFFFFF';
          btncolor = '#BBBBBB' ;
          btnborder =  '#ffffff'; 
        } else if (state === 'selected') {
          hoverback = '#1A1A1B';
          hovercolor = '#FFFFFF';
          hoverborder = '#1A1A1B';
          btnbackground = '#1A1A1B';
          btncolor = props.btncolor || '#FFFFFF';
          btnborder = props.btnborder || '#1A1A1B';
        } else {
          console.log('roundbtn state 잘못입력함')
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
            size={size}
            fontSize={fontSize}
            onClick={props.onClick}
            padding={padding}
            >
            {btntext} 
          </BtnContainer>
        );
      }

      export default CategoriBtn;