import { HeaderContent, Menu, MenuItem, Nav } from "./style";
export const Header = () => {
  return (
    <HeaderContent id="header" className="header">
      <Nav className="wrap">
        <Menu />
        <MenuItem href="#" className="header-links">
          Inicio
        </MenuItem>
        <MenuItem href="#Works" className="header-links">
          Trabajos
        </MenuItem>
        <MenuItem href="#Projects" className="header-links">
          Proyectos
        </MenuItem>
        <MenuItem href="#Skills" className="header-links">
          Skills
        </MenuItem>
        <MenuItem href="#Goals" className="header-links">
          Próximamente
        </MenuItem>
        <MenuItem href="#Hobbies" className="header-links">
          Hobbies
        </MenuItem>
        {/* <MenuItem href="#Estudios" className="header-links">Estudios</MenuItem> */}
      </Nav>
    </HeaderContent>
  );
};
