import {
  Button,
  FormLabel,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { FormControl } from "@mui/base/FormControl";
import { SurveyData } from "./StepSection";

export function Step3({
  setStep,
  data,
  setData,
}: {
  setStep: (step: number) => void;
  data: SurveyData;
  setData: React.Dispatch<React.SetStateAction<SurveyData>>;
}) {
  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setData({
  //       ...state,
  //       [event.target.name]: event.target.checked,
  //     });
  //   };

  return (
    <form onSubmit={() => setStep(4)}>
      <Typography
        variant="subtitle1"
        gutterBottom
        color="primary"
        sx={{ marginBottom: "20px" }}
      >
        The 4 questions on this page are OPTIONAL. Feel free to skip to the
        results if you'd like.
      </Typography>
      <FormControl className="question">
        <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
          Do you have of the following diagnoses?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="endometriosis" />}
            label="Endometriosis"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="adenomyosis" />}
            label="Adenomyosis"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="abnormalSperm" />}
            label="Low morphology/ motility/ count"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="varicocele" />}
            label="Varicocele"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="otherMaleFactor" />}
            label="Other male factor"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="pcos" />}
            label="PCOS (Polycystic Ovary Syndrome)"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="dor" />}
            label="DOR (Diminished Ovarian Reserve)"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="poi" />}
            label="POI / POF (Premature Ovarian Insufficiency / Failure)"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="tubal" />}
            label="Tubal issues"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="tubal" />}
            label="Unexplained (no reason was found for either partner"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="otherDiagnoses" />}
            label="Other"
          />
        </FormGroup>
      </FormControl>

      <FormControl className="question">
        <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
          Which of the following have you used so far?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="dhea" />}
            label="DHEA"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="coq10" />}
            label="CoQ10"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="vitD" />}
            label="Vitamin D"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="prenatal" />}
            label="Prenatal vitamins"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="otherSupplements" />}
            label="Other"
          />
        </FormGroup>
      </FormControl>

      <FormControl className="question">
        <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
          What other fertility related procedures or treatments have you done?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="unblockTubes" />}
            label="Unblocking tubes"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="laparoscopy" />}
            label="Laparoscopy"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="varicoceleRemoval" />}
            label="Varicocele"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="ovarianPRP" />}
            label="Ovarian PRP"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="polupRemoval" />}
            label="Uterine Polyp Removal"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="immunotherapy" />}
            label="Immunotherapy"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="otherProcedures" />}
            label="Other"
          />
        </FormGroup>
      </FormControl>

      <FormControl className="question">
        <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
          Which medications have you followed for a successful retrieval (based
          on your parameters)?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="estrogenPriming" />}
            label="Estrogen Priming"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="elpis" />}
            label="Elpis Priming (Androgen + Estrace + Provera)"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="menopur" />}
            label="Menopur"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="rekovelle" />}
            label="Rekovelle"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="gonalF" />}
            label="Gonal F"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="puregon" />}
            label="Puregon"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="pergoveris" />}
            label="Pergoveris"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="clomid" />}
            label="Clomid"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="letrozole" />}
            label="Letrozole"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="saizen" />}
            label="Saizen"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="omnitrope" />}
            label="Omnitrope"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="lupron" />}
            label="Lupron"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="orilissa" />}
            label="Orilissa"
          />
          <FormControlLabel
            control={<Checkbox onChange={() => {}} name="otherMedications" />}
            label="Other"
          />
        </FormGroup>
      </FormControl>

      <div className="floatingButtons">
        <div className="nextButton">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setStep(2)}
          >
            Back(2/3)
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Results
          </Button>
        </div>
      </div>
    </form>
  );
}
