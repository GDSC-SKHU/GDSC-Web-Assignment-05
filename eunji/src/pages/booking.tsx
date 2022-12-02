import Link from "next/link";
import styled from "styled-components";
import Select from "../components/Select";
import Select2 from "../components/Select2";

export default function Booking() {
    return(
        <div>
            <StyledP>아래에서 영화를 선택해 주세요.</StyledP>
            {/* <Select /> */}
            <Select2 />
        </div>
    )
}

const StyledP = styled.p `
text-align: center;
`;

// 2. 좌석 선택 가능하게