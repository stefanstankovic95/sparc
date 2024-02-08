import { Box } from "@mui/system";
import logo from "../logo.png";
import instagram from "../instagram.png";
import tiktok from "../tiktok.png";
import { Stack, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box justifyContent="center">
      <img src={logo} loading="lazy" />
      <Typography fontSize={64} color="white" fontFamily="impact">
        SPARC
      </Typography>
      <Typography fontSize={36} color="white" fontFamily="impact">
        Semi-Pro Adriatic Rift Championship
      </Typography>
      <Box paddingTop={30}>
        <Typography fontSize={48} color="white" fontFamily="impact">
          Misija i vizija
        </Typography>
        <Typography fontSize={36} color="white" fontFamily="impact">
          Zašto SPARC?
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <img src={instagram} loading="lazy" height={100} width={100} />
          <img src={tiktok} loading="lazy" height={100} width={100} />
          <img src={instagram} loading="lazy" height={100} width={100} />
          <img src={tiktok} loading="lazy" height={100} width={100} />
        </Stack>
      </Box>
    </Box>
  );
};
