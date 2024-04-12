import { Box } from "@mui/material";
import { usePageTracking } from "../hooks/use-page-tracking";
import playIn from "../files/playIn.png";

export const Schedule = () => {
  usePageTracking();

  return (
    <Box
      display="flex"
      height={"calc(100vh - 132px)"}
      width="100vw"
      justifyContent="center"
    >
      <img src={playIn} loading="lazy" style={{ objectFit: "contain" }} />
    </Box>
  );
};
