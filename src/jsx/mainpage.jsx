import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';
import '../index.css';

import {db} from '../firebase.js'
import List from './list.jsx';
import Title from './title.jsx';
import Header from './header.jsx';
import CategoriBtn from './categoribtn.jsx';
import Footer from './footer.jsx';
import Card from './card.jsx';

const Wrapper = styled.div`
  width: 1080px; //이것도 너비
  margin: 0 auto;
  margin-bottom:128px;
  padding: 0px 54px;

`;

const ListPost = styled.div`
  display: grid;
  width: 100%; //이거 너비
  grid-template-columns: ${props=>props.columns};
  column-gap: 32px;
  row-gap: 16px;
  height: auto;
  margin: 0 auto;

`;

const All = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 320px;
  padding-bottom: 16px;
`;

const Categoris = styled.div`
  display:flex;
  justify-content:center;
  gap: 12px;
`

const NoPost = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  color: #1a1a1b;
  flex-direction: columns;
  height: 400px;

  & > img{
    display:block;
  }
`


function Mainpage(props) {
        const navigate = useNavigate();
        const [selected, setSelected] = useState(1);
        const [data, setData] = useState([])
        const [categori, setCategori] = useState([])
        const [filteredData, setFilteredData] = useState([]);
        const [title, setTitle] = useState('전체')
        const [icon, setIcon] = useState('card.svg')
        const [num, setNum] = useState(null);
        const [viewType, setViewType] = useState("card");

        const [animateTitle, setAnimateTitle] = useState(false);


        //카테고리 선택
        const toggleClicked = (categoriId) => {
          setSelected(categoriId); 
          setAnimateTitle(true);
          setTimeout(() => setAnimateTitle(false), 500); 
        };

      
        //칼럼 바꾸기
        const view = () => {
          const newType = viewType === 'card' ? 'list' : 'card';
          setViewType(newType);
          setIcon(newType === 'card' ? 'card.svg' : 'list.svg');
        };
        

        useEffect(()=>{
          let tempData = []
          // 포스팅 된 글 데이터 받아오기
          db.collection('post').get().then((qs)=>{
            qs.forEach((doc)=>{
              tempData.push(doc.data())
            })
           setData(tempData);
           setFilteredData(tempData); 

           // 카테고리 내용 데이터 받아오기
           let categoriData=[]
           db.collection('categori').get().then((qs)=>{
            qs.forEach((doc)=>{
              categoriData.push(doc.data())
            })
            setCategori(categoriData);

            //오름차순, 내림차순
            const sortData= tempData.sort((a,b)=> b.id-a.id)
            setData(sortData)
          })
            // 최상단 고정
            window.scrollTo({ top: 0, behavior: 'auto' });
     

            setAnimateTitle(true);
            const timer = setTimeout(() => setAnimateTitle(false), 500);
            return () => clearTimeout(timer);
        })
      }, []) 



      useEffect(() => {
        const findCategori = categori.find(data => data.id === selected);
        if (findCategori) {
          setTitle(findCategori.name); 
          if (selected === 1) {
            setFilteredData(data);
            setNum("(" + data.length + ")")
          } else {
            const filtered = data.filter((post) => post.tag === findCategori.name);
            setFilteredData(filtered); 
            setNum("(" + filtered.length + ")")
          }
        }
      }, [selected, data, categori]);




      const [search, setSearch] = useState('');

        
      const handleSearch = (e) => {
        setSearch(e.target.value);
      };
      

      const handleSubmit = (e) => {
        e.preventDefault();

        const term = search.trim().toLowerCase();
        if (term === '') {
          setFilteredData(data);
          return;
        }
      
        const results = data.filter(data => 
          data.title.toLowerCase().includes(term) ||
          data.body.toLowerCase().includes(term)
        );

      // 결과가 없으면, 안나오게하기
        if (results.length === 0) {
          alert('검색 결과가 없습니다.');
        } else{
          setFilteredData(results);
          setTitle(search)
          setNum("(" + results.length + ")")
          setSelected(null)

          setAnimateTitle(true);
          setTimeout(() => setAnimateTitle(false), 500);
        }
      };

      let Noitems = <NoPost>
      <p className='btn2 opacity30'>게시물이 없어요.</p>
      </NoPost>

      
    return (
      <div className="all">
      <Header value={search} onChange={handleSearch} onSubmit={handleSubmit}/>

        <Wrapper>              


            <All>
              {/* 가변 타이틀 */}
              <div className={`title1 ${animateTitle ? 'title-animate' : ''}`}>{title}</div>
                
              {/* 카테고리 리스트 */}
              <Categoris >
                {categori.map((categori) =>(
                  <CategoriBtn 
                  key={categori.id} 
                  btntext={categori.name} 
                  state={selected === categori.id ? 'selected' : 'default'}
                  size='sm' 
                  onClick={() => toggleClicked(categori.id)}>
                  </CategoriBtn>
                ))}
              </Categoris>
            </All>

            {/* 타이틀컴포넌트 */}
            <Title state="dbtn" 
              btntext="새 게시물 작성" 
              total={num} 
              imgsrc={icon} 
              itemClicked={() => navigate('/write')} 
              viewClicked={()=> view()}>
                {title}
            </Title>

            {/* 포스팅게시물 */}
            <ListPost className={`title1 ${animateTitle ? 'title-animate' : ''}`} columns={viewType === 'card' ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'}>
                {filteredData.map((post) =>
                  viewType === 'card' ? (
                    <Card
                      key={post.id}
                      imgsrc={post.imgsrc || import.meta.env.BASE_URL + "./defaultimg.svg"}
                      tag={post.tag}
                      caption={post.caption}
                      title={post.title}
                      body={post.body}
                      itemClicked={() => navigate(`/post/${post.id}`)}
                    />
                  ) : (
                    <List
                      key={post.id}
                      imgsrc={post.imgsrc || import.meta.env.BASE_URL + "./defaultimg.svg"}
                      tag={post.tag}
                      caption={post.caption}
                      title={post.title}
                      body={post.body}
                      itemClicked={() => navigate(`/post/${post.id}`)}
                    />
                  )
                )}
            </ListPost>

            {filteredData.length === 0 && Noitems}

        </Wrapper>
        <Footer onClick={() =>  window.scrollTo({ top: 0, behavior: 'smooth' })}/>
        </div>
    );
}

      export default Mainpage;
