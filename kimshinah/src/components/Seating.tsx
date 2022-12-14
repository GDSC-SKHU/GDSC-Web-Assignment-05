import styled from "styled-components";
import { useState } from "react";

interface Props {
  setSeatingCount: (seating: number) => void;
  seatingArray: boolean;
}
const Seating = ({ setSeatingCount, seatingArray }: Props) => {
  const changeOccupiedStatus = (event: any) => {
    if (seatingArray == false) {
      seatingArray = true;
      event.target.style.backgroundColor = "#7ED0FF";
      setSeatingCount((prev) => prev + 1);
    } else {
      seatingArray = false;
      event.target.style.backgroundColor = "#000000";
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
