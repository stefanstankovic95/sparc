import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LeagueStatistic } from "./containers/LeagueStatistic";
import { Layout } from "./containers/Layout";
import { Teams } from "./containers/Teams";
import { Schedule } from "./containers/Schedule";
import { Home } from "./containers/Home";
import { useEffect } from "react";
import tiktok from "./link-icons/tiktok.png";
import instagram from "./link-icons/instagram.png";
import email from "./link-icons/email.png";
import youtube from "./link-icons/youtube.png";
import { Box, Divider, Stack } from "@mui/material";
import { initializeTagManager } from "./gtm";
import { usePageTracking } from "./hooks/use-page-tracking";

function App() {
  useEffect(() => {
    document.title = "SPARC";
    initializeTagManager();
  }, []);

  const handleYoutubeClick = () => {
    window.open(
      "https://www.youtube.com/channel/UCs6ZeNLjcqZI28aATvSYhzw",
      "_blank"
    );
  };

  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/sparc_league?igsh=eGxsbXBuajNoNWZo",
      "_blank"
    );
  };

  const handleTiktokClick = () => {
    window.open(
      "https://www.tiktok.com/@sparc_league?fbclid=IwAR0Kj_eFvsev-UK6lc9JHsj675kosdN93hU7ptHZjwfg0pJEekxljgV3Lw4",
      "_blank"
    );
  };

  const handleEmailClick = () => {
    window.open("mailto:sparc@blaze-esports.org", "_blank");
  };



  return (
    <div
      className="App"
      style={{
        flex: 1,
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route index path="" element={<Navigate to="sparc" />} />
            <Route path="sparc" element={<Home />} />
            <Route path="sparc/teams" element={<Teams />} />
            <Route path="sparc/schedule" element={<Schedule />} />
            <Route path="sparc/statistics" element={<LeagueStatistic />} />
          </Routes>
        </BrowserRouter>
      </Layout>

      <Box width="100%" bgcolor="black">
        <Divider
          style={{
            backgroundColor: "grey",
          }}
          flexItem
        />
        <Box display="flex" marginTop={5} marginBottom={5}>
          <Stack
            width="100%"
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <img
              className="social-media-icon"
              style={{ marginTop: 2 }}
              src={instagram}
              loading="lazy"
              height={45}
              width={45}
              onClick={handleInstagramClick}
            />
            <div className="social-media-divider"></div>
            <img
              className="social-media-icon"
              src={tiktok}
              loading="lazy"
              height={50}
              width={50}
              onClick={handleTiktokClick}
            />
            <div
              style={{ marginRight: 13, marginLeft: 7 }}
              className="social-media-divider"
            ></div>
            <img
              className="social-media-icon"
              style={{ marginTop: -4 }}
              src={youtube}
              loading="lazy"
              height={55}
              width={50}
              onClick={handleYoutubeClick}
            />
            <div
              style={{ marginRight: 10 }}
              className="social-media-divider"
            ></div>
            <img
              className="social-media-icon"
              style={{ marginTop: 5 }}
              src={email}
              loading="lazy"
              height={40}
              width={50}
              onClick={handleEmailClick}
            />
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default App;
