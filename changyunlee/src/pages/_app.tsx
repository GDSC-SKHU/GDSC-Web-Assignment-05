import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    background-color: #fff8ee;
    display: flex;
    justify-content: center;
  }
  span{
    padding: 20px;
  }
`;