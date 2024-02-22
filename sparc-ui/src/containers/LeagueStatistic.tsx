import { useState } from "react";

export const LeagueStatistic = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 200,
      }}
    >
      <div
        id="powerbiContainer"
        style={{
          display: "flex",
          visibility: loaded ? "visible" : "hidden",
          overflow: "hidden",
          width: 1280,
          height: 722,
        }}
      >
        <iframe
          title="SparcReport"
          height={780}
          width={1280}
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
