import { Box } from "@mui/system";
import { AppBar, Button, Toolbar } from "@mui/material";

export const Layout = (props: any) => {
  return (
    <Box>
      <AppBar style={{ backgroundColor: "black" }} position="sticky">
        <Toolbar style={{ justifyContent: "space-around" }}>
          <Button href="/">{"Sparc"}</Button>
          <Button href="/statistics">{"League Statistics"}</Button>
          <Button href="/teams">{"Teams"}</Button>
          <Button href="/schedule">{"Schedule"}</Button>
        </Toolbar>
      </AppBar>
      {props.children}
    </Box>
  );
};
