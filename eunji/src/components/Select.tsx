import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

export default function Select () {
    const [number, setNumber] = useState<number>(1);
    const [price, setPrice] = useState<number>(3);
    const [result, setResult] = useState<number>(3);

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
        else router.push('/purchase')
    };

    return (
        <div>
            <select value={price} onChange={onSelectChange}> 
                <option value={600}>Aladin(600원)</option>
                <option value={700}>Beauty and the Beast(700원)</option>
                <option value={800}>범죄도시2(800원)</option>
            </select>

            <button onClick={() => setNumber(prev => prev + 1)}>up</button>
            <button onClick={() => setNumber(prev => prev - 1)}>down</button>

            <h2>{number}명 {result}원</h2>

            <button onClick={onClickPurchase}>결제하기</button>
        </div>

    )
}