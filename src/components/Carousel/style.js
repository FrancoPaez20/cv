import styled from "styled-components";

export const Backgound = styled.section`
  background-color: #1b1e1e;
  & .wrap {
    padding: 70px 10px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  gap: 50px;
  scroll-snap-type: x mandatory;
  overflow-x: auto;

  &::-webkit-scrollbar {
    /* height: 6px; */
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const CarouselImageItem = styled.div`
  position: relative;
  scroll-snap-align: center;
  min-width: 300px; /*PORQUE NO FUNCA EL WIDTH SOLO, SI O SI FUNCIONE CON EL "MIN"*/
  height: 160px;
  overflow: hidden;
  /* border-radius: 0.5rem; NO SE QUE PASA QUE ME SALEN LOS BORDER DE LA IMAGEN Y QUEDA FEO */
  border-radius: 1rem;
`;

export const ImageContainer = styled.figure`
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    object-position: center;
    -o-object-position: center;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2.25rem, 6vmin, 3.052rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 50px;

  & span {
    color: #7510f7;
  }
`;
