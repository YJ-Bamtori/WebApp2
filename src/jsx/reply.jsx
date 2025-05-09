import styled from 'styled-components'
import { useState } from 'react'
import '../App.css'
import RoundBtn from './roundbtn'

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
 `
  const Namefield=  styled.div`
    flex: 1; 
    box-sizing: border-box;
    background-color: none;
    flex-shrink: 0;
    display:flex;
    gap: 8px;
    align-items: end;
 `

  const Comment = styled.div`
    display:flex;
    flex-direction : column;
    gap: 4px;
    width:100%;
  `
  const Writefield= styled.div`
     width:100%;
     height:inherit;
     flex: 1; 
     height: auto;
     box-sizing: border-box;
     background-color: none;
     flex-shrink: 0;
     display:flex;
     justify-content: space-between;
     transition: all 0.3s ease-in-out;
  `

  const Profile= styled.div`
      width: 48px;
      height: 48px;
      box-sizing: border-box;
      background-position: center;
      background-size:cover;
      background-image: ${props => props.profile};
      flex-shrink: 0;
      display:flex;
      flex-direction:column;
      border-radius: 16px;
      transition: all 0.3s ease-in-out;
   `

  const Heart = styled.div`
    width:65.13px;
    text-align:center;
  `

  

function Reply(props) {
  const profile = props.profile || `url('/profile.png')`;
 
  return(
    <Container>
      
      <Profile profile={profile}/>
      
      <Writefield>
        <Comment>
        <Namefield>
        <h3>{props.name}</h3>
        <p className='caption2 opacity30'>{props.date}</p>
        </Namefield>
        <p className='body2 opacity50'>{props.comment}</p>
        </Comment>   

        <Heart>
          <svg xmlns="http://www.w3.org/2000/svg" style={{cursor:'pointer'}} width="20" height="20" viewBox="0 0 30 26">
          <path opacity="0.5" d="M14.6069 3.49524L15 3.99556L15.3931 3.49524C16.8196 1.67994 19.0955 0.5 21.6667 0.5C23.8727 0.5 25.8294 1.15302 27.2276 2.39232C28.6173 3.62413 29.5 5.47406 29.5 7.96773C29.5 10.1398 28.6156 12.3237 27.2394 14.4013C25.8651 16.476 24.0235 18.4097 22.1666 20.0709C20.3117 21.7304 18.4545 23.1065 17.0599 24.0682C16.3631 24.5488 15.7829 24.9251 15.3777 25.1807C15.2263 25.2763 15.0994 25.3549 15 25.4159C14.9006 25.3549 14.7737 25.2763 14.6223 25.1807C14.2171 24.9251 13.6369 24.5488 12.9401 24.0682C11.5455 23.1065 9.68829 21.7304 7.83337 20.0709C5.97648 18.4097 4.13489 16.476 2.7606 14.4013C1.3844 12.3237 0.5 10.1398 0.5 7.96773C0.5 5.47406 1.38272 3.62413 2.77242 2.39232C4.17058 1.15302 6.12726 0.5 8.3333 0.5C10.9045 0.5 13.1804 1.67994 14.6069 3.49524Z" 
          stroke= {props.stroke || "#FF9090"} fill={props.fill || "#FF9090"} onClick={props.onClick}/>
          </svg>
        </Heart>

      </Writefield>

    </Container>
    
   )
}

export default Reply
