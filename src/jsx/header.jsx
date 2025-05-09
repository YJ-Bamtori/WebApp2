import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import '../App.css';
import {db} from '../firebase.js'


const Border= styled.div`
  width:100%;
  box-sizing:border-box;
  border-bottom: 1px solid #1a1a1b1a;
`
  
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  max-width:1320px;
  min-width:1188px;
  padding: 16px 54px;
  box-sizing:border-box;
  margin: 0 auto;


  img{
    cursor: pointer;

  }
`;

const Searchbox = styled.form`
  background-color: #f2f2f2;
  width: 280px;
  height: 44px;
  border-radius: 800px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
  display: ${props => props.disabled ? 'none' : 'flex'};
`;



const HeaderInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 8px 12px;


  &:focus {
    outline: none;
    border-bottom: none;  
    color: #1A1A1B;
  }

  &::placeholder {
    color: #8D8D8D;
  }

`
const Headersubmit = styled.button`
  background: transparent;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  img {
    width: 24px;  
    height: 24px;
  }
`;

function Header({ value, onChange, onSubmit, disabled }){
  const navigate = useNavigate();  
  

  return (
    <Border>
    <Container>
      <img src="/logo.svg" alt="logo" style={{height:'44px'}} onClick={() => navigate('/')}/>
      <Searchbox  disabled={disabled} onSubmit={onSubmit} className="caption1">
        <HeaderInput 
          className="caption1" 
          type="text" 
          placeholder="검색어 입력"
          value={value} 
          onChange={onChange} 
        />
        <Headersubmit type="submit">
          <img src="/Search.svg" alt="검색 아이콘"/>
        </Headersubmit>
      </Searchbox>
    </Container>
    </Border>
  );
}

export default Header;
