import { Box, Chip, Grid, Typography } from "@mui/material";
import data from "../files/schedule.json";
import vsIcon from "../files/vs-icon.png";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { usePageTracking } from "../hooks/use-page-tracking";

export const Schedule = () => {
  usePageTracking();

  return (
    <Box width="100%">
      <Grid container>
        <Grid item xs={12} paddingTop={10}>
          <Typography fontSize={36} color="khaki" fontFamily="impact">
            Stream
          </Typography>
          <Timeline position="right">
            {data.streamed.map((match) => (
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography
                    fontSize={44}
                    color="burlywood"
                    fontFamily="impact"
                  >
                    {match.left}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    style={{
                      backgroundColor: "transparent",
                      marginTop: -5,
                      boxShadow: "none",
                    }}
                  >
                    <Typography
                      fontSize={48}
                      color="orange"
                      fontFamily="impact"
                    >
                      {match.time}
                    </Typography>
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Typography fontSize={44} color="coral" fontFamily="impact">
                    {match.right}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
        <Grid item xs={6}>
          <Typography fontSize={48} color="khaki" fontFamily="impact">
            {data.firstRound.time}
          </Typography>
          <Timeline position="right">
            {data.firstRound.matches.map((match) => (
              <TimelineItem>
                <TimelineOppositeContent>
                  <Chip
                    style={{
                      fontSize: 24,
                      fontFamily: "impact",
                      color: "burlywood",
                      borderColor: "burlywood",
                    }}
                    label={match.left}
                    size="medium"
                    variant="outlined"
                  />
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    style={{ backgroundColor: "transparent", marginTop: -15 }}
                  >
                    <img src={vsIcon} loading="lazy" height={60} width={60} />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Chip
                    style={{
                      fontSize: 24,
                      color: "coral",
                      borderColor: "coral",
                      fontFamily: "impact",
                    }}
                    label={match.right}
                    size="medium"
                    variant="outlined"
                  />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
        <Grid item xs={6}>
          <Typography fontSize={48} color="khaki" fontFamily="impact">
            {data.secondRound.time}
          </Typography>
          <Timeline position="right">
            {data.secondRound.matches.map((match) => (
              <TimelineItem>
                <TimelineOppositeContent>
                  <Chip
                    style={{
                      fontSize: 24,
                      fontFamily: "impact",
                      color: "burlywood",
                      borderColor: "burlywood",
                    }}
                    label={match.left}
                    size="medium"
                    variant="outlined"
                  />
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    style={{ backgroundColor: "transparent", marginTop: -15 }}
                  >
                    <img src={vsIcon} loading="lazy" height={60} width={60} />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Chip
                    style={{
                      fontSize: 24,
                      color: "coral",
                      borderColor: "coral",
                      fontFamily: "impact",
                    }}
                    label={match.right}
                    size="medium"
                    variant="outlined"
                  />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
};
