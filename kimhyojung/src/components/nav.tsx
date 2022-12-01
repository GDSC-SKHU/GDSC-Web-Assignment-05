import styled from 'styled-components';
import Link from 'next/link';
const StyledhomeNav = styled.nav`
  display: flex;
  background-color: #444;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  height: 35%;
  margin-bottom: 2%;
`;

const StyledhomeLink = styled(Link)`
  color: white;
`;

export default function Nav() {
  return (
    <>
      <StyledhomeNav>
        <StyledhomeLink href="/">Home</StyledhomeLink>
      </StyledhomeNav>
    </>
  );
}
