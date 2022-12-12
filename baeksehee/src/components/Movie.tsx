import styled from "styled-components";

interface IMovie {
  poster: string;
  title: string;
  introduce: string;
}

const movie: IMovie[] = [
  {
    poster: "../Avatar.jpg",
    title: "아바타2",
    introduce: "흥행이 예상되는 영화",
  },
  { poster: "../Endgame.jpg", title: "엔드게임", introduce: "마블" },
  { poster: "../noWayHome.jpg", title: "노웨이홈", introduce: "스파이더맨" },
  {
    poster: "../TheNightOwl.jpg",
    title: "올빼미",
    introduce: "요즘 뜬 스릴러",
  },
  {
    poster: "../Twilight.jpg",
    title: "트와일라잇",
    introduce: "뱀파이어와 인간의 만남",
  },
];

function List() {
  return (
    <StyledDiv>
        <StyledH1>영화관</StyledH1>

      {movie.map((each, index) => {
        return (
          <StyledArticle key={index}>
            <img src={each.poster} alt="포스터사진" />
            <br />
            <br />
            <StyledSpan>제목:{each.title}</StyledSpan>
            <br />
            <StyledP>소개:{each.introduce}</StyledP>
          </StyledArticle>
        );
      })}
    </StyledDiv>
  );
}

export default List;

const StyledDiv = styled.div`
  background-color: #010101;

  display: flex;
  justify-content: space-evenly;
  gap: 25px;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  color: white;

  text-align: center;

  margin-left: 25px;
`;

const StyledArticle = styled.article`
  padding-top: 60px;
  padding-left: 40px;

  width: 600px;
  height: 600px;

  background-color: #010101;
  border: solid 1px white;
`;

const StyledSpan = styled.span`
  font-size: 30px;
  color: white;
`;

const StyledP = styled.p`
  font-size: 15px;
  color: white;
`;
