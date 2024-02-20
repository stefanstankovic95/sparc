import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

export const LeagueStatistic = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 100,
      }}
    >
      <PowerBIEmbed
        embedConfig={{
          type: "report",
          id: "1dd5eee4-651f-4d65-9a4a-9cd1c32ed8a2",
          embedUrl:
            "https://app.powerbi.com/view?r=eyJrIjoiOGRmMzc1NWMtMDY3Mi00MzVhLWIxZDMtNDYzMDI2NGRlZjEwIiwidCI6IjMxODY4OTk5LWE5NTUtNGNiNi04N2E3LTJmZTYwMDk3Y2IwNyIsImMiOjl9",
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
              visualizations: {
                expanded: false,
                visible: false,
              },
              syncSlicers: {
                visible: false,
              },
              selection: {
                visible: false,
              },
              pageNavigation: {
                visible: false,
              },
              bookmarks: {
                visible: false,
              },
              fields: {
                expanded: false,
                visible: false,
              },
            },
            layoutType: models.LayoutType.MobilePortrait,
            background: models.BackgroundType.Transparent,
          },
        }}
        cssClassName="bi-report"
      />
    </div>
  );
};
