import styled from "styled-components";
import Seating from "../components/Seating";
import SeatingOccupied from "../components/SeatingOccupied";

const BookingSection = () => {
  const seatingArray = [];
  const seatingOccupied = true;
  const seatingNone = false;

  //숫자 10 이상으로 랜덤을 넣진 않을 것.
  const seatingRandomConst = 10;
  let seatingRandomCount = 0;

  //일단 배열을 0으로 초기화
  for (let i = 0; i <= 55; ++i) {
    seatingArray.push({ number: i, seatingStatus: seatingNone });
  }

  //자리 10개를 occpied로 무작위 선정
  for (let i = 0; i < seatingRandomConst; ++i) {
    //랜덤함수를 10번 발동시킨다.
    const randomCount = Math.floor(Math.random() * 56 + 1);
    console.log(randomCount);
    //전체자리를 루프함수로 돌면서 랜덤함수에 해당하는 수의 자리라면 occupied로 바꾼다.
    for (let i = 0; i <= 55; ++i) {
      if (randomCount === seatingArray[i].number) {
        seatingArray[i].seatingStatus = seatingOccupied;
      }
    }
  }

  console.log(seatingArray);
  //map함수에 '=>'이게 인식이 안되었음. 근데 갑자기 { } 중괄호를 넣으니까 갑자기 잘됨 왜지?
  return (
    <BookingMainSection>
      <BookingGridContainer>
        {seatingArray.map((element, index) =>
          element.seatingStatus ? (
            <SeatingOccupied key={index} />
          ) : (
            <Seating key={index} />
          )
        )}
      </BookingGridContainer>
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

const BookingGridContainer = styled.div`
  width: 20em;
  height: 100%;
  margin: auto;
  padding: 2em 0em;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
`;
