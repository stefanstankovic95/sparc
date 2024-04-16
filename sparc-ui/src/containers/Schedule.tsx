import { Box } from "@mui/material";
import { usePageTracking } from "../hooks/use-page-tracking";
import playOff from "../files/playoff.png";

export const Schedule = () => {
  usePageTracking();

  return (
    <Box
      display="flex"
      height={"calc(100vh - 132px)"}
      width="100vw"
      justifyContent="center"
    >
      <img
        src={playOff}
        loading="lazy"
        style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
      />
    </Box>
  );
};
