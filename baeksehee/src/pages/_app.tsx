import type { AppProps } from "next/app";
import Link from "next/link";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledBody>
        <nav>
          <StyledImg src="../megabox.png"></StyledImg>

          <p>
            <Link href="/">
              <StyledSpan>상영 영화 </StyledSpan>
            </Link>
            <Link href="/booking">
              <StyledSpan>예매 하기</StyledSpan>
            </Link>
          </p>
        </nav>
      </StyledBody>

      <Component {...pageProps} />
    </>
  );
}

const StyledBody = styled.body`
  margin: 0;
  padding-top: 20px;

  padding-bottom: 50px;
  background-color: #010101;
`;

const StyledImg = styled.img`
  width: 1520px;
  height: 300px;

  overflow: hidden;
`;

const StyledSpan = styled.span`
  font-size: 20px;
  color: white;
`;
