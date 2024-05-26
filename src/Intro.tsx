import { List, ListItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export function Intro({
  setStep,
  nickname,
}: {
  setStep: (step: number) => void;
  nickname: string;
}) {
  return (
    <div>
      <p>
        We are a group of women undergoing IVF. We are conducting a survey so
        that we can have an open source of information about outcomes from other
        IVF patients.
      </p>
      <p>
        <i>We are not affiliated with any clinic or doctor.</i>
      </p>
      <Typography variant="h6">How this works:</Typography>
      <List sx={{ listStyleType: "disc" }}>
        <ListItem sx={{ display: "list-item" }}>
          You enter your anonymous IVF results in the next 3 steps (takes 2
          min).
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Numbers get added to{" "}
          <a href="https://www.example.com">this Google Sheet</a> and shows up
          in the charts.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          You can see the results of the survey at any time with or{" "}
          <i>without adding data</i> using{" "}
          <a href="https://www.example.com">this link</a>. The data is anonymous
          and public.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          You can find your entry on the result sheet after you are done with
          this unique nickname: <b>{nickname}</b>
        </ListItem>
      </List>

      <div className="center">
        <Button onClick={() => setStep(1)} variant="contained" size="large">
          Start
        </Button>
      </div>
    </div>
  );
}
