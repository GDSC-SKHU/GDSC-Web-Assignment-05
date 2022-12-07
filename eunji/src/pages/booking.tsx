import styled from "styled-components";
import Select from "../components/Select";

export default function Booking() {
    return(
        <div>
            <StyledP>아래에서 영화를 선택해 주세요.</StyledP>
            <Select />
        </div>
    )
}

const StyledP = styled.p `
text-align: center;
`;