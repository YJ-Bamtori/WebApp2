// import { useState } from 'react'
// import styled from 'styled-components'
// import '../App.css'
// import '../index.css'
// import CategoriBtn from './categoribtn'

// const Container = styled.div`
//     width: 100%;
//     text-align: center;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     gap: 8px;

// `

// function Categori() {
//   const [isClicked, setIsClicked] = useState();

//   const toggleClicked = () =>{
//     setIsClicked(!isClicked);
//     console.log("눌렸어요")
//   };



//   // 내가가져온 categoribtn은 컴포넌트라 button속성이 없어서 onclick이 안될 수 있음. 그래서 button이라는 정의를 해줘야함.
//   // 따라서 Button onClick = ? 형태가아니라 Button onclick = {props.onClick ? }형태로가야지 가능함
//     return (
//       <Container>
//         <CategoriBtn state='selected' size='sm' onClick={toggleClicked}></CategoriBtn>
//         <CategoriBtn size='sm' onClick={toggleClicked}></CategoriBtn>
//         <CategoriBtn size='sm' onClick={toggleClicked}></CategoriBtn>
//         <CategoriBtn size='sm' onClick={toggleClicked}></CategoriBtn>
//       </Container>
//     )
//   }
  
//   export default Categori
  