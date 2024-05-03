import { Final } from "./Final";
import { Intro } from "./Intro";
import { Step1 } from "./StepOne";

export function StepSection({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  switch (step) {
    case 0:
      return <Intro setStep={setStep} />;
    case 1:
      return <Step1 setStep={setStep} />;
    default:
      return <Final setStep={setStep} />;
  }
}
