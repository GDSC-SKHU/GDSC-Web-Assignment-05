import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Seats from './Seats';
import Router from 'next/router';
import {
  MOVIE_SEAT_ERRORMESSAGE,
  POSSIBLE_SEAT_COLOR,
  NOT_POSSIBLE_SEAT_COLOR,
  CURRENT_SEAT_COLOR,
} from '../constants';

const StyledmovieWrapper = styled.article`
  display: flex;
  width: 50%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledmovieImage = styled.img`
  max-height: 80%;
  object-fit: cover;
  display: flex;
`;

const StyledmoiveName = styled.h2`
  color: white;
  font-weight: 700;
  text-align: center;
`;

const StyledmoviePrice = styled.span`
  color: white;
`;

function getlocalStorage(moviename: string | undefined | string[]) {
  if (typeof moviename !== 'string') {
    return false;
  }
  const getlocalstorage = localStorage.getItem(moviename);
  if (typeof getlocalstorage !== 'string') {
    return false;
  }
  return JSON.parse(getlocalstorage);
}

export default function IsqueryExists() {
  /*
  라우터 쿼리로 넘겨준 영화의 값 ( 쿼리가 존재 하는 경우 처리)
  */

  const router = useRouter();
  const QUERY_MOVIE_PRICE = Number(router.query.movieprice);

  const { moviename, movieimg } = router.query;
  const [totalmovieprice, settotalmovieprice] = useState<number>(1);
  const [seatCount, setseatCount] = useState<number>(0);
  const [clickedSeats, setclickedSeats] = useState<string[]>([]);

  function seatbutClick(event: React.MouseEvent<HTMLButtonElement>) {
    const currentclickedNode = event.currentTarget;
    const currentclickedSeat = event.currentTarget.innerHTML;
    const currentclickedNodeColor = currentclickedNode.style.backgroundColor;

    if (currentclickedNodeColor === NOT_POSSIBLE_SEAT_COLOR) {
      alert(MOVIE_SEAT_ERRORMESSAGE);
      return;
    }
    if (clickedSeats.includes(currentclickedSeat)) {
      setclickedSeats(
        clickedSeats.filter((seat) => seat !== currentclickedSeat)
      );
      currentclickedNode.style.backgroundColor = POSSIBLE_SEAT_COLOR;
      setseatCount(seatCount - 1);
    } else {
      setseatCount(seatCount + 1);
      setclickedSeats([...clickedSeats, currentclickedSeat]);
      currentclickedNode.style.backgroundColor = CURRENT_SEAT_COLOR;
    }
  }
  /*
  좌석이 바뀔때마다 실행
  */
  useEffect(() => {
    settotalmovieprice(seatCount * QUERY_MOVIE_PRICE);
  }, [seatCount]);

  /*
  처음 컴포넌트가 나타날 떄 실행
  -> 로컬 스토리지에 있는 좌석(이미 선택한 좌석)이 선택불가 좌석으로 바뀌어야 하는 상황

  1) 모든 버튼을 가져옴
  2) 로컬스토리지에 값이 있는지 확인
  3) 로컬 스토리지에 값이 있다면,  로컬 스토리지를 돌면서 , 모든 버튼 중 innerHTML이 로컬스토리지의 값과 동일한 것만 추출
  4) 추출된 버튼의 색깔을 선택 불가를 나타내는 빨간색으로 바꾸고, 선택된 좌석을 담는 clickSeat를 로컬스토리지 값으로 업데이트
  */
  useEffect(() => {
    const allbuttons = Array.from(document.getElementsByTagName('button'));

    const isnotpossibleSeats = getlocalStorage(moviename);
    if (isnotpossibleSeats !== false) {
      [...isnotpossibleSeats].forEach((eachprevseat) => {
        const prevseatNodes = allbuttons.filter(
          (eachbuttonNode) => eachbuttonNode.innerHTML === eachprevseat
        );

        prevseatNodes.forEach((eachseatNode) => {
          eachseatNode.style.backgroundColor = NOT_POSSIBLE_SEAT_COLOR;
        });
      });
      setclickedSeats(isnotpossibleSeats);
    }
  }, []);

  /*예매 버튼을 눌렀을떄 로컬스토리지 값 저장 + purchase로 페이지 이동 */
  const setLocalStorage = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.localStorage.setItem(`${moviename}`, JSON.stringify(clickedSeats));
    Router.push(
      {
        pathname: '/purchase',
        query: {
          moviename: moviename,
          totalprice: totalmovieprice,
          totalseat: seatCount,
        },
      },
      'purchase' + `${moviename}`
    );
  };

  /* 취소 버튼을 누르면 로컬스토리지 값 제거 + 홈으로 이동 */
  const clearLocalStorage = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.localStorage.removeItem(`${moviename}`);
    Router.push({
      pathname: '/',
    });
  };

  return (
    <>
      <StyledmoiveName>{moviename}</StyledmoiveName>
      <StyledmovieWrapper>
        <StyledmovieImage src={movieimg}></StyledmovieImage>
        {Seats(seatbutClick)}
      </StyledmovieWrapper>
      <StyledmoviePrice>{totalmovieprice}</StyledmoviePrice>
      <button onClick={setLocalStorage}>예매</button>
      <button onClick={clearLocalStorage}>취소</button>
    </>
  );
}
