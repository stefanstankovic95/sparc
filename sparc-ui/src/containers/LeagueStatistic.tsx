import { useState } from "react";
import { usePageTracking } from "../hooks/use-page-tracking";

export const LeagueStatistic = () => {
  usePageTracking();
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        id="powerbiContainer"
        style={{
          display: "flex",
          visibility: loaded ? "visible" : "hidden",
          overflow: "hidden",
          width: "100%",
          height: "calc(90vh - 57px)",
        }}
      >
        <iframe
          style={{ height: "90vh", width: "100%" }}
          title="SparcReport"
          src="https://app.powerbi.com/view?r=eyJrIjoiOGRmMzc1NWMtMDY3Mi00MzVhLWIxZDMtNDYzMDI2NGRlZjEwIiwidCI6IjMxODY4OTk5LWE5NTUtNGNiNi04N2E3LTJmZTYwMDk3Y2IwNyIsImMiOjl9"
          allowFullScreen={true}
          onLoad={() => {
            console.log("stefan loaded");
            setLoaded(true);
          }}
        ></iframe>
      </div>
    </div>
  );
};
