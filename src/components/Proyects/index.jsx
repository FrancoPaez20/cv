import { Carousel } from "../Carousel";
import { ProyectsData } from "../../mockup-data/Proyects";

export const Proyects = () => {
  return (
    <Carousel id="Proyects" titleSection="Mis Proyectos" data={ProyectsData} />
  );
};
