import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
export default function Booking() {
  const [number, setNumber] = useState<number>(0);
  const [price, setPrice] = useState<number>(5000);
  const [result, setResult] = useState<number>(0);
  const [title, setTitle] = useState<string>('F1 : 본능의 질주');
  const router = useRouter();
  const [seat1, setSeat1] = useState<boolean>(true);
  const [seat2, setSeat2] = useState<boolean>(true);
  const [seat3, setSeat3] = useState<boolean>(true);
  const [seat4, setSeat4] = useState<boolean>(true);
  const [seat5, setSeat5] = useState<boolean>(true);
  const [seat6, setSeat6] = useState<boolean>(true);
  const [seat7, setSeat7] = useState<boolean>(true);
  const [seat8, setSeat8] = useState<boolean>(true);
  const [seat9, setSeat9] = useState<boolean>(true);
  const [seat10, setSeat10] = useState<boolean>(true);
  const [seat11, setSeat11] = useState<boolean>(true);
  const [seat12, setSeat12] = useState<boolean>(true);
  const [color1, setColor1] = useState<boolean>(true);
  const [color2, setColor2] = useState<boolean>(true);
  const [color3, setColor3] = useState<boolean>(true);
  const [color4, setColor4] = useState<boolean>(true);
  const [color5, setColor5] = useState<boolean>(true);
  const [color6, setColor6] = useState<boolean>(true);
  const [color7, setColor7] = useState<boolean>(true);
  const [color8, setColor8] = useState<boolean>(true);
  const [color9, setColor9] = useState<boolean>(true);
  const [color10, setColor10] = useState<boolean>(true);
  const [color11, setColor11] = useState<boolean>(true);
  const [color12, setColor12] = useState<boolean>(true);

  const onClickPurchase = () => {
    if (number <= 0) {
      alert('좌석을 선택하세요');
      return;
    }
    router.push({ pathname: '/Purchase', query: { title: title, person: number, total: result } });
  };
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPrice(Number(e.target.value));
    if (e.target.value == '5000') {
      setTitle('F1 : 본능의 질주');
    }
    if (e.target.value == '7000') {
      setTitle('범죄도시 2');
    }
    if (e.target.value == '8000') {
      setTitle('블랙펜서 2');
    } else {
      setTitle('아바타 2');
    }
  };

  useEffect(() => {
    setResult(price * number);
  }, [price, number]);

  const onSeatChange1 = () => {
    if (seat1 == true) {
      setSeat1(false);
      setColor1(false);
      setNumber((prev) => prev + 1);
    } else if (seat1 == false) {
      setSeat1(true);
      setColor1(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange2 = () => {
    if (seat2 == true) {
      setSeat2(false);
      setColor2(false);
      setNumber((prev) => prev + 1);
    } else if (seat2 == false) {
      setSeat2(true);
      setColor2(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange3 = () => {
    if (seat3 == true) {
      setSeat3(false);
      setColor3(false);
      setNumber((prev) => prev + 1);
    } else if (seat3 == false) {
      setSeat3(true);
      setColor3(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange4 = () => {
    if (seat4 == true) {
      setSeat4(false);
      setColor4(false);
      setNumber((prev) => prev + 1);
    } else if (seat4 == false) {
      setSeat4(true);
      setColor4(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange5 = () => {
    if (seat5 == true) {
      setSeat5(false);
      setColor5(false);
      setNumber((prev) => prev + 1);
    } else if (seat5 == false) {
      setSeat5(true);
      setColor5(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange6 = () => {
    if (seat6 == true) {
      setSeat6(false);
      setColor6(false);
      setNumber((prev) => prev + 1);
    } else if (seat2 == false) {
      setSeat6(true);
      setColor6(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange7 = () => {
    if (seat7 == true) {
      setSeat7(false);
      setColor7(false);
      setNumber((prev) => prev + 1);
    } else if (seat7 == false) {
      setSeat7(true);
      setColor7(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange8 = () => {
    if (seat8 == true) {
      setSeat8(false);
      setColor8(false);
      setNumber((prev) => prev + 1);
    } else if (seat8 == false) {
      setSeat8(true);
      setColor8(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange9 = () => {
    if (seat9 == true) {
      setSeat9(false);
      setColor9(false);
      setNumber((prev) => prev + 1);
    } else if (seat9 == false) {
      setSeat9(true);
      setColor9(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange10 = () => {
    if (seat10 == true) {
      setSeat10(false);
      setColor10(false);
      setNumber((prev) => prev + 1);
    } else if (seat10 == false) {
      setSeat10(true);
      setColor10(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange11 = () => {
    if (seat11 == true) {
      setSeat11(false);
      setColor11(false);
      setNumber((prev) => prev + 1);
    } else if (seat11 == false) {
      setSeat11(true);
      setColor11(true);
      setNumber((prev) => prev - 1);
    }
  };
  const onSeatChange12 = () => {
    if (seat12 == true) {
      setSeat12(false);
      setColor12(false);
      setNumber((prev) => prev + 1);
    } else if (seat12 == false) {
      setSeat12(true);
      setColor12(true);
      setNumber((prev) => prev - 1);
    }
  };
  return (
    <>
      <GlobalStyle />
      <StyledLogo>
        <Image src='/logo.png' alt='some' width={465} height={70} />
      </StyledLogo>

      <StyledSelect value={price} onChange={onSelectChange}>
        <option value={5000}>F1 : 본능의 질주</option>
        <option value={7000}>범죄도시 2</option>
        <option value={8000}>블랙펜서 2</option>
        <option value={9000}>아바타 2</option>
      </StyledSelect>
      <Price>인당 티켓 가격: {price}</Price>
      <StyledStage>
        <StyledScreen />
        <StyledDivSeats>
          <StyledDivSeat className={`${color1 ? '' : 'seat'}`} onClick={onSeatChange1}></StyledDivSeat>
          <StyledDivSeat className={`${color2 ? '' : 'seat'}`} onClick={onSeatChange2}></StyledDivSeat>
          <StyledDivSeat className={`${color3 ? '' : 'seat'}`} onClick={onSeatChange3}></StyledDivSeat>
          <StyledDivSeat className={`${color4 ? '' : 'seat'}`} onClick={onSeatChange4}></StyledDivSeat>
          <StyledDivSeat className={`${color5 ? '' : 'seat'}`} onClick={onSeatChange5}></StyledDivSeat>
          <StyledDivSeat className={`${color6 ? '' : 'seat'}`} onClick={onSeatChange6}></StyledDivSeat>
          <StyledDivSeat className={`${color7 ? '' : 'seat'}`} onClick={onSeatChange7}></StyledDivSeat>
          <StyledDivSeat className={`${color8 ? '' : 'seat'}`} onClick={onSeatChange8}></StyledDivSeat>
          <StyledDivSeat className={`${color9 ? '' : 'seat'}`} onClick={onSeatChange9}></StyledDivSeat>
          <StyledDivSeat className={`${color10 ? '' : 'seat'}`} onClick={onSeatChange10}></StyledDivSeat>
          <StyledDivSeat className={`${color11 ? '' : 'seat'}`} onClick={onSeatChange11}></StyledDivSeat>
          <StyledDivSeat className={`${color12 ? '' : 'seat'}`} onClick={onSeatChange12}></StyledDivSeat>
        </StyledDivSeats>
      </StyledStage>

      <StyledH2>
        인원:{number} 명 가격:{result} 원
      </StyledH2>
      <Sbutton onClick={onClickPurchase}>결제하기</Sbutton>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    background-color: #fff8ee;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seat {
    background-color:red;
  }
`;
const StyledSelect = styled.select`
  margin: auto;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 20px;
  padding: 5px;
  width: 300px;
`;
const StyledLogo = styled.p`
  margin-top: 10px;
`;
const StyledDivSeats = styled.div`
  width: 300px;
  height: 300px;
  background-color: #eec167;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  align-content: center;
  flex-wrap: wrap;
`;
const StyledDivSeat = styled.div`
  transition: all 0.2s;
  cursor: pointer;
  color: #adadad;
  padding: 10px;
  margin: 5px;
  width: 20px;
  height: 20px;
  background-color: #adadad;
  border-radius: 30%;
`;
const StyledStage = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 30px;
  width: 400px;
  height: 400px;
  background-color: #eec167;
`;
const StyledScreen = styled.div`
  margin-top: 50px;
  width: 300px;
  border-top: 80px solid white;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  height: 0;
`;
const Price = styled.p`
  text-align: center;
  color: #444;
  font-size: 20px;
`;
const StyledH2 = styled.h2`
  text-align: center;
`;
const Sbutton = styled.button`
  align-items: center;
  background-color: rgba(240, 240, 240, 0.26);
  border: 1px solid #dfdfdf;
  border-radius: 16px;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  justify-content: center;
  line-height: 28px;
  padding: 14px 22px;
  text-decoration: none;
  transition: all 0.2s;

  width: 100%;
`;
