import { Box } from "@mui/system";
import logo from "../logo.png";
import { usePageTracking } from "../hooks/use-page-tracking";
import "../embers.css"
import Embers from "../embers";


export const Home = () => {
  usePageTracking();
  return (
    <>
      <Embers />
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <img src={logo} loading="lazy" width={520} height={520} />
      </Box>
    </>
  );
};
