/*eslint-disable*/
import {useState} from 'react'
import './App.css';

function App() {

  let [title,changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  let [title1,changeTitle1] = useState('남자 코트 추천')
  let [title2,changeTitle2] = useState('강남 우동 맛집')
  let [title3,changeTitle3] = useState('파이썬 독학')
  let posts = '강남 우동 맛집'
  let [like, changeLike] = useState([0, 0, 0])
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>dev blog</div>
      </div>
      {title.map(function(a,i){
        return (
          <div className='list' key={i}>
            <h4 onClick={ () => {setModal(!modal);} }> {a}  </h4>
            <h4>
              <span onClick={ ()=> {
                let copy = [...like];
                copy[i] = copy[i] + 1; 
                changeLike(copy)} }> 👍 </span> {like[i]} 
            </h4>    
            {modal == true ? <Modal title={a}></Modal> : null}
            <p>2월 7일 발행</p>
            <button onClick={ ()=> {
              let copy = [...title];  
              copy[i] = '여자 코트 추천';
              changeTitle(copy)       
              }}> 수정 </button>
          </div>
        )
      })}
      {/* <div className="list">
        <h4 onClick={ () => {setModal(!modal);} }>{title[0]}  <span onClick={ ()=> {changeLike(like + 1)} }>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
        <button onClick={ ()=> {
          let copy = [...title];  // 그냥 let copy = title 하면 같은 주소를 가리키기 때문에 값복사해줌 (deep copy) (점 세개 : spread operator. ex>...[1,2,3] == 1,2,3)
          copy[0] = '여자 코트 추천';
          changeTitle(copy)       // 주소복사 하는 경우 copy = title 이어서 화면 변경 안됨
          }}> 수정 </button>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <button onClick={ ()=> {
          let copy = [...title];
          copy.sort();
          changeTitle(copy)
          }}> 정렬 </button>
      </div>
      {modal == true ? <Modal></Modal> : null} */}
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal' style={{ background : props.color }}>
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
