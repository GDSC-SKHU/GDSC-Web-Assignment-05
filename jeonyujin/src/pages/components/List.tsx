import Link from "next/link";
import styled from "styled-components";

interface Props {
  id: number;
  title: string;
  imgSrc: string;
  degree: number;
  star: string;
  content: string;
  recommend: string;
  // 제목, 내용, 추천 점수
}

const List = ({ id, title, imgSrc, degree, star, content, recommend }: Props) => {
  return (
    <>
      <StyledArticle>
        <StyledH1>
          {id}. {title}
        </StyledH1>
        {/* 영화 이미지 클릭 시 영화 예매 페이지 이동 */}
        <Link href="../booking/Movie">
          <StyledImg src={imgSrc} alt={title} />
        </Link>
        <StyledDiv>
          {degree}
          {star}
        </StyledDiv>
        <StyledContent>{content}</StyledContent>
        <StyledContent>{recommend}</StyledContent>
      </StyledArticle>
    </>
  );
};

const StyledArticle = styled.article`
  all: unset;
  width: 450px;
  height: 640px;
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid white;
  color: white;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  &:hover {
    transition: all 0.5s;
    background-color: #03242f;
    border: 5px solid white;
    border-radius: 30px;
  }
`;

const StyledH1 = styled.h1`
  padding: 15px;
  text-align: center;
  font-size: large;
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StyledDiv = styled.div`
  padding: 10px;
  text-align: center;
`;

const StyledContent = styled.div`
  padding: 10px;
  text-align: center;
`;

export default List;
