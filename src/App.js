/*eslint-disable*/
import {useState} from 'react'
import './App.css';

function App() {

  let [title,changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  let [like, changeLike] = useState([0, 0, 0])
  let [modal, setModal] = useState(false);
  let [titleNum, setTitleNum] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>dev blog</div>
      </div>
      {title.map(function(a,i){
        return (
          <div className='list' key={i}>
            <h4 onClick={ () => {
                setModal(!modal);
                setTitleNum(i); } }> {a}  </h4>
            <h4>
              <span onClick={ ()=> {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                changeLike(copy)} }> 👍 </span> {like[i]} 
            </h4>   
            <p>2월 7일 발행</p>
            <button onClick={ ()=> {
              let copy = [...title];  
              copy[i] = '여자 코트 추천';
              changeTitle(copy)       
              }}> 수정 </button>
          </div>
        )
      })} 
      {modal == true ? <Modal title={title} titleNum={titleNum}></Modal> : null}
      
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal' style={{ background : props.color }}>
      <h4>{props.title[props.titleNum]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
