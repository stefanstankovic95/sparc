import { Box } from "@mui/system";
import { AppBar, Button, Toolbar } from "@mui/material";

export const Layout = (props: any) => {
  return (
    <Box>
      <AppBar style={{ backgroundColor: "black" }} position="sticky">
        <Toolbar style={{ justifyContent: "space-around" }}>
          <Button className="header-links" href="/sparc">
            {"Sparc"}
          </Button>
          <Button className="header-links" href="/sparc/statistics">
            {"League Statistics"}
          </Button>
          <Button className="header-links" href="/sparc/teams">
            {"Teams"}
          </Button>
          <Button className="header-links" href="/sparc/schedule">
            {"Play Off"}
          </Button>
        </Toolbar>
      </AppBar>
      <div
        style={{
          background: `url(../background.png)`,
          backgroundSize: "100% 100%",
          flex: 1,
          display: "flex",
          minHeight: "calc(100vh - 132px)",
        }}
      >
        {props.children}
      </div>
    </Box>
  );
};
