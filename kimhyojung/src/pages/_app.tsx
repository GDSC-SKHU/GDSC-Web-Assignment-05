import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import '../../public/fonts/font.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </>
  );
}
