import "../styles/Biography.css";
import TitleText from "./TitleText";
import InnerText from "./InnerText";
import { Box, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState, useEffect } from "react";

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function Biography() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <Box
      sx={{
        m: 3,
        p: 3,
        display: "flex",
        flexWrap: screenSize.width > screenSize.height ? "nowrap" : "wrap",
      }}
    >
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
            Actuellement en seconde année de Master en science Informatique à
            finalité spécialisée à l'UMons, je suis à l'écoute d'opportunités
            pour après mon diplôme.
            <br />
            Durant la durée de mon bachelier, j'ai pu acquérir des connaissances
            en informatique et en mathématiques. Plus précisément, j'ai pu
            apprendre un certain nombre de langages de programmation (Java,
            Python, Prolog, etc.) et de logiciels (Matlab, Latex, etc.). J'ai
            également développé mon esprit critique et ma capacité à analyser et
            à résoudre des problèmes.
            <br />
            Ensuite, durant mes deux ans de Master, j'en ai profité pour
            approfondir d'autres sujets liés aux sciences informatiques, comme
            le Machine Learning, la gestion des données, la sécurité
            informatique et la programmation web. Cette dernière compétence est
            celle que j'ai pu le plus développer. En effet, j'ai développé dans
            le cadre de mon projet de première année puis de mon mémoire un site
            web afin d'aider les chercheurs en théorie extrémale des graphes.
            <br />
            Je vous souhaite une bonne visite sur ce petit site que j'ai
            implémenté sur mon temps libre. N'hésitez pas à me contacter si vous
            avez des questions ou des remarques.
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
