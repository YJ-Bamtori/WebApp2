import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { db } from '../firebase'; 
import '../App.css'

// 스타일 컴포넌트
const SelectBox = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  border-bottom: ${props => props.border || "1px solid #D1D1D1"} ;
  padding-right: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    right: 8px;
    top: 50%;
    transform:  ${props =>props.active ? 'translateY(-50%) rotate(-90deg)' : 'translateY(-50%) rotate(90deg)'};
    width: 8px;
    height: 8px;
    background: url('./arrow.svg') center no-repeat;
    background-size: cover;
    transition: 0.2s ease-in-out;
  }

`

const LabelBtn = styled.button`
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
  border: none;
  outline: none;
  padding:0px 8px;
  box-sizing:border-box;
  background: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

const OptionList = styled.ul`
  position: absolute;
  top: 50px;
  width: 100%;
  background: #ffffff;
  color: #8D8D8D;
  list-style: none;
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  max-height: ${props => (props.active ? '500px' : '0')};
  transition: 0.1s ease-in-out;
  box-shadow: 0px 4px 16px rgba(155, 157, 155, 0.25);
  border-radius: 16px;
`

const OptionItem = styled.li`
  padding: 8px 16px;
  transition: 0.1s;

  &:hover {
    /* background: #EAEAEA;
    color: #1A1A1B; */
    background:#D1FC36;
    color: #1A1A1B;

  }
`


// 컴포넌트
function Select(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [border, setBorder] = useState("1px solid #D1D1D1");


  const [option, setOption] = useState([]); 

  useEffect(() => {
    db.collection('categori')
    .get()
    .then((qs) => {
      const tempOption = [];
      qs.forEach((doc) => {
        const data = doc.data();
        if (data.name) tempOption.push(data.name);
      });
      setOption(tempOption);
    })
  }, []);
  

  const selectlabel = (item) => {
    props.setLabel(item) //setlabel을 props로 postpage에 전달함.
    setIsOpen(!isOpen);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setBorder(isOpen ? "1px solid #D1D1D1" : "1px solid #1A1A1B")

  };




  return (
    <SelectBox border={border} active={isOpen}>
      <LabelBtn className='btn2 opacity50' onClick={() => toggleDropdown()}>{props.label}</LabelBtn>
      <OptionList className='caption1' active={isOpen}> 

      {option.slice(1).map((item, index) => (
      <OptionItem className='caption1' key={index + 1} onClick={() => selectlabel(item)}>
        {item}
      </OptionItem>
      ))}
        
      </OptionList>
    </SelectBox>

  );
}

export default Select;
