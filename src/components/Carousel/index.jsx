import {
  Backgound,
  CarouselContainer,
  CarouselImageItem,
  ImageContainer,
  Title,
} from "./style";

export const Carousel = ({ id, titleSection, data }) => {
  return (
    <Backgound id={id}>
      <div className="wrap">
        <Title>
          {titleSection}
          <span>.</span>
        </Title>
        <CarouselContainer>
          {data.map((item) => {
            return (
              <CarouselItem
                image={item.image}
                imageAlt={item.imageAlt}
                link={item.link}
              />
            );
          })}
        </CarouselContainer>
      </div>
    </Backgound>
  );
};

export const CarouselItem = ({ image, imageAlt, link }) => {
  return (
    <a href={link} target="_black">
      <CarouselImageItem>
        <ImageContainer>
          <img src={image} alt={imageAlt} />
        </ImageContainer>
      </CarouselImageItem>
    </a>
  );
};
