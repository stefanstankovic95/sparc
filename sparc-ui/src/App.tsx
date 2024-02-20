import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LeagueStatistic } from "./containers/LeagueStatistic";
import { Layout } from "./containers/Layout";
import { Teams } from "./containers/Teams";
import { Schedule } from "./containers/Schedule";
import { About } from "./containers/About";
import { Home } from "./containers/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "SPARC";
  }, []);

  return (
    <div
      className="App"
      style={{
        background: `url(./background.gif)`,
        backgroundSize: "cover",
        flex: 1,
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="about" element={<About />} />
            <Route path="league-statistic" element={<LeagueStatistic />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
