import { useState } from "react";
import { Final } from "./Final";
import { Intro } from "./Intro";
import { Step1 } from "./StepOne";
import { Step3 } from "./StepThree";
import { Step2 } from "./StepTwo";

export type SurveyData = {
  age: number | null;
  amh: string;
  fsh: string;
  afc: number | null;
  attempts: number | null;
  ivfData: Record<IVFAttemptData["attemptNumber"], IVFAttemptData>;
};

export type IVFAttemptData = {
  attemptNumber: number;
  isCancelled: boolean | null;
  folliclesAtRetrieval: number | null;
  eggsRetrieved: number | null;
  fertilizedOnDay1: number | null;
  day3EmbryosTransferred: number | null;
  blasts: number | null;
  pgtNormalEmbryos: number | null;
  day5PlusEmbryosTransferred: number | null;
};

export function getEmptySurveyData(): SurveyData {
  return {
    age: null,
    amh: "",
    fsh: "",
    afc: null,
    attempts: null,
    ivfData: [],
  };
}

export function StepSection({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [data, setData] = useState<SurveyData>(getEmptySurveyData());
  console.log(data);

  switch (step) {
    case 0:
      return <Intro setStep={setStep} />;
    case 1:
      return <Step1 setStep={setStep} data={data} setData={setData} />;
    case 2:
      return <Step2 setStep={setStep} data={data} setData={setData} />;
    case 3:
      return <Step3 setStep={setStep} data={data} setData={setData} />;
    default:
      return <Final setStep={setStep} setData={setData} />;
  }
}
