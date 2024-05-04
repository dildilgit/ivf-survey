import { useState } from "react";
import "./App.css";
import { StepSection } from "./StepSection";

function App() {
  const [step, setStep] = useState<number>(0);

  return (
    <div className="App">
      <h1>IVF Numbers Game</h1>
      <StepSection step={step} setStep={setStep} />
    </div>
  );
}

export default App;
