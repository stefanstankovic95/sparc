import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LeagueStatistic } from "./containers/LeagueStatistic";
import { Layout } from "./containers/Layout";
import { Teams } from "./containers/Teams";
import { Schedule } from "./containers/Schedule";
import { About } from "./containers/About";
import { Home } from "./containers/Home";

function App() {
  return (
    <div
      className="App"
      style={{
        background: `url(./background.gif)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="league-statistic" element={<LeagueStatistic />} />
            <Route path="teams" element={<Teams />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
