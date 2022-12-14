import styled from "styled-components";

interface Props {
  setSeatingCount: (seating: number) => void;
  seatingArray: boolean;
}
const Seating = ({ setSeatingCount, seatingArray }: Props) => {
  //여기가 안된다.. ㅠ 좌석이 true에서 false로 넘어가질 않아ㅠ
  const changeOccupiedStatus = (event: any) => {
    if (seatingArray === false) {
      console.log(seatingArray);
      seatingArray = true;
      event.target.style.backgroundColor = "#7ED0FF";
      //number로 지정했는데도 변경안됨.
      setSeatingCount((prev) => prev + 1);
      console.log(seatingArray);
    } else {
      seatingArray = false;
      event.target.style.backgroundColor = "#000000";
      // setSeatingCount((prev) => prev - 1);
      console.log(seatingArray);
    }
  };
  return <SeatingCss onClick={changeOccupiedStatus}></SeatingCss>;
};
export default Seating;

const SeatingCss = styled.div`
  width: 1em;
  height: 1em;
  background: black;
`;
