import styled, { keyframes } from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 60px auto;
  transition: height 0.4s ease;
`;

const CardInner = styled.div`
  margin: auto 15px;
  max-width: 100%;
  background-color: #34323250;
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(2px);

  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

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
