import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';

export default function Purchase() {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      <StyledLogo>
        <Image src='/logo.png' alt='some' width={465} height={70} />
      </StyledLogo>
      <Box>
        <h1>예매 정보</h1>
        <SelectedTitle>
          <Styledtitle>선택하신 영화 </Styledtitle>
          <Title>{router.query.title}</Title>
        </SelectedTitle>
        <div>
          <StyledSpan>인원 : {router.query.person}</StyledSpan>
          <StyledSpan>가격 : {router.query.total}</StyledSpan>
        </div>
      </Box>
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
const StyledLogo = styled.p`
  margin-top: 10px;
`;
const Box = styled.div`
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 460px;
  height: 350px;
`;
const SelectedTitle = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px 20px 80px;
  margin-bottom: 30px;
`;
const Styledtitle = styled.div`
  padding-bottom: 20px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const StyledSpan = styled.span`
  font-size: 25px;
`;
