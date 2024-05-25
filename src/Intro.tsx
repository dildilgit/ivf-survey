import { List, ListItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export function Intro({ setStep }: { setStep: (step: number) => void }) {
  return (
    <div>
      <p>
        We are a group of women undergoing IVF. We are conducting a survey so
        that we can have an open source of information about outcomes from other
        IVF patients.
      </p>
      <p>We are not affiliated with any clinic or doctor.</p>
      <Typography variant="h6">How this works:</Typography>
      <List sx={{ listStyleType: "disc" }}>
        <ListItem sx={{ display: "list-item" }}>
          {" "}
          You enter your anonymous IVF result data in the next few pages which
          takes 2 minutes.{" "}
        </ListItem>{" "}
        <ListItem sx={{ display: "list-item" }}>
          {" "}
          The data gets added to{" "}
          <a href="https://www.example.com">this Google Sheet</a>. which you
          have access to with or without adding your data.{" "}
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          You can see the results of the survey at any time using{" "}
          <a href="https://www.example.com">this link</a>. The data will always
          be anonymous and public.
        </ListItem>
      </List>

      <Button onClick={() => setStep(1)} variant="contained">
        Start
      </Button>
    </div>
  );
}
