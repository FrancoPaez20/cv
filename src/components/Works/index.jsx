import { Carousel } from "../Carousel";
import { WorksData } from "../../mockup-data/works";

export const Works = () => {
  return <Carousel id="works" titleSection="Mis Trabajos" data={WorksData} />;
};
