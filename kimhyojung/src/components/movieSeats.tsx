import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Movie, Moviequery } from '../constants';

const StyledWrapper = styled.article`
  display: flex;
  width: 50%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledmovieImage = styled.img`
  max-height: 400px;
  object-fit: cover;
  display: flex;
`;

const StyledmovieSeats = styled.section`
  width: 50%;
  background-color: #d3d3d3;
  display: flex;
  gap: 1.5px;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  align-items: center;
  border-radius: 2%;
`;
const StyledmovieSeat = styled.button`
  margin: 1px;
  font-weight: 1vw;
  width: 25px;
  height: 25px;
  background-color: #b1b1b1;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5%;
  &:hover {
    background-color: #50bcdf;
    cursor: pointer;
  }
`;

const StyledmoiveName = styled.h2`
  color: white;
  font-weight: 700;

  text-align: center;
`;

/*
여기에 위치하는게 맞을까..
*/
const activeseatArray: Array<string> = new Array<string>();
function clearallSeats() {
  while (activeseatArray.length > 0) {
    activeseatArray.pop();
  }
}

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
  const { moviename, movieimg } = router.query;
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
      <StyledWrapper>
        <StyledmovieImage src={movieimg}></StyledmovieImage>

        <StyledmovieSeats>
          <p>Screen</p>
          <div>
            <span>A</span>
            <StyledmovieSeat onClick={seatbutClick}>A1</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>A2</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>A3</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>A4</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>A5</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>A6</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>A7</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>A8</StyledmovieSeat>
          </div>
          <div>
            <span>B</span>
            <StyledmovieSeat onClick={seatbutClick}>B1</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>B2</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>B3</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>B4</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>B5</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>B6</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>B7</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>B8</StyledmovieSeat>
          </div>
          <div>
            <span>C</span>
            <StyledmovieSeat onClick={seatbutClick}>C1</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>C2</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>C3</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>C4</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>C5</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>C6</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>C7</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>C8</StyledmovieSeat>
          </div>
          <div>
            <span>D</span>
            <StyledmovieSeat onClick={seatbutClick}>D1</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>D2</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>D3</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>D4</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>D5</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>D6</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>D7</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>D8</StyledmovieSeat>
          </div>
          <div>
            <span>E</span>
            <StyledmovieSeat onClick={seatbutClick}>E1</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>E2</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>E3</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>E4</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>E5</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>E6</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>E7</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>E8</StyledmovieSeat>
          </div>
          <div>
            <span>F</span>
            <StyledmovieSeat onClick={seatbutClick}>F1</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>F2</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>F3</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>F4</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>F5</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>F6</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>F7</StyledmovieSeat>
            <StyledmovieSeat onClick={seatbutClick}>F8</StyledmovieSeat>
          </div>
        </StyledmovieSeats>
      </StyledWrapper>
      {Number.isNaN(totalmovieprice) ? null : <span>{totalmovieprice}</span>}
      <button onClick={clearallSeats}>예매</button>
    </>
  );
}
