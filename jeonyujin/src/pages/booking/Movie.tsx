import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

// interface Movie {
//   id: number;
//   title: string;
//   price: number;
// }

// const Movies: Movie[] = [
//   {
//     id: 0,
//     title: '검사외전',
//     price: 500,
//   },
//   {
//     id: 1,
//     title: '청년경찰',
//     price: 400,
//   },
//   {
//     id: 2,
//     title: '마녀',
//     price: 300,
//   },
//   {
//     id: 3,
//     title: '전우치',
//     price: 500,
//   },
//   {
//     id: 4,
//     title: '서치',
//     price: 300,
//   },
// ];

export default function Movie() {
  const [people, setPeople] = useState<number>(0);
  // 인원 수
  const [price, setPrice] = useState<number>(10000);
  // 영화 가격
  const [result, setResult] = useState<number>(0);
  // 총 가격
  const [id, setID] = useState<number>(1);
  // 영화 아이디값
  const [title, setTitle] = useState<string>("검사외전");
  // 영화 제목
  const router = useRouter();
  // 구매 페이지 이동

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setID(Number(e.target.value));

    if (e.target.value == "1") {
      setTitle("검사외전");
      setPrice(10000);
    } else if (e.target.value == "2") {
      setTitle("청년경찰");
      setPrice(9000);
    } else if (e.target.value == "3") {
      setTitle("마녀");
      setPrice(8000);
    } else if (e.target.value == "4") {
      setTitle("전우치");
      setPrice(10000);
    } else if (e.target.value == "5") {
      setTitle("서치");
      setPrice(8000);
    }
  };
  // 비효율적인 것 같음
  // interface 작성 후 change로 불러오려고 Movies.id를 적어보니 속성이 없다고 함

  useEffect(() => {
    setResult(price * people);
  }, [price, people]);
  // 인원 수만큼 가격 변화

  const onReset = () => {
    setPeople(0);
    setPrice(0);
  };
  // 미선택 시 초기화

  // 좌석 선택 이벤트
  const onClickSeat = (e: React.MouseEvent<HTMLElement>) => {
    const SeatStyle = e.currentTarget;
    if (e.currentTarget.classList.contains("occupied")) {
      alert("이미 예약된 좌석입니다.");
      return;
    } else if (e.currentTarget.classList.contains("selected")) {
      setPeople(people - 1);
      SeatStyle.style.backgroundColor = "blue";
      SeatStyle.classList.remove("selected");
      // else if 구문 미작동
    } else {
      setPeople(people + 1);
      SeatStyle.classList.add("seleted");
      SeatStyle.style.backgroundColor = "green";
    }
  };

  const onClickPurchase = () => {
    if (people <= 0) {
      alert("좌석을 선택하지 않으셨습니다.");
      onReset();
      return;
    }
    router.push({
      pathname: "/purchase",
      query: { people: people, title: title, price: result },
    });
    // 구매 페이지로 값과 함께 이동
  };

  const onBack = () => {
    router.push({
      pathname: "/",
    });
  };
  // 이전 페이지

  return (
    <StyledBox>
      <StyledH1>영화 예매하기</StyledH1>
      <select>
        <select value={id} onChange={onSelectChange}>
          <option value={1}>검사외전(10000원)</option>
          <option value={2}>청년경찰(9000원)</option>
          <option value={3}>마녀(8000원)</option>
          <option value={4}>전우치(10000원)</option>
          <option value={5}>서치(8000원)</option>
        </select>
      </select>

      <StyledSeats>
        <StyledP>영화관</StyledP>
        <StyledScreen>screen</StyledScreen>
        {/* 선택된 자석 및 미선택 좌석 무작위 배치 */}
        <div>
          <StyledSpan>A</StyledSpan>
          <EmptySeat onClick={onClickSeat}>A1</EmptySeat>
          <EmptySeat onClick={onClickSeat}>A2</EmptySeat>
          <EmptySeat onClick={onClickSeat}>A3</EmptySeat>
          <EmptySeat onClick={onClickSeat}>A4</EmptySeat>
        </div>
        <div>
          <StyledSpan>B</StyledSpan>
          <OccupiedSeat className="occupied" onClick={onClickSeat}>
            B1
          </OccupiedSeat>
          <EmptySeat onClick={onClickSeat}>B2</EmptySeat>
          <EmptySeat onClick={onClickSeat}>B3</EmptySeat>
          <EmptySeat onClick={onClickSeat}>B4</EmptySeat>
        </div>
        <div>
          <StyledSpan>C</StyledSpan>
          <EmptySeat onClick={onClickSeat}>C1</EmptySeat>
          <OccupiedSeat className="occupied" onClick={onClickSeat}>
            C2
          </OccupiedSeat>
          <OccupiedSeat className="occupied" onClick={onClickSeat}>
            C3
          </OccupiedSeat>
          <EmptySeat onClick={onClickSeat}>C4</EmptySeat>
        </div>
        <div>
          <StyledSpan>D</StyledSpan>
          <OccupiedSeat className="occupied" onClick={onClickSeat}>
            D1
          </OccupiedSeat>
          <EmptySeat onClick={onClickSeat}>D2</EmptySeat>
          <OccupiedSeat className="occupied" onClick={onClickSeat}>
            D3
          </OccupiedSeat>
          <EmptySeat onClick={onClickSeat}>D4</EmptySeat>
        </div>
      </StyledSeats>

      <StyledH2>
        총 {people}명 {result}원
      </StyledH2>
      <BackBtn onClick={onBack}>이전 페이지</BackBtn>
      <PurchaseBtn onClick={onClickPurchase}>결제하기</PurchaseBtn>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  text-align: center;
`;

const StyledP = styled.p`
  padding: 10px 0 0 0;
  font-weight: 900;
`;

const StyledH1 = styled.h1`
  margin-top: 50px;
  font-size: 1.5em;
  color: white;
`;

const StyledH2 = styled.h2`
  color: white;
`;

const StyledScreen = styled.span`
  display: inline-flex;
  background-color: #5b5050;
  padding: 0 200px 0 200px;
  margin: 10px;
`;

const StyledSeats = styled.span`
  display: block;
  background-color: #d7faf2;
  margin: 0 200px 0 200px;
`;

const StyledSpan = styled.span`
  margin-right: 40px;
  padding: 10px;
  border: 5px solid white;
  border-radius: 20%;
  font-weight: 900;
`;

const EmptySeat = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border: 5px solid black;
  border-radius: 20%;
`;

const OccupiedSeat = styled.div`
  background-color: #e66161;
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border: 5px solid black;
  border-radius: 20%;
`;

const BackBtn = styled.button`
  margin-right: 10px;
  background-color: #0a6bff;
  border-radius: 4px;
  border: 0;
  box-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,
    rgba(0, 44, 97, 0.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #065dd8;
    transform: translateY(-2px);
  }
`;

const PurchaseBtn = styled.button`
  margin-right: 10px;
  background-color: #0a6bff;
  border-radius: 4px;
  border: 0;
  box-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,
    rgba(0, 44, 97, 0.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #065dd8;
    transform: translateY(-2px);
  }
`;
