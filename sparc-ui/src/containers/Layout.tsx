import Link from "@mui/material/Link";
import { Box } from "@mui/system";
import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import { useState } from "react";

const StatisticMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button onMouseEnter={handleClick}>League Statistics</Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{ paper: { onMouseLeave: handleClose } }}
      >
        <MenuItem onClick={handleClose}>
          <Button href="/statistics">Standings</Button>
        </MenuItem>
        <MenuItem href="/statistics/leaderboard" onClick={handleClose}>
          Leaderboard
        </MenuItem>
        <MenuItem href="/statistics/team" onClick={handleClose}>
          Team Statistics
        </MenuItem>
        <MenuItem href="/statistics/player" onClick={handleClose}>
          Player Statistics
        </MenuItem>
        <MenuItem href="/statistics/playerComparison" onClick={handleClose}>
          Player Comparison
        </MenuItem>
      </Menu>
    </Box>
  );
};

export const Layout = (props: any) => {
  return (
    <Box>
      <AppBar position="sticky" color="success">
        <Toolbar>
          <Button href="/">{"Sparc"}</Button>
          <StatisticMenu />
          <Button href="/teams">{"Teams"}</Button>
          <Button href="/schedule">{"Schedule"}</Button>
        </Toolbar>
      </AppBar>
      {props.children}
    </Box>
  );
};
