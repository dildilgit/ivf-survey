import { useState } from "react";
import { Final } from "./Final";
import { Intro } from "./Intro";
import { Step1 } from "./StepOne";
import { Step3 } from "./StepThree";
import { Step2 } from "./StepTwo";

export type SurveyData = {
  age: number | null;
  amh: number | null;
  fsh: number | null;
  afc: number | null;
  attempts: number | null;
  ivfData: Record<IVFAttemptData["attemptNumber"], IVFAttemptData>;
  diagnosis: string;
  supplements: string;
  procedures: string;
  medications: string;
};

export type IVFAttemptData = {
  attemptNumber: number;
  cycleResultType: "fresh" | "frozen" | null;
  folliclesGrown: number | null;
  eggsRetrieved: number | null;
  fertilizedOnDay1: number | null;
  day3Embryos: number | null;
  blasts: number | null;
  pgtNormalEmbryos: number | null;
  isCancelled: boolean | undefined;
  isDonor: boolean | undefined;
  isICSI: boolean | undefined;
};

export function getEmptySurveyData(): SurveyData {
  return {
    age: null,
    amh: null,
    fsh: null,
    afc: null,
    attempts: null,
    ivfData: [],
    diagnosis: "",
    supplements: "",
    procedures: "",
    medications: "",
  };
}

export function StepSection({
  step,
  setStep,
  nickname,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  nickname: string;
}) {
  const [data, setData] = useState<SurveyData>(getEmptySurveyData());

  console.log(data);

  switch (step) {
    case 0:
      return <Intro setStep={setStep} nickname={nickname} />;
    case 1:
      return <Step1 setStep={setStep} data={data} setData={setData} />;
    case 2:
      return (
        <Step2
          setStep={setStep}
          data={data}
          setData={setData}
          nickname={nickname}
        />
      );
    case 3:
      return (
        <Step3
          setStep={setStep}
          data={data}
          setData={setData}
          nickname={nickname}
        />
      );
    default:
      return <Final setStep={setStep} setData={setData} nickname={nickname} />;
  }
}
