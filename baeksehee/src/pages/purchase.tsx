import { useRouter } from "next/router";
import styled from "styled-components";

export default function Purchase() {
  const router = useRouter();

  return (
    <StyledBody>
      <div>
        <StyledP>
          <StyledSpan>
            영화: {router.query.name}
            <br />
          </StyledSpan>
          <br />
          인원: {router.query.number}명, 결제 금액: {router.query.result}
          <br />
          <p>감사합니다!</p>
        </StyledP>
      </div>
    </StyledBody>
  );
}
const StyledBody = styled.body`
  padding: 0;
  margin: 0;
  background-color: #010101;
`;

const StyledP = styled.p`
  color: pink;
  text-align: center;
`;

const StyledSpan = styled.span`
  font-size: 40px;
`;
