  import { useNavigate, useParams } from 'react-router-dom';
  import { useState, useEffect } from 'react';
  import { useRef } from 'react';
  import styled from 'styled-components';
  import '../App.css';
  import '../index.css';

  import {db} from '../firebase.js'
  import Title from './title.jsx';
  import Header from './header.jsx';
  import Comment from './comment.jsx'
  import Reply from './reply.jsx'
  import CategoriBtn from './categoribtn.jsx';
  import Footer from './footer.jsx';
  import Tag from './tag.jsx'
  import RectBtn from './rectbtn.jsx';

  const Main = styled.div`
    width: 1080px; //이것도 너비
    margin: 32px auto;
    margin-bottom:128px;
  `

  const Sub = styled.div`
    position: sticky;
    top: 128px;         
    display: flex;
    flex-direction: column;
    width: 32%;
    gap: 4px;
    box-sizing: border-box;
    padding: 8px;
    align-self: flex-start;
    border-top: 1px solid #BBBBBB;
  `

  const ReplyArea = styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
    margin-top:16px;
  `



  const Story = styled.div`
    margin-bottom : 64px;
  `
  const Divider = styled.div`
    display:flex;
    border-top: 1px solid #8D8D8D;
    padding: 4px 0px;
    width:100%;  
    margin-bottom : 32px; 
    gap:16px;
  `
  const Icon = styled.div`
    display:flex;
    flex-direction:row;
    gap: 8px;
    height:32px;
    align-items:center;
  `
  const Smtitle = styled.p`
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `

  const Wrapper = styled.div`
    margin:16px 0px;
  `

  const Dim = styled.div`
    position: fixed;         // 화면 전체 덮기
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3); // 흐릿한 검정 배경
    z-index: 999;      
  `
  const Modal = styled.div`
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     width: 400px;
     background-color: white;
     border-radius: 12px;
     box-shadow: 0px 4px 20px rgba(0,0,0,0.3);
     z-index: 1000;
     padding: 8px;
  `
  const ModalTitle = styled.div`
   display:flex;
   width:100%;
   padding:12px;
