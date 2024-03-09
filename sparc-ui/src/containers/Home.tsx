import { Box } from "@mui/system";
import logo from "../logo.png";
import { Typography } from "@mui/material";
import { usePageTracking } from "../hooks/use-page-tracking";

export const Home = () => {
  usePageTracking();
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <img src={logo} loading="lazy" width={520} height={520} />
    </Box>
  );
};
