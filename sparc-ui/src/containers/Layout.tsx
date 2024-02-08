import Link from "@mui/material/Link";
import { Box } from "@mui/system";

export const Layout = (props: any) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-evenly" paddingTop={5}>
        <Box>
          <Link
            href="/leageue-statistic"
            underline="none"
            color="white"
            fontSize={24}
            fontFamily="anton,sans-serif"
            fontWeight={700}
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
            fontFamily="anton,sans-serif"
            fontWeight={700}
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
            fontFamily="anton,sans-serif"
            fontWeight={700}
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
            fontFamily="anton,sans-serif"
            fontWeight={700}
          >
            {"Više o SPARC-u"}
          </Link>
        </Box>
      </Box>
      {props.children}
    </Box>
  );
};
