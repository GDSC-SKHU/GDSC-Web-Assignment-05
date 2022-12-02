import styled from "styled-components";
import { useRouter } from "next/router";

export default function Purchase() {

    const router = useRouter();

    return(
        <div>
            <h1>결제</h1>
            <h2>선택하신 영화는 {router.query.name}(이)며 인원수는 {router.query.person}명, 총 금액은 {router.query.price}원입니다.</h2>
        </div>
    )   
}

// 무슨 영화, n명, 결제 금액 보여주기
// 키워드 : router query