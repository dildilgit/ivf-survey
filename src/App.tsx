import { createTheme, Divider, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { StepSection } from "./StepSection";
import Typography from "@mui/material/Typography";

function App() {
  const [step, setStep] = useState<number>(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h4" gutterBottom color="primary">
          IVF Numbers Game
        </Typography>
        <div className="contentSection">
          <Divider className="divider" sx={{ borderBottomWidth: 3 }} />
          <div className="stepSection">
            <StepSection step={step} setStep={setStep} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#217074",
      light: "#5499a4",
      dark: "#00474d",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#8B9D77",
      light: "#B0C17A",
      dark: "#5F7A60",
      contrastText: "#000000",
    },
    divider: "#EDC5AB",
    text: {
      primary: "#8B9D77",
    },
  },
});

export default App;
