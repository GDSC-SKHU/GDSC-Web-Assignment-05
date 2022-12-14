import type { AppProps } from "next/app";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <nav>
        <StyledH1>전유진의 영화관</StyledH1>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

const StyledH1 = styled.h1`
  text-align: center;
  background-color: aliceblue;
  padding: 20px;
  margin: 0;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
