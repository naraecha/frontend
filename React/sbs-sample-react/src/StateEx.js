// 이름, 회사, 주소, 이메일을 입력 받아 제출 버튼을 누르면 정보를 화면에 표시하기
// onChange, onClick, useState 사용

import { useState } from "react";

const NameCardEx = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    address: "",
    email: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = () => {
    setResult(form);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="company"
        placeholder="회사"
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="address"
        placeholder="주소"
        onChange={handleChange}
      />
      <br />

      <input
        type="email"
        name="email"
        placeholder="이메일"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit}>제출</button>

      {result && (
        <div>
          <p>이름: {result.name}</p>
          <p>회사: {result.company}</p>
          <p>주소: {result.address}</p>
          <p>이메일: {result.email}</p>
        </div>
      )}
    </div>
  );
};

export default NameCardEx;