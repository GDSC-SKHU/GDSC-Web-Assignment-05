import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Seats from './Seats';
import { clear } from 'console';

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

const StyledmoiveName = styled.h2`
  color: white;
  font-weight: 700;

  text-align: center;
`;

const StyledmoviePrice = styled.section``;

/*
좌석이 배열에 있는데, 다시 누른다 -> 취소를 하고, 배열에 없으면 넣어주고 좌석이 선택되게 함
*/

export default function IsqueryExists() {
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
  const [activeseatArray, setactivesetArray] = useState<string[]>([]);

  console.log(activeseatArray.length);
  function seatbutClick(event: React.MouseEvent<HTMLButtonElement>) {
    const activeseatNode = event.currentTarget;
    const activeseatNumber = event.currentTarget.innerHTML;

    if (activeseatArray.includes(activeseatNumber)) {
      setactivesetArray(
        activeseatArray.filter((seat) => seat !== activeseatNumber)
      );
      activeseatNode.style.backgroundColor = '#b1b1b1';
      setseatNum(seatNum - 1);
    } else {
      setseatNum(seatNum + 1);
      setactivesetArray([...activeseatArray, activeseatNumber]);
      activeseatNode.style.backgroundColor = '#50bcdf';
    }
  }
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
        {Seats(seatbutClick)}
      </StyledWrapper>
      {Number.isNaN(totalmovieprice) ? null : <span>{totalmovieprice}</span>}
      <button>예매</button>
    </>
  );
}
