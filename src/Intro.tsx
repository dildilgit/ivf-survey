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

      <Button onClick={() => setStep(1)} variant="contained">
        Start
      </Button>
    </div>
  );
}
