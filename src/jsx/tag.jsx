import styled from 'styled-components'
import '../App.css'

const TagContainer = styled.div`
  display:inline-block;
  width:fit-content;
  padding:4px 8px;
  border-radius:4px;
  background-color: #D1FC36;
`

function Tag(props) {
  return (
    <TagContainer  className="btn2">{props.tag}</TagContainer>
  )
}

export default Tag
