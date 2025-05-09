// import styled from 'styled-components'
// import { useState } from 'react'
// import '../App.css'

// const BtnContainer = styled.div`
//   display: inline-flex;
//   width: ${props => props.btnwidth};
//   height : ${props => props.btnheight};
//   border-radius:  ${props => props.roundness};
//   background-color: ${props => props.btnbackground};
//   color: ${props => props.btncolor};
//   align-items: center;
//   justify-content: center;
//   font-size: 18px;
//   padding: ${props => props.btnpadding};
//   font-weight: 500;
//   line-height: 24px;
//   transition: all 0.3s ease-in-out;
//   border : 1px solid ${props => props.btnborder};
//   gap: 4px; 
//   box-sizing: border-box;


//   &:hover{
//     background-color :${props => props.hoverback};
//     color: ${props => props.hovercolor};
//     border : 1px solid ${props => props.hoverborder};
//     }
    
// `


// function Button(props) {
//   const btntext = props.btntext || '업로드';
//   const state = props.state || 'default';
//   const roundness = props.roundness === 'round' ? '80px' : '8px'; // default는 검정색 배경
//   const imgSrc = props.imgSrc || 'none';  // imgSrc를 props로 받아옴

//   // 공통: 높이
//   const btnheight = props.btnheight || '44px';

//   let btnwidth, btnbackground, btncolor, btnborder, disabled, btnpadding, hoverback, hovercolor, hoverborder;

//   if (state === 'default') {
//     hoverback = '#D1FC36';
//     hovercolor = '#1A1A1B';
//     hoverborder = '#D1FC36';
//     btnpadding = '8px 24px';
//     btnwidth = 'auto';
//     btnbackground = '#1A1A1B';
//     btncolor = props.btncolor || '#FFFFFF';
//     btnborder = props.btnborder || '#1A1A1B';
//     disabled = false;
//   } else if (state === 'none') {
//     hoverback = 'none';
//     hovercolor = '#1A1A1B';
//     hoverborder = '#1A1A1B';
//     btnpadding = '8px 24px';
//     btnwidth = 'auto';
//     btnbackground = 'none';
//     btncolor = props.btncolor || '#1A1A1B';
//     btnborder = props.btnborder || 'rgba(26, 26, 27, 0.2)';
//     disabled = false;
//   } else if (state === 'disabled') {
//     hoverback = '#ECEEF0';
//     hovercolor = '#CFD3DA';
//     hoverborder = '#ECEEF0';
//     btnpadding = '8px 24px';
//     btnwidth = 'auto';
//     btnbackground = '#ECEEF0';
//     btncolor = props.btncolor || '#CFD3DA';
//     btnborder = props.btnborder || '#ECEEF0';
//     disabled = true;
//   } else {
//     // 예외 처리
//     return null;
//   }

//   return (
//     <BtnContainer
//       roundness={roundness}
//       btnbackground={btnbackground}
//       btnwidth={btnwidth}
//       btncolor={btncolor}
//       btnheight={btnheight}
//       btnborder={btnborder}
//       disabled={disabled}
//       btnpadding={btnpadding} 
//       hoverback={hoverback}
//       hoverborder={hoverborder}
//       hovercolor={hovercolor}

//     >
//       {btntext} 
//       {imgSrc !== 'none' && <img src={imgSrc}/>}
//     </BtnContainer>
//   );
// }

// export default Button;