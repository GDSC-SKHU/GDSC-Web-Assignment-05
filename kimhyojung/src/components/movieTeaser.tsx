import React from 'react';
import Embed from 'react-embed';
import styled, { StyledComponent } from 'styled-components';
import MovieComponent from './movie';
const StyledmovieTeaser = styled.div`
  width: 70%;
  margin-top: 5px;
  position: absolute;
  background-color: #037b94;
`;

export default function MovieTeaser(
  movieurl: string,
  modal: Boolean,
  setmodal: React.MouseEventHandler<HTMLButtonElement>
) {
  return (
    <StyledmovieTeaser>
      <Embed url={movieurl}></Embed>
      <button onClick={setmodal}>X</button>
    </StyledmovieTeaser>
  );
}
