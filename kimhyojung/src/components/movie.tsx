import styled from 'styled-components';
import Movie from '../constants';

const StyledMovie = styled.article`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledmovieName = styled.p`
  width: 100%;
`;

const StyledmovieImage = styled.img`
  vertical-align: bottom;
  height: 80%;
  max-height: 300px;
  width: 100%;
  object-fit: cover;
  display: flex;
`;

const StyledmovieContent = styled.div`
  width: 100%;
  display: flex;
  opacity: 0;
`;

export default function MovieComponent({
  name,
  imgSrc,
  imgAlt,
  content,
}: Movie) {
  return (
    <StyledMovie>
      <StyledmovieImage src={imgSrc} alt={imgAlt} />
      <StyledmovieName>{name}</StyledmovieName>
    </StyledMovie>
  );
}
