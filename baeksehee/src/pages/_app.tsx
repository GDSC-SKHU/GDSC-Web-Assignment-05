import type { AppProps } from "next/app";
import Link from "next/link";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledBody>
        <nav>
          <StyledImg src="../megabox.png"></StyledImg>
          <StyledP>
            <Link href="/">
              <StyledP>영화 </StyledP>
            </Link>
            <Link href="/booking">
              <StyledP>예매하기</StyledP>
            </Link>
          </StyledP>
        </nav>
      </StyledBody>

      <Component {...pageProps} />
    </>
  );
}

const StyledBody = styled.body`
  margin: 0;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
  background-color: #010101;
`;

const StyledImg = styled.img`
  width: 1470px;
  height: 300px;

  overflow: hidden;
`;

const StyledP = styled.p`
  width: 100px;
  height: 20px;

  text-decoration-line: none;
  color: white;
`;
