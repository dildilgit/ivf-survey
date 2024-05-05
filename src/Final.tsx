import Button from "@mui/material/Button";
import { getEmptySurveyData, SurveyData } from "./StepSection";

export function Final({
  setStep,
  setData,
}: {
  setStep: (step: number) => void;
  setData: React.Dispatch<React.SetStateAction<SurveyData>>;
}) {
  return (
    <div>
      <p>
        Thank you for participating in our survey. You can find the results at{" "}
        <a href="https://www.example.com">example.com</a>.
      </p>

      <Button
        onClick={() => {
          setData(getEmptySurveyData());
          setStep(0);
        }}
        variant="contained"
      >
        Take Survey Again
      </Button>
    </div>
  );
}
