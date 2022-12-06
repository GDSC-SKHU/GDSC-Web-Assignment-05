import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

const seatArray: Array<string> = new Array<string>();

export default function Select2() {
    const [number, setNumber] = useState<number>(1);
    const [price, setPrice] = useState<number>(600);
    const [result, setResult] = useState<number>(3);
    const [name, setName] = useState<string>('Aladin');

    const [seatNum, setseatNum] = useState<number>(0);
 
    const router = useRouter();

    // 가격 바뀌게
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setPrice(Number(e.target.value));
        // 타겟은 기본적으로 String
    };

    const onSelectChange2 = (e: { target: { value: any; }; }) => {
        const { value } = e.target;
        setName(e.target.value);
    };

    useEffect(() => {
        const actualNumber = number;
        setResult(price * actualNumber);
    }, [price, number]);

    const onReset = () => {
        setNumber(0);
        setPrice(0);
    }

    const onClickPurchase = () => {
        if (number <= 0) {
            alert('좌석을 선택해 주세요.');
            onReset();
            setPrice(600);
            return;
        }
        else router.push({
            pathname: '/purchase',
            query: { name: name, person: number, price: result },
        });
    };

    const SeatSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        const seatNode = e.currentTarget;
        const seatNumber = e.currentTarget.innerHTML;

        if (seatArray.includes(seatNumber)) {
            const seatIndex = seatArray.indexOf(seatNumber);
            delete seatArray[seatIndex];
            seatNode.style.backgroundColor = "#ad1712";
            setNumber(prev => prev + 1);
        } else {
            setNumber(prev => prev - 1);
            seatArray.push(seatNumber);
            seatNode.style.backgroundColor = "#666";
        }
    }

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
                <UDBtn onClick={SeatSelect}>up</UDBtn>
                <Seat />
                <UDBtn onClick={() => setNumber(prev => prev + 1)}>up</UDBtn>
                <UDBtn onClick={() => setNumber(prev => prev + 1)}>up</UDBtn>
                <UDBtn onClick={() => setNumber(prev => prev + 1)}>up</UDBtn>
                <UDBtn onClick={() => setNumber(prev => prev + 1)}>up</UDBtn>
            </StyledDiv>
            <StyledDiv>
                <UDBtn onClick={() => setNumber(prev => prev - 1)}>down</UDBtn>
                <UDBtn onClick={() => setNumber(prev => prev - 1)}>down</UDBtn>
                <UDBtn onClick={() => setNumber(prev => prev - 1)}>down</UDBtn>
                <Seat />
                <Seat />
                <UDBtn onClick={() => setNumber(prev => prev - 1)}>down</UDBtn>
            </StyledDiv>
            <Collect>
                <Occupied />
                <p>: 이미 선택된 좌석</p>
            </Collect>

            <h2>선택하신 인원수는 {number}명, 총 금액은 {result}원입니다.</h2>

            <PurchaseBtn onClick={onClickPurchase}>결제하기</PurchaseBtn>
        </Container>
    )
}

const Collect = styled.div`
display: flex;
`;

const Occupied = styled.div`
color: #fff;
width: 25px;
height: 25px;
border: 1px solid #dbdee2;
border-radius: 10px;
margin-top: 1rem;
background-color: #404a5c;
`;

const Seat = styled.div`
color: #fff;
width: 40px;
height: 40px;
border: 1px solid #dbdee2;
border-radius: 10px;
margin: 0 5px;
background-color: #404a5c;
`;

const ScreenDiv = styled.div`
background-color: #E6E6E6;
width: 20em;
height: 10em;
margin-top: 2rem;
margin-bottom: 1rem;
border-radius: 1rem;
box-shadow: 0px 0px 1rem #000;
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
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
margin-top: 2rem;
all: unset;
border: 1px solid red;
border-radius: 20px;
padding: 5px 10px;
text-align: center;
transition: 0.2s;
cursor: pointer;

// &:hover {
//     color: red;
//     transform: translateY(-5px);
// }
`;let UDBtn = styled.button`
background-color: #fff;
width: 40px;
height: 40px;
border: 1px solid #dbdee2;
border-radius: 10px;
margin: 0 5px;
color: #404a5c;
cursor: pointer;
&:hover {
    color: white;
    background-color: black;
}
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