import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  background-color: #313434;
  background-image: url("/src/assets/image/bg3.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: clamp(2.323rem, 5vmin, 3.815rem);
  font-weight: 900;
  color: #fff;
  letter-spacing: 1px;

  & span {
    color: #7510f7;
  }
`;

export const Subtitle = styled.h1`
  font-size: clamp(1.25rem, 5 vmin, 1.953rem);
  font-weight: 700;
  color: #fff;

  & span {
    color: #7510f7;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: #7510f7;
  border: none;
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;
  gap: 8px;
  cursor: pointer;

  &:hover svg,
  &:focus svg {
    transform: rotateY(180deg);
    transition: 0.5s;
  }
`;

export const ImageContainer = styled.figure`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  & img {
    width: 100%;
    height: 100%;
  }
`;
