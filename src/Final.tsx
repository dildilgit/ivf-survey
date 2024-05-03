import Button from "@mui/material/Button";

export function Final({ setStep }: { setStep: (step: number) => void }) {
  return (
    <div>
      <p>
        Thank you for participating in our survey. You can find the results at{" "}
        <a href="https://www.example.com">example.com</a>.
      </p>

      <Button onClick={() => setStep(0)} variant="contained">
        Take Survey Again
      </Button>
    </div>
  );
}
