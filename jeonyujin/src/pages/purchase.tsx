import { useRouter } from "next/router";
import styled from "styled-components";

export default function Purchase() {
  const router = useRouter();

  const Movie = () => {
    router.push({
      pathname: "/",
    });
  };
  // 초기 영화 화면으로 이동

  return (
    <>
      <StyledBox>
        <StyledDiv>
          <StyledH1>영화 제목: {router.query.title}</StyledH1>
          <StyledSection>
            <StyledArticle>
              <p>총 {router.query.people}명</p>
            </StyledArticle>
            <StyledArticle>
              <p>총 금액: {router.query.price}원</p>
            </StyledArticle>
            <StyledP>결제 완료되었습니다.</StyledP>
            <StyledP>다음에 또 이용해주세요 :)</StyledP>
          </StyledSection>
        </StyledDiv>
      </StyledBox>
      <BackBtn onClick={Movie}>돌아가기</BackBtn>
    </>
  );
}

const StyledBox = styled.div`
  background-color: #d7faf2;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledH1 = styled.h1``;

const StyledSection = styled.section`
  margin-bottom: 50px;
`;

const StyledArticle = styled.article`
  display: inline-flex;
  margin: 50px;
  padding: 10px;
`;

const StyledP = styled.p`
  margin: 20px;
`;

const BackBtn = styled.button`
  background-color: #0a6bff;
  border-radius: 4px;
  border: 0;
  box-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,
    rgba(0, 44, 97, 0.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Space Grotesk", -apple-system, system-ui, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 20px;
  min-height: 56px;
  min-width: 120px;
  padding: 16px 20px;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    background-color: #065dd8;
    transform: translateY(-2px);
  }
`;
