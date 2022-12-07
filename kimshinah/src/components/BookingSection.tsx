import styled from "styled-components";
import Seating from "../components/Seating";

const BookingSection = () => {
  const seatingCount = ["1", "2", "3"];

  //map함수에 '=>'이게 인식이 안되었음. 근데 갑자기 { } 중괄호를 넣으니까 갑자기 잘됨 왜지?
  return (
    <BookingMainSection>
      {seatingCount.map((element, index) => (
        <Seating key={index} />
      ))}
    </BookingMainSection>
  );
};
export default BookingSection;

const BookingMainSection = styled.article`
  width: 100%;
  height: 70vh;
  background: #f2f0e5;
  border: 0.2em solid #e0dcc6;
`;
