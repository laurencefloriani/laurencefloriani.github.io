import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "../styles/Biography.css";
import TitleText from "./TitleText";
import InnerText from "./InnerText";
import { Box, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Biography() {
  return (
    <Box sx={{ m: 2, display: "flex" }}>
      <Box sx={{ m: 2, display: "flex", flexDirection: "column" }}>
        <Box>
          <img src={"profil.jpg"} alt="profil" className="profil" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 1 }}>
          <Tooltip title="See my profil" placement="top">
            <a
              href="https://www.linkedin.com/in/laurence-floriani-1659b9234/"
              target="_blank"
            >
              <LinkedInIcon color="primary" fontSize="large" />
            </a>
          </Tooltip>
          <Tooltip title="Contact me here" placement="top">
            <a
              style={{ paddingLeft: 10 }}
              href={"mailto:laurencefloAThotmail.com"}
            >
              <MailOutlineIcon color="primary" fontSize="large" />
            </a>
          </Tooltip>
          <Tooltip title="See my github page" placement="top">
            <a
              style={{ paddingLeft: 10 }}
              href={"https://github.com/laurencefloriani"}
              target="_blank"
            >
              <GitHubIcon color="primary" fontSize="large" />
            </a>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ m: 2, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <TitleText>Bienvenue sur mon site !</TitleText>
        </Box>
        <img
          src={"quotes_left.png"}
          alt="quotes_left"
          className="quotes_left"
        />
        <Box sx={{ mb: 1, mt: 1 }}>
          <InnerText>Bonjour, je m'appelle Laurence Daisy Floriani.</InnerText>
          <InnerText>
            Je suis actuellement étudiante en Master en Science Informatique
            finalité spécialisée à l'UMons, Belgique. Durant mes deux ans de
            Master, j'en ai profité pour m'intéresser à des domaines variés de
            l'informatique. J'ai une préférence pour le développement
            d'applications web ou non. J'apprécie également ce qui touche à la
            gestion des données et au Machine Learning. Je vous souhaite une
            bonne visite sur ce petit site que j'ai implémenté sur mon temps
            libre.
          </InnerText>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            src={"quotes_right.png"}
            alt="quotes_right"
            className="quotes_right"
          />
        </Box>
      </Box>
    </Box>
  );
}
