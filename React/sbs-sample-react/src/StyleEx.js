import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 140px;
  height: 40px;
  cursor: pointer;
  color: white;
  border: 0;
  background: ${(props) => props.bg};
`;

const Box = styled.div`
  width: 430px;
  height: 250px;
  border-radius: 10px;
  background: ${(props) => props.color || "gray"};
`;

const StyleEx = () => {
  const [color, setColor] = useState("");

  return (
    <Container>
      <Btn>
        <Button bg="green" onClick={() => setColor("green")}>Green</Button>
        <Button bg="orange" onClick={() => setColor("orange")}>Orange</Button>
        <Button bg="purple" onClick={() => setColor("purple")}>Purple</Button>
      </Btn>

      <Box color={color} />
    </Container>
  );
};

export default StyleEx;