`
  const Contents = styled.div`
    display:flex;
    width:100%;
    padding:12px;

  `
  const Buttons = styled.div`
      display:flex;
      justify-content: end;
      gap:8px;
      width:100%;
      align-items:center;
      margin-top:32px;
  `




  function ViewPage(props) {

    const topRef = useRef(null);
    const storyRef = useRef(null);
    const commentRef = useRef(null);

    const scrollToRef = (ref) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const CategoriClick = (id) => {
      if (id == '1') scrollToRef(topRef)
      else if (id == '2') scrollToRef(storyRef)
      else if (id == '3') scrollToRef(commentRef)
    };



    
    const navigate = useNavigate();  
    const postId = useParams().id;
    const[commentData,setCommentData]=useState([]);

    const [post, setPost] = useState({
      id: 0,
      imgsrc: "",
      tag: "",
      caption: "",
      title: "",
      body: ""
    });

    // title 뒤로가기 onClick
    const back = function(){
      navigate('/')
  }

    // 현재 param id에 해당하는 데이터 불러오기
    useEffect(() => {
      db.collection('post').doc(postId).get().then((doc) => {
        setPost(doc.data());
      });
    // 스크롤 유지가 안되게 변경
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);


    // 커멘트 불러오기 함수
    const UpdateComments = () => {
      let tempData = [];
      db.collection('comment')
        .doc(postId)
        .collection('comments')
        .orderBy('date', 'desc')
        .get()
        .then((qs) => {
          qs.forEach((doc) => {
            tempData.push(doc.data());
          });
          setCommentData(tempData);
        });
    };
    
    // param id에 해당하는 댓글 데이터 불러오기
    useEffect(() => {
      db.collection('post').doc(postId).get().then((doc) => {
        setPost(doc.data());
      });
      UpdateComments(); // 댓글도 처음에 한 번 불러오기
    }, [postId]);



      const smcategori = [
          {
            id: '1',
            title: '타이틀',
            selected: true
          },
          {
            id: '2',
            title: '본문',
            selected: false
          },
          {
            id: '3',
            title: '댓글',
            selected: false
          }]
        

          const toggleHeart = (data,currentlike) => {

            db.collection('comment')
            .doc(postId)
            .collection('comments')
            .doc(data)
            .update({like : !currentlike})
            .then(() => {UpdateComments();})
          }

          const handleModal = () =>{
          setShowmodal(true)
          }

          const handleCancle = () =>{
          setShowmodal(false)
          }

          const handleConfirm = () =>{
            db.collection('post').doc(postId).delete().then(() => {
              navigate('/');
            });
            }

          const [showModal,setShowmodal] = useState(false)
          
          const DimClick = ()=> {
            setShowmodal(false)

          }
          
    return (
      <div>
        {/* 헤더 */}
        <div ref={topRef}>
            <Header disabled={true} />
        </div>
     
        {/* 모달 */}
        {showModal && (
          <Dim onClick={DimClick}>
          <Modal>
            <ModalTitle>
              <h2>게시물 삭제</h2>
            </ModalTitle>

            <Contents>
              <p className='body1'>게시물을 삭제할까요?</p>
            </Contents>
            
            <Buttons>
              <RectBtn state='edge' btntext='취소' onClick={handleCancle}/>
              <RectBtn state='default' btntext='삭제하기' onClick={handleConfirm}/>
            </Buttons>
          </Modal>
          </Dim>
        )}


        <div className='flex'>
            <Main>
              <Title state='none' imgsrc='/delete.svg' deleteClicked={() => {handleModal()}} backClicked={() => { back()} } >게시물</Title>


              {/* post내용 */}
              <Story>
                <Tag tag={post.tag}></Tag>
                <Wrapper>
                <p className='btn2 opacity50'>{post.caption}</p>
                <h1>{post.title}</h1>
                </Wrapper>
                <img src={post.imgsrc} style={{ width: "100%" , borderRadius:'1.5em', marginBottom:'16px'}} alt={post.title}/>
                <p className='body1 opacity70' ref={storyRef} style={{ whiteSpace: 'pre-line' }}>{post.body}</p>
                </Story>


              {/* 디바이더 */}
              <div ref={commentRef}>
              <Divider>
                <Icon>  
                  <img src='/comment.svg' style={{width :'24px'}}></img>
                  <p className='btn2'>댓글{commentData.length}개</p>
                </Icon>
              </Divider> 
              </div>         

              {/* 댓글 */} {/* comment 컴포넌트에 onSubmit, postid전달 */}
              <Comment postId={postId} onSubmit={UpdateComments} />     
              <ReplyArea>
                {commentData.map((data) => (
                  <Reply
                    key={data.id}
                    name={data.name}
                    date={data.date}
                    comment={data.comment}
                    like={data.like}
                    onClick ={() => {toggleHeart(data.id, data.like)}}
                    stroke ={data.like ? '#FF9090' : '#1A1A1B'}
                    fill = {data.like ? '#FF9090' : '#ffffff'}
                    
                  />
                  ))}
              </ReplyArea>
            </Main>
              
            {/* 스크롤 서브메뉴 */}
            <Sub>
              <Smtitle className='btn2 opacity70'>{post.title}</Smtitle>
              {smcategori.map((data) => (
                <CategoriBtn 
                  state="edge"
                  fontSize='sm'
                  padding='sm'
                  key={data.id}
                  btntext={data.title}
                  onClick={() => CategoriClick(data.id)}  
                />
              ))}
              <Title state='sm' backClicked={() => {back()}} > 목록으로</Title>
            </Sub> 
        </div>

        {/* 푸터 */}
        <Footer onClick={() => navigate('/')}/>
        </div>
    );
  }

  export default ViewPage;
