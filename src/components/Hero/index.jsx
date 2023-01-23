import { FiDownload } from "react-icons/fi";
import {
  Button,
  HeroContainer,
  ImageContainer,
  InfoContainer,
  Subtitle,
  Title,
} from "./style";

export const Hero = () => {
  return (
    <HeroContainer id="hero" className="hero">
      <InfoContainer className="wrap">
        <div>
          <Title>
            Franco Paez<span>.</span>
          </Title>
          <Subtitle>
            Frontend Developer<span>.</span>
          </Subtitle>
          <Button>
            Download CV <FiDownload />
          </Button>
        </div>
        <ImageContainer className="hero-image">
          <img
            src="/src/assets/image/profile.png"
            alt="Foto de perfil de Franco Nahuel Paez hecha con los animojis de Apple."
          />
        </ImageContainer>
      </InfoContainer>
    </HeroContainer>
  );
};
