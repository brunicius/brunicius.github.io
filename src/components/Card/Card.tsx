import styled, { keyframes } from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 10px auto 15px;
  transition: height 0.4s ease;
`;

const boxShadowAnimation = keyframes`
  0% {
    -webkit-box-shadow: 0px 0px 14px 5px rgba(30, 145, 214, 0.2);
    box-shadow: 0px 0px 14px 5px rgba(30, 145, 214, 0.2);
  }
  50% {
    -webkit-box-shadow: 0px 0px 14px 5px rgba(30, 145, 214, 0.05);
    box-shadow: 0px 0px 14px 5px rgba(30, 145, 214, 0.05);
  }
  100% {
    -webkit-box-shadow: 0px 0px 14px 5px rgba(30, 145, 214, 0.2);
    box-shadow: 0px 0px 14px 5px rgba(30, 145, 214, 0.2);
  }
`;

const CardInner = styled.div`
  margin: auto 15px;
  max-width: 100%;
  background-color: #34323250;
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(2px);

  animation-name: ${boxShadowAnimation};
  animation-duration: 20s;
  animation-iteration-count: infinite;

  -webkit-box-shadow: 0px 0px 14px 5px rgba(30, 145, 214, 0.2);
  box-shadow: 0px 0px 14px 5px rgba(30, 145, 214, 0.2);
`;

type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <CardWrapper>
      <CardInner>{children}</CardInner>
    </CardWrapper>
  );
};
