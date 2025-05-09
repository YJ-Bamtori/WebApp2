import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {db} from '../firebase.js'

import styled from 'styled-components'
import '../App.css'
import '../index.css'

import Title from './title.jsx'
import Select from './select.jsx'
import Header from './header.jsx'

const Pagelist = styled.div`
  display: grid;
  width: 1080px; //이것도 너비
  margin: 0 auto;
  margin-bottom:128px;
  grid-template-columns: repeat(1, 1fr);
  padding: 0px 54px;
  row-gap: 0px;
  height: auto;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 16px;
  margin-top: 32px;

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const InputField = styled.input`
  width: auto;  
  height: auto;
  padding: 12px;
  border: none;
  border-bottom: 1px solid #D1D1D1;
  margin-bottom: 8px; 
  font-size: 28px;
  font-weight: 600;
`;
const TextareaField = styled.textarea`
  width: auto; 
  height: 360px; 
  padding: 12px;
  border: none;
  transition: all 0.3s ease-in-out;
  margin-bottom: 8px;
  resize: none;  /* 사용자가 크기를 수동으로 조정하지 못하게 설정 */
  font-size: 16px;

`;


const Imginput =styled.input`
    width:300px;
    opacity: 0;
    height:300px;
    background-color:red;
    position:absolute;
    border-radius: 16px;
    cursor: pointer;
`


const FileContainer = styled.div`
  width:280px;
  height:210px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 16px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  transition: 0.2s ease-in-out;
  cursor: pointer;


  &:hover{
    background-color:  ${props => props.hasImage ? 'rgba(240,17,17,0.2)' : 'rgba(26,26,27,0.3)'}
  }
  &:active{
    background-color: rgba(26,26,27,0.5);
    transition: 0s ease-in-out;

  }
`

const ImgContainer= styled.div`
width:280px;
height:210px;
  background-image: url(${props => props.image});
  position:absolute;
  z-index:-10;
  background-position: center, center;
  background-size:cover;
  border-radius:16px;
`

const Imgs = styled.img`
  width:50px;
  opacity:  ${props => props.hasImage ? '1' : '0.3'};
  transition: transform 0.3s ease;
  transform:  ${props => props.hasImage ? 'rotate(45deg)' : 'rotate(0deg)'};

`



function Postpage(props) {
  const navigate = useNavigate();  
  const [imgsrc, setImgsrc] = useState("");
  const [tag, setTag] = useState("");
  const [caption, setCaption] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [label, setLabel] = useState('일상')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);


  const writePost = function(){
    let timestamp = new Date().getTime().toString()

    const now = new Date();
    const caption = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}`;

    db.collection('post').doc(timestamp).set({
      id: timestamp,
      imgsrc : imgsrc ,
      tag: label, 
      caption: caption,
      title: title,
      body : body,
    }).then(()=>{
      alert('글이 작성되었습니다.')
      navigate('/')
    })
  }


  const back = function(){
      if(title.trim().length > 0 || body.trim().length > 0 || image){
      alert('입력한 내용들이 제거됩니다.')
      navigate('/')}
      else{
      navigate('/') 
      }
  }



const isPost = () => {
  return (
    title.trim().length > 0 &&
    body.trim().length > 0 
  );
};

  
const handleImage = (e) => {
  let file = e.target.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = (_e) => {
    setImage(_e.target.result); 
    setImgsrc(_e.target.result);
  };
};

const handleDelete = (e) =>{
  if(image)
    e.preventDefault();
      setImage("")
      setImgsrc("")
  }

  return (

    <div className="all">
      <Header disabled={true} />

      <Pagelist>
        <MainContainer>
          <Title state="back" statebtn={isPost() ? "default" : "disabled"}  btntext="업로드" backClicked={() => { back() }}  itemClicked={() => { writePost() }}>업로드 하기</Title>
             
          <Container>
            {/* 카테고리 */}
                <Select  label={label} setLabel={setLabel}/> 
            {/* 제목,본문 */}
                <InputArea>
                  <InputField   value={title}  onChange={(e) => setTitle(e.target.value)}  className="h1" placeholder="제목을 입력해주세요." />
                  <TextareaField  value={body}   onChange={(e) => setBody(e.target.value)}  className="body1" placeholder="내용을 입력해주세요." />
                </InputArea>
            {/* 이미지 */}
                <FileContainer hasImage={image ? true : false}>
                    <Imgs src="./plus.svg" hasImage={image ? true : false} />
                    <Imginput   type='file' accept='image/*' onClick={handleDelete}  onChange={(e) => handleImage(e)}/> 
                    <ImgContainer image = {image}></ImgContainer>
                </FileContainer>
          </Container>    
        </MainContainer>
      </Pagelist>

    </div>
  );
}

export default Postpage;


