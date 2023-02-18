import {
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiLess,
  DiResponsive,
  DiSass,
} from "react-icons/di";

import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiPug,
} from "react-icons/si";

export const Skills = [
  { text: "HTML", Icon: () => <DiHtml5 /> },
  { text: "CSS", Icon: () => <DiCss3 /> },
  { text: "JavaScript", Icon: () => <DiJavascript1 /> },
  { text: "Responsive Design", Icon: () => <DiResponsive /> },
  { text: "GIT", Icon: () => <DiGit /> },
  { text: "GitHub", Icon: () => <DiGithubBadge /> },
  { text: "Pug", Icon: () => <SiPug /> },
  { text: "Sass", Icon: () => <DiSass /> },
  { text: "Less", Icon: () => <DiLess /> },
  { text: "Stylus", Icon: () => <DiStylus /> },
  { text: "Adobe XD", Icon: () => <SiAdobexd /> },
  { text: "Adobe Photoshop", Icon: () => <SiAdobephotoshop /> },
  { text: "Adobe Premiere Pro", Icon: () => <SiAdobepremierepro /> },
];
