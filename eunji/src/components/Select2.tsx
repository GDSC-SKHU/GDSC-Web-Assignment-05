import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

// 좌석 선택을 위한 배열 생성
const selectArray: Array<string> = new Array<string>();

export default function Select2() {
    // 사람의 수
    const [person, setPerson] = useState<number>(0);
    // 영화의 가격
    const [price, setPrice] = useState<number>(600);
    // 총 가격
    const [total, setTotal] = useState<number>(3);
    // 영화 제목의 router query
    const [name, setName] = useState<string>('Aladin');
    // router query를 위하여 정의
    const router = useRouter();

    // 영화 선택될 때마다 가격 바뀌게 하기
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setPrice(Number(e.target.value));
        // 가격이니까 기본형인 string 말고 Number로 지정
    };

    // 영화 제목 router query(새로 선택해야 해서 다른 방법 구상 중)
    const onSelectChange2 = (e: { target: { value: any; }; }) => {
        // option의 value를 찾아 전송되는 값을 변하게 하기
        const { value } = e.target;
        setName(e.target.value);
    };

    // 선택한 인원만큼 가격 증가
    useEffect(() => {
        const realPerson = person;
        setTotal(price * realPerson);
    }, [price, person]);

    // 좌석 선택 가능하게 하기
    const SelectChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const selectColor = e.currentTarget;
        const changeSeat = e.currentTarget.innerHTML;

        // 만약 changeSeat이 selectArray에 포함된다면
        if (selectArray.includes(changeSeat)) {
            const indexSeat = selectArray.indexOf(changeSeat);
            // indexSeat를 삭제하고(기본값)
            delete selectArray[indexSeat];
            // 배경색을 변경하고
            selectColor.style.backgroundColor = "#666";
            // 값을 줄여라
            setPerson(person - 1);
        }
        // 그렇지 않으면
        else {
            // selectArray의 changeSeat을 클릭했을 때
            selectArray.push(changeSeat);
            // 배경색을 변경하고
            selectColor.style.backgroundColor = "#ad1712";
            // 값을 늘려라
            setPerson(person + 1);
        }
    }

    // 혹시 -값이나 좌석을 선택하지 않았을 시 0으로 리셋
    const onReset = () => {
        setPerson(0);
        setPrice(0);
    }

    // 좌석 선택 후 결제창으로 넘어가기
    const onClickPurchase = () => {
        // 만약 선택을 안 하면
        if (person <= 0) {
            // 해당 알림을 띄우고
            alert('좌석을 선택해 주세요.');
            // 0으로 리셋해 주고
            onReset();
            // 알라딘의 기본값인 600으로 변경해라
            setPrice(600);
            return;
        }
        // 그렇지 않으면(선택을 하면)
        else router.push({
            // purchase로 이동하고
            pathname: '/purchase',
            // 해당 값들을 purchase로 넘겨라
            query: { name: name, person: person, price: total },
        });
    };

    return (
        <Container>
            <StyledSelect2 value={price} onChange={onSelectChange}>
                <option value={600}>Aladin(600원)</option>
                <option value={700}>Beauty and the Beast(700원)</option>
                <option value={800}>범죄도시2(800원)</option>
            </StyledSelect2>

            <StyledSelect value={name} onChange={onSelectChange2}>
                <option value={'Aladin'}>Aladin(600원)</option>
                <option value={'Beauty and the Beast'}>Beauty and the Beast(700원)</option>
                <option value={'범죄도시2'}>범죄도시2(800원)</option>
            </StyledSelect>

            <ScreenDiv />

            <StyledDiv>
                <UDBtn onClick={SelectChange}>1</UDBtn>
                <Seat>2</Seat>
                <UDBtn onClick={SelectChange}>3</UDBtn>
                <UDBtn onClick={SelectChange}>4</UDBtn>
                <UDBtn onClick={SelectChange}>5</UDBtn>
                <UDBtn onClick={SelectChange}>6</UDBtn>
            </StyledDiv>
            <StyledDiv>
                <UDBtn onClick={SelectChange}>7</UDBtn>
                <UDBtn onClick={SelectChange}>8</UDBtn>
                <Seat>9</Seat>
                <Seat>10</Seat>
                <UDBtn onClick={SelectChange}>11</UDBtn>
                <UDBtn onClick={SelectChange}>12</UDBtn>
            </StyledDiv>
            <StyledDiv>
                <UDBtn onClick={SelectChange}>13</UDBtn>
                <UDBtn onClick={SelectChange}>14</UDBtn>
                <UDBtn onClick={SelectChange}>15</UDBtn>
                <UDBtn onClick={SelectChange}>16</UDBtn>
                <UDBtn onClick={SelectChange}>17</UDBtn>
                <Seat>18</Seat>
            </StyledDiv>
            <StyledDiv>
                <UDBtn onClick={SelectChange}>19</UDBtn>
                <UDBtn onClick={SelectChange}>20</UDBtn>
                <UDBtn onClick={SelectChange}>21</UDBtn>
                <UDBtn onClick={SelectChange}>22</UDBtn>
                <UDBtn onClick={SelectChange}>23</UDBtn>
                <UDBtn onClick={SelectChange}>24</UDBtn>
            </StyledDiv>
            <StyledDiv>
                <UDBtn onClick={SelectChange}>25</UDBtn>
                <UDBtn onClick={SelectChange}>26</UDBtn>
                <UDBtn onClick={SelectChange}>27</UDBtn>
                <Seat>28</Seat>
                <UDBtn onClick={SelectChange}>29</UDBtn>
                <UDBtn onClick={SelectChange}>30</UDBtn>
            </StyledDiv>

            <Collect>
                <Occupied />
                <p>: 이미 예매된 좌석</p>
                <Selected />
                <p>: 선택한 좌석</p>
                <Vacation />
                <p>: 예매 가능한 좌석</p>
            </Collect>

            <h2>선택하신 인원수는 {person}명, 총 금액은 {total}원입니다.</h2>

            <PurchaseBtn onClick={onClickPurchase}>결제하기</PurchaseBtn>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin: 0 5vw;
padding: 1rem 0;

background-color: #d4d3c9;

border: 1px solid black;
`;

const Vacation = styled.div`
width: 25px;
height: 25px;
margin-top: 1rem;
margin-left: 1rem;

background-color: #666;
color: #fff;

border: 1px solid #dbdee2;
border-radius: 10px;
`;

const Selected = styled.div`
width: 25px;
height: 25px;
margin-top: 1rem;
margin-left: 1rem;

background-color: #ad1712;
color: #fff;

border: 1px solid #dbdee2;
border-radius: 10px;
`

const Collect = styled.div`
display: flex;
`;

const Occupied = styled.div`
width: 25px;
height: 25px;
margin-top: 1rem;

background-color: #bbb;
color: #fff;

border: 1px solid #dbdee2;
border-radius: 10px;
`;

const Seat = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 40px;
height: 40px;
margin: 0 5px;

background-color: #bbb;
color: #fff;

border-radius: 10px;
font-size: small;
`;

const ScreenDiv = styled.div`
width: 20em;
height: 10em;
margin-top: 2rem;
margin-bottom: 1rem;

background-color: #E6E6E6;

border-radius: 1rem;
box-shadow: 0px 0px 1rem #000;
`;

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;

margin-top: 1rem;
`;

const StyledSelect = styled.select`
display: none;
`;

const StyledSelect2 = styled.select`
all: unset;

margin-top: 2rem;
padding: 5px 10px;

border: 1px solid red;
border-radius: 20px;
text-align: center;
cursor: pointer;
`;

const UDBtn = styled.button`
width: 40px;
height: 40px;
margin: 0 5px;

background-color: #666;
color: white;

border: none;
border-radius: 10px;
cursor: pointer;
`;

const PurchaseBtn = styled.button`
background-color: black;
color: white;
font-size: 1rem;

padding: 8px 15px;
cursor: pointer;

border: 1px solid black;
border-radius: 1rem;
&:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
}
`;