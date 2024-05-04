// import Button from "@mui/material/Button";

export function Button({
  setStep,
  text,
  stepNumber,
}: {
  setStep: (step: number) => void;
  stepNumber: number;
  text: string;
}) {
  return (
    <div className="nextButton">
      {/* <Button variant="text">Text</Button> */}
      <button onClick={() => setStep(stepNumber)}>{text}</button>
    </div>
  );
}
