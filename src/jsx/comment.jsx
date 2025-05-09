import styled from 'styled-components'
import { useState } from 'react'
import '../App.css'
import RoundBtn from './roundbtn'
import {db} from '../firebase.js'

// 카드 전체 컨테이너
  const Container = styled.div`
    width: 100%;
    height: auto;
    flex-shrink: 0;
    display:flex;
    flex-direction:row;
    border-radius: 16px;
    transition: all 0.3s ease-in-out;
    gap: 12px;
    margin-bottom: 32px;
 `
    const Textfield=  styled.div`
    flex: 1; 
    height: 52px;
    box-sizing: border-box;
    background-color: none;
    flex-shrink: 0;
    display:flex;
    flex-direction:column;
    transition: all 0.3s ease-in-out;
 `
     const Writefield= styled.div`
     flex: 1; 
     height: auto;
     box-sizing: border-box;
     background-color: none;
     flex-shrink: 0;
     display:flex;
     flex-direction:column;
     transition: all 0.3s ease-in-out;
     gap: 4px;

  `
       const Submitfield= styled.div`
       flex: 1; 
       height: auto;
       justify-content: right;
       box-sizing: border-box;
       flex-shrink: 0;
       display:flex;
       margin-top:4px;
       flex-direction:row;
       transition: all 0.3s ease-in-out;
       align-items:center;
    `
       const Buttonfield= styled.div`
       flex: 1; 
       height: auto;
       justify-content: space-between;
       box-sizing: border-box;
       background-color: none;
       flex-shrink: 0;
       display:flex;
       flex-direction:row;
       transition: all 0.3s ease-in-out;
    `    
      const Profile= styled.div`
      width: 48px;
      height: 48px;
      box-sizing: border-box;
      background-image:url('/profile.png');
      background-position: center;
      background-size:cover;
      flex-shrink: 0;
      display:flex;
      flex-direction:column;
      border-radius: 100px;
      transition: all 0.3s ease-in-out;
      
   `
    
// postId를 viewpage에서 받아오기
function Comment({postId, onSubmit}) {
const [value, setValue] = useState('')

function handleChange(e){
  setValue(e.target.value);
}

function handleSubmit(){
  if (!value.trim()) return alert('댓글을 입력하세요');

  const timestamp = Date.now();
  const dateObj = new Date(timestamp);
  const formattedDate = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;

    const commentData = {
      postid: postId,
      id: `${postId}_${timestamp}`,
      date: formattedDate,
      comment: value,
      name: '이영재',
      like: false
    };

    db.collection('comment')
    .doc(postId)
    .collection('comments')
    .doc(commentData.id)
    .set(commentData)
    .then(() => {
      alert('댓글이 등록되었어요');
      setValue('');
      onSubmit(); //viewpage에서의 updateComments 실행
    })
    .catch((err) => {
      console.error('댓글 등록 실패:', err);
    });
}

  const isInput = () =>{
    return(
      value.trim().length > 0
    )
  }

  return(
    <Container>
          <Profile/>
          <Writefield>      


                <Textfield>
                  <input className='body2' type="text" value={value} onChange={handleChange} placeholder='댓글을 작성해주세요.' />
                </Textfield>

                <Buttonfield>
                    <Submitfield>
                      <RoundBtn state={isInput() ? "default" : "disabled"} onClick={handleSubmit} btntext="입력" />
                    </Submitfield>
                </Buttonfield>


          </Writefield>
    </Container>
    
   )
}

export default Comment
