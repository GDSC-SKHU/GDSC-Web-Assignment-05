import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

export default function Select2() {
    const [number, setNumber] = useState<number>(1);
    const [price, setPrice] = useState<number>(600);
    const [result, setResult] = useState<number>(3);
    const [name, setName] = useState<string>('');
    
    const onClickTest = () => {
        if (onclick) {
            `background-color: black;`
        }
    }
// 만약 클릭하면 result 값이 반영되게

    const router = useRouter();

    // 가격 바뀌게
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPrice(Number(e.target.value));
        // 타겟은 기본적으로 String
    };

    useEffect(() => {
        const actualNumber = number;
        setResult(price * actualNumber);
    }, [price, number]);

    const onClickPurchase = () => {
        if (number <= 0) {
            alert('좌석을 선택해 주세요.');
            return;
        }
        else router.push({
            pathname: '/purchase',
            query: {person: number, price: result},
        });
    };

    return (
        <div>
            <select value={price} onChange={onSelectChange}>
                <option value={600}>Aladin(600원)</option>
                <option value={700}>Beauty and the Beast(700원)</option>
                <option value={800}>범죄도시2(800원)</option>
            </select>

            <UDBtn onClick={() => setNumber(prev => prev + 1)}>up</UDBtn>
            <UDBtn onClick={() => setNumber(prev => prev - 1)}>down</UDBtn>

            <h2>선택하신 {name} 인원수는 {number}명, 총 금액은 {result}원입니다.</h2>

            <PurchaseBtn onClick={onClickPurchase}>결제하기</PurchaseBtn>

            <Btn onChange={onClickTest}>메뉴1</Btn>
            <Btn onChange={onClickTest}>메뉴2</Btn>
        </div>
    )
}

const UDBtn = styled.button`
background-color: #fff;
border: 1px solid #dbdee2;
color: #404a5c;
cursor: pointer;
&:hover {
    color: white;
    background-color: black;
}
`;

const Btn = styled.button `
background-color: #fff;
border: 1px solid #dbdee2;
color: #404a5c;
cursor: pointer;
&:visited {background-color: black;}
`;

const PurchaseBtn = styled.button `
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