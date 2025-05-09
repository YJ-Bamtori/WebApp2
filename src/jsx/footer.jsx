import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components'
import '../App.css'


const Border= styled.div`
  width:100%;
  box-sizing:border-box;
  background-color: #1A1A1B;
  border-bottom: 1px solid #1a1a1b1a;
  padding-bottom: 48px;
`
  
const Container = styled.div`
  display: flex;
  color:white;
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
`

const Wpadding = styled.div`
  display:flex;
  flex-direction:column;
  gap:4px;
`

const Wrapper= styled.div`
  display:flex;
  flex-direction:column;
  background-color: #1A1A1B;
  border-bottom: 1px solid #1a1a1b1a;
  height:100%;
  margin-top:32px;
  margin-bottom:48px;
  gap:16px;

  `
const Title= styled.p`
  font-size:24px;
  line-height: 28px;
`

const Divider = styled.div`
  border-top: 1px solid #484849;
  color: #484849;
  max-width:1212px;
  min-width:1188px;
  margin: 0 auto;
  padding: 4px 54px;
  box-sizing: border-box;
`
const Copyright = styled.div`
  color: #484849;
  max-width:1320px;
  min-width:1188px;
  margin: 0 auto;
  padding: 0px 54px;
  box-sizing: border-box;
`

function Footer(props) {

  return (
    <Border>
    <Container>
      <Wrapper>
        <Title className='title1'>BAM.TORI</Title>
        <Wpadding>
        <p className='body1 opacity70'>Bamtori는 저희 집 강아지 이름입니다. <br/>요즘 둘이 많이들 싸워요.</p>
        <p className='caption2' style={{color:'#C7FD05'}}>밤이랑 토리 두 마리에요.</p>
        </Wpadding>
      </Wrapper>
     
      <Wrapper>
        <img src={import.meta.env.BASE_URL+'./logo2.svg'} style={{lineHeight:"72px"}}  onClick={props.onClick}></img>
      </Wrapper>
    </Container>

    <Divider/>
    <Copyright>2025, Designed by Bamtori</Copyright>

    </Border>
  )
}

export default Footer
