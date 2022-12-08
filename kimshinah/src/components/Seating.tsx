import styled from "styled-components";

const Seating = () => {
  const changeOccupiedStatus = () => {
    console.log("좌석 선택");
  };
  return <SeatingCss onClick={changeOccupiedStatus}></SeatingCss>;
};
export default Seating;

const SeatingCss = styled.div`
  width: 1em;
  height: 1em;
  background: black;
`;
