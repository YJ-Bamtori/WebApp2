import styled from 'styled-components';
import Tag from './tag.jsx'

const Container = styled.div`
  width: auto;
  height: 240px;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  border-radius: 16px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding: 8px;

  &:hover {
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Fimg = styled.div`
  height: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  background-image: url(${props => props.imgsrc});
  background-size: cover;
  background-position: center;
`;

const Fcontent = styled.div`
  display:flex;
  flex-direction:column;
  gap:4px;
  justify-content: center;
  width: 70%;
  height: 100%;
  align-content: center;
  margin-left: 16px;
  padding-right: 32px;

`;

const Title = styled.div`
  margin: 8px 0px;
`;

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



function List(props) {
  const { imgsrc, caption, title, body, itemClicked } = props;

  return (



      <Container onClick={itemClicked}>
        <Fimg imgsrc={imgsrc}></Fimg>

        <Fcontent>
          <Tag tag={props.tag}></Tag>
        
        <Title>
          <p className="caption1 opacity50">{caption}</p>
          <TextBox><h2>{title}</h2></TextBox>
        </Title>

        <TextBox2><p className="body1 opacity50">{body}</p></TextBox2>
        </Fcontent>


    </Container>
  );
}

export default List;
