import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';
interface Props {
  title: string;
  postImage: string;
}
const Movie = ({ title, postImage }: Props) => {
  const router = useRouter();
  return (
    <>
      <StyledBox>
        <div>
          <StyledPostImage src={postImage} alt='postImage' />
        </div>
        <StyledInfo>
          <StyledH1>{title}</StyledH1>
          <StyledBotton onClick={() => router.push('/Booking')}>예매하기</StyledBotton>
        </StyledInfo>
      </StyledBox>
    </>
  );
};
export default Movie;

const StyledBox = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
`;
const StyledPostImage = styled.img`
  width: 200px;
  height: 320px;
  padding: 10px;
`;
const StyledH1 = styled.h1`
  margin-bottom: 50px;
`;
const StyledBotton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  background-color: transparent;
  padding: 15px;
  font-size: 20px;
  &:hover {
    background-color: #edce8c;
    transition: all 0.3s;
  }
`;
