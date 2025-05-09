import styled from 'styled-components';
import { useState } from 'react';
import '../App.css';
import RectBtn from './rectbtn.jsx';

// 카드 전체 컨테이너
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 61.8px;
  align-items: center;
  border-top: ${props => props.border};
  padding: 0px 0px;
  margin-bottom: 36px;
`;

const Buttoncontainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Titlecontainer = styled.div`
  display: flex;
  gap: 4px;
`;

const Arrow = styled.img`
    cursor: pointer;
    width:12px;
    transition:0.2s ease-in-out;
    margin-right:8px;

    &:hover{
      filter:brightness(500%);
    }
`

// 1px solid #D1D1D1;

function Title(props) {
  //버튼의 유무, 화살표 유무, 글자변경, 인덱스 유무
  const titletext = props.children || "Default";
  const total = props.total || "(default)";
  const btntext = props.btntext || "Default";
  const imgsrc = props.imgsrc || "./card.svg";
  const state = props.state || "default";
  const itemClicked = props.itemClicked; 
  const viewClicked = props.viewClicked;
  const backClicked = props.backClicked; 
  const statebtn = props.statebtn || "default";

  if (state === "dbtn") {
    return (
      <Container border ="1px solid #D1D1D1;">
        <Titlecontainer>
          <p className='title2'>{titletext}</p>
          <p className='caption1 opacity50'>{total}</p>
        </Titlecontainer>

        <Buttoncontainer>
          <RectBtn state="edge"  onClick={viewClicked} imgsrc={imgsrc} btntext=' '  />
          <RectBtn  state="default" onClick={itemClicked} btntext={btntext} />
        </Buttoncontainer>
      </Container>
    );


  } else if (state === "back") {
    return (
      <Container>
        <Titlecontainer>
          <Arrow src="/arrow.svg" alt="back arrow" onClick={backClicked} ></Arrow>
            <p className='title2'>{titletext}</p>
          </Titlecontainer>

          <RectBtn state={statebtn} btntext={btntext} onClick={itemClicked} />
      </Container>
    );


  } else if (state === "none") {
    return (
      <Container>
        <Buttoncontainer>
        <Arrow src="/arrow.svg" alt="back arrow" onClick={backClicked} ></Arrow>
        <p className='title2'>{titletext}</p>
        </Buttoncontainer>

        <RectBtn state='none'  btntext=' ' imgsrc={imgsrc} onClick={props.deleteClicked} />
      </Container>
    );


  } else if (state === "sm") {
    return (
      <Container style={{marginBottom:"0px"}}> 
        <Buttoncontainer onClick={backClicked} style={{ cursor: 'pointer' }}>
          <Arrow src="/arrow.svg" style={{ width: "8px", marginRight:'0px'}} alt="back arrow"  ></Arrow>
          
          <p className='btn2'>{titletext}</p>        
        </Buttoncontainer>
      </Container>
    );

  } else {
    return (
      <Container>
        <Buttoncontainer>
        <p className='title2'>{titletext}</p>
        </Buttoncontainer>

        <Buttoncontainer>
          <RectBtn  btntext={btntext} onClick={itemClicked} />
        </Buttoncontainer>
      </Container>
    );
  }
}

export default Title;
