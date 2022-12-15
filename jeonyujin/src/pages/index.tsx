import List from "../components/List";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <StyledBody>
        <StyledH2>Movie Chart</StyledH2>
        <StyledSection>
          <List
            id={1}
            title="검사외전"
            imgSrc="/검사외전.jpg"
            degree={5}
            star="⭐⭐⭐⭐⭐"
            content="검사 황정민과 사기꾼 강동원의 유쾌한 버디 플레이."
            recommend="강동원 특유의 능글맞고 재치있는 연기와 황정민의 감정 실린 연기가 어우러져 재미와 몰입도 모두를 챙길 수 있다. 또한 나머지 등장인물들도 꽤나 재미있음."
          />
          <List
            id={2}
            title="청년경찰"
            imgSrc="/청년경찰.jpg"
            degree={4.5}
            star="⭐⭐⭐⭐✰"
            content="두 경찰 강하늘, 박서준의 혈기왕성한 청춘수사액션"
            recommend="여러 번 보아도 질리지 않을 정도로 재미있고 강하늘과 박서준의 케미는 직접 영화를 보면 느껴볼 수 있다. 하지만 범죄가 조금 저급해서 호불호가 갈릴 수 있음."
          />
          <List
            id={3}
            title="마녀"
            imgSrc="/마녀.jpg"
            degree={4}
            star="⭐⭐⭐⭐"
            content="기억을 잃은 고등학생 김다미와 그런 다미 앞에 나타난 의문의 남자 최우식의 미스터리 액션"
            recommend=" 잔인한 장면이 포함되어 있어 호불호가 갈릴 수 있고 초반에는 내용이 나오지 않아 이해하기 어렵거나 지루할 수 있음."
          />
          <List
            id={4}
            title="전우치"
            imgSrc="/전우치.jpg"
            degree={5}
            star="⭐⭐⭐⭐⭐"
            content="조선의 천방지축 히어로인 전우치, 그는 강동원이다."
            recommend="추석이나 명절에 특선영화로 보게 되면 개꿀잼. 브금 또한 찰져서 전우치 등장과 함께 들으면 흥을 감출 수 없음. 강동원은 연기가 체질인 것 같다."
          />
          <List
            id={5}
            title="서치"
            imgSrc="/서치.jpg"
            degree={4}
            star="⭐⭐⭐⭐"
            content="48시간이 넘도록 연락이 되지 않는 딸.. 그리고 부재중 전화 3통. 아빠는 딸을 찾기 위해 나선다."
            recommend="흔적을 찾는 과정에서 흥미진진함과 놀라움을 감출 수 없는데 중반부에는 조금 흐름이 끊겨 집중도가 떨어질 수 있음."
          />
        </StyledSection>
      </StyledBody>
    </>
  );
}

const StyledH2 = styled.span`
  font-size: x-large;
  padding: 20 5px;
  margin-top: 20px;
  margin-left: 10px;
  border: 2px solid white;
  color: aliceblue;
`;

const StyledBody = styled.div`
  margin-top: 10px;
  background-color: #040404;
`;

const StyledSection = styled.section`
  display: flex;
  margin-top: 10px;
`;
