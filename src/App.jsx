import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Proyects } from "./components/Proyects";
import { Tag } from "./components/Tag";
import { Works } from "./components/Works";
import { Skills } from "./mockup-data/skills";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Works />
      <Proyects />
      <Tag data={Skills} />
    </>
  );
};
