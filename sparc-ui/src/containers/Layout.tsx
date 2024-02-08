import Link from "@mui/material/Link";
import { Box } from "@mui/system";

export const Layout = (props: any) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-evenly" paddingTop={5}>
        <Box>
          <Link
            href="/"
            underline="none"
            color="white"
            fontSize={24}
            fontFamily="impact"
          >
            {"Sparc"}
          </Link>
        </Box>
        <Box>
          <Link
            href="/leageue-statistic"
            underline="none"
            color="white"
            fontSize={24}
            fontFamily="impact"
          >
            {"Statistika Lige"}
          </Link>
        </Box>
        <Box>
          <Link
            href="/teams"
            underline="none"
            color="white"
            fontSize={24}
            fontFamily="impact"
          >
            {"Timovi"}
          </Link>
        </Box>
        <Box>
          <Link
            href="/schedule"
            underline="none"
            color="white"
            fontSize={24}
            fontFamily="impact"
          >
            {"Raspored"}
          </Link>
        </Box>
        <Box>
          <Link
            href="/about"
            underline="none"
            color="white"
            fontSize={24}
            fontFamily="impact"
          >
            {"Više o SPARC-u"}
          </Link>
        </Box>
      </Box>
      {props.children}
    </Box>
  );
};
