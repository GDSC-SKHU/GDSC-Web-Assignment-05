import styled from 'styled-components';
import React from 'react';
import Movie from '../components/Movie';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <>
        <StyledLogo>
          <Image src='/logo.png' alt='some' width={465} height={70} />
        </StyledLogo>
        <Movie title='F1 : 본능의 질주' postImage='/f1.jpg'></Movie>
        <Movie title='범죄도시 2' postImage='/crimecity2.jpg'></Movie>
        <Movie title='블랙펜서 2' postImage='/blackpanther2.png'></Movie>
        <Movie title='아바타 2' postImage='/avatar2.jpg'></Movie>
        <Link href='/Purchase'>Purchase page</Link>
      </>
    </>
  );
}

const StyledLogo = styled.p`
  margin-top: 10px;
`;
