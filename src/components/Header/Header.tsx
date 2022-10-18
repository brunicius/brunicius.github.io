import styled from "styled-components";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";

const HeaderWrapper = styled.div`
  width: 100vw;
  padding: 0 30px;
`;

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderLogo />
      </HeaderInner>
    </HeaderWrapper>
  );
};
