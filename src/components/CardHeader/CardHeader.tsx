import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
/* import profilePhoto from '../../assets/profile.jpg'; */
const profilePhoto =
  "https://www.gravatar.com/avatar/12ad1eb4b5857717ac8801f9f62b9527?s=200";

const CHWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const PhotoWrapper = styled.img`
  opacity: 0;
  border-radius: 50%;
  aspect-radius: 1/1;
  width: 240px;
  flex: 1;
  transition: all ease 0.4s;
`;

const TitleWrapper = styled.div`
  flex: 2;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    > h1 {
      font-size: 48px;
      font-weight: 900;
      color: #1e91d6;
    }
    > h2 {
      font-size: 36px;
      font-weight: 100;
    }
  }
`;

export const CardHeader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const onImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  return (
    <CHWrapper>
      <PhotoWrapper        
        onLoad={onImageLoad}
        style={{
          ...(isLoaded && { opacity: "1" }),
        }}
        src={profilePhoto}
        alt='Bruno Vinicius smiling'
      />
      <TitleWrapper>
        <div>
          <h1>brunicius</h1>
          <h2>developer</h2>
        </div>
      </TitleWrapper>
    </CHWrapper>
  );
};
