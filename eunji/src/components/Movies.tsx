import Link from 'next/link';
import styled from 'styled-components';

interface Props {
    title: string;
    imgSrc: string;
}

const Movie = ({ title, imgSrc }: Props) => {
    return (
        <StyledDiv>
            <StyledArticle>
                <Link href="/booking"><StyledImg src={imgSrc} /></Link>
            </StyledArticle>
            <Link href="/booking" style={{textDecoration: 'none', color: 'black'}}><StyledH2>{title}</StyledH2></Link>
        </StyledDiv>
    );
};

export default Movie;

const StyledDiv = styled.div`
transition: all 0.4s;
&:hover{
    transform: translateY(-15px);
}
`;

const StyledArticle = styled.article`
width: 200px;
margin: 0 5vw;
margin-top: 5vh;
`;

const StyledH2 = styled.h2`
font-size: 1rem;
text-align: center;
`;

const StyledImg = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
border-radius: 10px;
&:hover{
    box-shadow: 10px 5px 5px gray;
}
`;
