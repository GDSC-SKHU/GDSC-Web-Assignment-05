import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Movie, Moviequery } from '../constants';
import defaultmovieImage from '../constants';
import { JsxElement } from 'typescript';

const StyledmovieSeats = styled.div`
  width: 32%;
  margin: 0 auto;
  max-height: 300px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-content: center;
`;

const StyledmovieSeat = styled.button`
  margin: 1px;
  background-color: #b1b1b1;
  border: none;
  &:hover {
    background-color: #50bcdf;
    cursor: pointer;
  }
`;

const StyledmoiveName = styled.h1`
  color: white;
  font-weight: 700;
  text-align: center;
`;

const StyledmovieImage = styled.image`
  display: flex;
`;

const activeseatArray: Array<string> = new Array<string>();

/*
좌석이 배열에 있는데, 다시 누른다 -> 취소를 하고, 배열에 없으면 넣어주고 좌석이 선택되게 함
*/

export default function MovieSeats() {
  /*
  라우터 쿼리로 넘겨준 영화의 값
  */
  const router = useRouter();
  const QUERY_MOVIE_PRICE = Number(router.query.movieprice);

  /*
  영화 이름과 이미지
  */
  const { moviename, movieimage } = router.query;
  /*
  선택한 좌석과 총 금액
  */

  const [totalmovieprice, settotalmovieprice] = useState<number>(1);
  const [seatNum, setseatNum] = useState<number>(0);
  const seatbutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    /*
    좌석마다 다른 innerHTML을 지님(고유함)
    */
    const activeseatNode = event.currentTarget;
    const activeseatNumber = event.currentTarget.innerHTML;

    if (activeseatArray.includes(activeseatNumber)) {
      const activeseatIndex = activeseatArray.indexOf(activeseatNumber);
      delete activeseatArray[activeseatIndex];
      activeseatNode.style.backgroundColor = '#b1b1b1';
      setseatNum(seatNum - 1);
    } else {
      setseatNum(seatNum + 1);
      activeseatArray.push(activeseatNumber);
      activeseatNode.style.backgroundColor = '#50bcdf';
    }
  };
  /*
  좌석이 바뀔때마다 실행
  */
  useEffect(() => {
    settotalmovieprice(seatNum * QUERY_MOVIE_PRICE);
  }, [seatNum]);

  return (
    <>
      <StyledmoiveName>{moviename}</StyledmoiveName>
      <h1>현재 선택한 좌석은 {seatNum}개</h1>
      {Number.isNaN(totalmovieprice) ? null : <span>{totalmovieprice}</span>}
      <StyledmovieSeats>
        <div>
          <StyledmovieSeat onClick={seatbutClick}>A1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>A2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>A3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>A4</StyledmovieSeat>
        </div>
        <div>
          <StyledmovieSeat onClick={seatbutClick}>B1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>B2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>B3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>B4</StyledmovieSeat>
        </div>
        <div>
          <StyledmovieSeat onClick={seatbutClick}>C1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>C2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>C3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>C4</StyledmovieSeat>
        </div>
        <div>
          <StyledmovieSeat onClick={seatbutClick}>D1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>D2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>D3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>D4</StyledmovieSeat>
        </div>
        <div>
          <StyledmovieSeat onClick={seatbutClick}>E1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>E2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>E3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>E4</StyledmovieSeat>
        </div>
        <div>
          <StyledmovieSeat onClick={seatbutClick}>F1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>F2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>F3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatbutClick}>F4</StyledmovieSeat>
        </div>
      </StyledmovieSeats>
    </>
  );
}
