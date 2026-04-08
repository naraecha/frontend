import { useState } from "react";

const CheckBox = () => {
  const [val, setVal] = useState([]);

  const handleChange = (e) => {
    const {value, checked} = e.target;

    if (checked) {
      setVal([...val, value]);
    } else {
      setVal(val.filter(e => e !== value)); // 체크가 안 된 값을 제외해서 새로운 배열을 만들어서 set
    }
  };

  return (
    <div>
      <label htmlFor="apple">
        <input type="checkbox" name="fruits" id="apple" value="apple" onChange={handleChange} />
        사과
      </label>
      <br />
      <label htmlFor="banana">
        <input type="checkbox" name="fruits" id="banana" value="banana" onChange={handleChange} />
        바나나
      </label>
      <br />
      <label htmlFor="grape">
        <input type="checkbox" name="fruits" id="grape" value="grape" onChange={handleChange} />
        포도
      </label>
      <br />
      <p>선택된 항목 : {val}</p>
    </div>
  );
};

export default CheckBox;