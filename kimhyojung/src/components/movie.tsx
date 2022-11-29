import styled, { StyledComponent } from 'styled-components';
import { Movie } from '../constants';
import { render } from 'react-dom';
import { ChangeEvent, Fragment, useState } from 'react';
import { ReactDOM } from 'react';
import React from 'react';
import MovieTeaser from './movieTeaser';

const StyledMovie = styled.section`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 350px;
`;

const StyledmovieName = styled.p`
  width: 100%;
  font-size: 1.8%;
`;

const StyledmovieImage = styled.img`
  max-height: 300px;
  width: 100%;
  object-fit: cover;
  display: flex;
  border-radius: 6%;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const StyledmovieButton = styled.button`
  color: black;
  background-color: #f1f1f1;
  border: none;
`;

export default function MovieComponent({
  name,
  imgSrc,
  imgAlt,
  movieURL,
}: Movie) {
  const [modal, setModal] = useState<Boolean>(false);
  const showTeaser = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  return (
    <>
      <StyledMovie>
        <StyledmovieImage src={imgSrc} alt={imgAlt} />
        <StyledmovieName>{name}</StyledmovieName>
        <StyledmovieButton onClick={showTeaser}>티저보기</StyledmovieButton>
      </StyledMovie>
      {modal === true ? MovieTeaser(movieURL, modal, showTeaser) : null}
    </>
  );
}
