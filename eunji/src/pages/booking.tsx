import Link from "next/link";
import styled from "styled-components";
import Select from "../components/Select";
import Select2 from "../components/Select2";

export default function Booking() {
    return(
        <div>
            <h1>예매사이트</h1>
            {/* <Select /> */}
            <Select2 />
        </div>
    )
}

// 2. 좌석 선택 가능하게

// 1. 선택 불가 좌석 배치하기