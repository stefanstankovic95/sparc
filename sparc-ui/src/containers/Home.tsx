import { Box } from "@mui/system";
import logo from "../logo.png";
import { Stack, Typography } from "@mui/material";
import tiktok from "../link-icons/tiktok.png";
import instagram from "../link-icons/instagram.png";
import email from "../link-icons/email.png";
import youtube from "../link-icons/youtube.png";

export const Home = () => {
  const handleYoutubeClick = () => {
    window.open(
      "https://www.youtube.com/channel/UCs6ZeNLjcqZI28aATvSYhzw",
      "_blank"
    );
  };

  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/sparc_league?igsh=eGxsbXBuajNoNWZo",
      "_blank"
    );
  };

  const handleTiktokClick = () => {
    window.open(
      "https://www.tiktok.com/@sparc_league?fbclid=IwAR0Kj_eFvsev-UK6lc9JHsj675kosdN93hU7ptHZjwfg0pJEekxljgV3Lw4",
      "_blank"
    );
  };

  const handleEmailClick = () => {
    window.open("mailto:sparc@blaze-esports.org", "_blank");
  };

  return (
    <Box justifyContent="center">
      <img src={logo} loading="lazy" />
      <Typography fontSize={64} color="white" fontFamily="impact">
        SPARC
      </Typography>
      <Typography fontSize={36} color="white" fontFamily="impact">
        Semi-Pro Adriatic Rift Championship
      </Typography>
    </Box>
  );
};
