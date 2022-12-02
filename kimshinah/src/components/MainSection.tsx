import styled from "styled-components";
import MovieImg from "./MovieImg";

const MainSection = () => {
  return (
    <Section>
      무비차트
      <SectionMovieImg>
        <MovieImg myNum={1} />
      </SectionMovieImg>
    </Section>
  );
};
export default MainSection;

const Section = styled.section`
  padding: 1.8em 1em;
  font-size: 1.4em;
  font-weight: 800;
`;

const SectionMovieImg = styled.div`
  display: flex;
`; //여기서 표기법을 이렇게 써도 되는지? BEM 방법론
