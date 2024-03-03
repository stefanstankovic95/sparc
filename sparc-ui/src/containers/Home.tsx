import { Box } from "@mui/system";
import logo from "../logo.png";
import { Typography } from "@mui/material";
import { usePageTracking } from "../hooks/use-page-tracking";

export const Home = () => {
  usePageTracking();
  return (
    <Box justifyContent="center">
      <img src={logo} loading="lazy" width={390} height={520} />
      <Typography fontSize={64} color="white" fontFamily="impact">
        SPARC
      </Typography>
      <Typography fontSize={36} color="white" fontFamily="impact">
        Semi-Pro Adriatic Rift Championship
      </Typography>
    </Box>
  );
};
