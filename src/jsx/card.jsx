import styled from 'styled-components'
import { useState } from 'react'
import '../App.css'
import Tag from './tag.jsx'

// 카드 전체 컨테이너
  const Container = styled.div`
    width: auto;
    height: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    display:flex;
    flex-direction:column;
    border-radius: 16px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 8px;

    &:hover {
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.1);  // 어두운 배경 추가 (0.2는 투명도, 조절 가능)
  }
  
    `
  // 이미지 컨테이너
    const Fimg = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 16px;
    background-image: url(${props => props.imgsrc});
    background-size: cover;
    background-position: center;

    `
  // 내용컨테이너
    const Fcontent = styled.div`
    display:flex;
    flex-direction:column;
    height: 160px;
    gap:4px;
    margin-top:16px;
    padding: 0px 4px;
    `
  // 캡션,타이틀 컨테이너
    const Title = styled.div`
    display:flex;
    flex-direction:column;
    gap:4px;
    margin: 8px 0px;
    `
    const TextBox= styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    `

    const TextBox2= styled(TextBox)`
    -webkit-line-clamp: 2; 
    height:52px;
    `


function Card(props) {
  const imgsrc = props.imgsrc ||  './defaultimg.svg';
  const tag = props.tag || '태그';
  const caption = props.caption || '기본 캡션';
  const title = props.title || '기본 타이틀';
  const body = props.body || '기본 바디 텍스트';
  const itemClicked = props.itemClicked;
  // const state = {card, list};

// 만약 state가 card라면, feed의 grid-template-colums: repeat (1,1fr); 
// container의 height: 300; flex-direction: row;
// Fimg height: 100%, width: 30%
// Fcontent height:100%, width:70%

  return(


      <Container onClick={itemClicked}>


        <Fimg imgsrc={imgsrc}></Fimg>
        
        <Fcontent>  
          <Tag tag={props.tag}></Tag>
                
          <Title>
            <p className="caption1 opacity50">{caption}</p>
            <TextBox><h2>{title}</h2></TextBox>   
          </Title>

          <TextBox2><p className='body1 opacity50'>{body}</p></TextBox2>
        </Fcontent>

      </Container>
   )
}

export default Card
