import { Box, Grid } from "@mui/material";
import { usePageTracking } from "../hooks/use-page-tracking";

const cache = {};

function importAll(r: any) {
  r.keys().forEach((key: any) => ((cache as any)[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(require.context("../team-icons", false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map(
  (module) => module[1]
) as Array<string>;

export const Teams = () => {
  usePageTracking();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={10}>
        {images.map((image) => (
          <Grid item xs={3}>
            <img src={image} loading="lazy" height={186} width={186} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
