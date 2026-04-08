import React, {useState} from "react"; // 상태 관리를 위해 useState 가져옴

const Say = () => {
  const [message, setMessage] = useState(""); // 상태 관리 등록, 렌더링을 위해서 사용
  const [color, setClolor] = useState("black"); // 상태 관리 등록, 초기값을 black으로 지정

  return (
    <>
      <button onClick={()=>setMessage("안녕하세요.")}>입장</button>
      <button onClick={()=>setMessage("안녕히가세요")}>퇴장</button>
      <h2 style={{color}}>{message}</h2>
      <button style={{color:"red"}} onClick={()=>setClolor("red")}>빨간색</button>
      <button style={{color:"green"}} onClick={()=>setClolor("green")}>초록색</button>
      <button style={{color:"blue"}} onClick={()=>setClolor("blue")}>파란색</button>
      
    </>
  );
};

export default Say; // 내보내기