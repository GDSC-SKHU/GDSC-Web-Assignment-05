import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

export default function Booking() {
  const [number, setNumber] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [result, setResult] = useState<number>(3);

  const router = useRouter();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPrice(Number(e.target.value));
  };

  useEffect(() => {
    const actualNumber = number;
    setResult(price * actualNumber);
  }, [price, number]);

  const onClickSeat = () => {
    setNumber((prev) => prev + 1);
    
  };

  const onClickSelected = () => {
    alert("이미 예약된 좌석입니다.");
  };

  const onclickReset = () => {
    if (number >= 0) {
      setNumber(0);
      setPrice(0);
    }
  };

  const onClickPurchase = () => {
    if (number <= 0) {
      alert("좌석을 선택하지 않으셨습니다.");
      return;
    }
    router.push("/purchase");
  };

  return (
    <div>
      <StyledH1>영화 고르기</StyledH1>
      <select value={price} onChange={onSelectChange}>
        <option value={10000}>아바타 2, 10000원</option>
        <option value={11000}>엔드게임, 11000원</option>
        <option value={12000}>노웨이홈, 12000원</option>
        <option value={13000}>올빼미, 13000원</option>
        <option value={14000}>트와일라잇, 14000원</option>
      </select>

      <StyledH2>좌석 선택하기<br/><br/>스크린</StyledH2>
      <div>
        <div></div>
        <StyledDiv>
          <div>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSelected}>X</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
          </div>
          <div>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSelected}>X</StyledButton>
            <StyledButton onClick={onClickSelected}>X</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
          </div>
          <div>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSelected}>X</StyledButton>
            <StyledButton onClick={onClickSelected}>X</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
          </div>
          <div>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
          </div>
          <div>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
          </div>
        </StyledDiv>
      </div>

      <StyledH3>
        {number} 명 {result} 원
      </StyledH3>

      <button onClick={onclickReset}>초기화</button>
      <button onClick={onClickPurchase}>결제하기</button>
    </div>
  );
}
const StyledH1 = styled.h1`
  color: white;
`;

const StyledH2 = styled.h2`
  text-align: center;
  color: white;
`;

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const StyledButton = styled.button`
  background-color: #444451;
  height: 50px;
  width: 35px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StyledH3 = styled.h3`
  color: white;
`;
