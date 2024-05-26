import {
  Button,
  FormLabel,
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
  const handleChange = (
    field: keyof SurveyData,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checkedFieldName = event.target.name;
    const isChecked = event.target.checked;

    let updatedField = "";

    if (typeof data[field] === "string") {
      const currentValues = data[field] as string;

      if (isChecked) {
        // Add the checked field name with a comma and a space
        updatedField = currentValues
          ? `${currentValues}, ${checkedFieldName}`
          : checkedFieldName;
      } else {
        // Remove the unchecked field name with comma and space handling
        const regex = new RegExp(`(,\\s*)?${checkedFieldName}(,\\s*)?`);
        updatedField = currentValues.replace(regex, "").trim();

        // Remove leading/trailing commas and spaces
        if (updatedField.startsWith(",")) {
          updatedField = updatedField.substring(1).trim();
        }
        if (updatedField.endsWith(",")) {
          updatedField = updatedField
            .substring(0, updatedField.length - 1)
            .trim();
        }
      }
    }

    setData((prevData) => ({
      ...prevData,
      [field]: updatedField,
    }));
  };

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
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="endometriosis"
              />
            }
            label="Endometriosis"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="adenomyosis"
              />
            }
            label="Adenomyosis"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="abnormalSperm"
              />
            }
            label="Abnormal sperm: Low morphology/ motility/ count etc"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="varicocele"
              />
            }
            label="Varicocele"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="otherMaleFactor"
              />
            }
            label="Other male factor"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="pcos"
              />
            }
            label="PCOS (Polycystic Ovary Syndrome)"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="dor"
              />
            }
            label="DOR (Diminished Ovarian Reserve)"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="poi"
              />
            }
            label="POI / POF (Premature Ovarian Insufficiency / Failure)"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="tubal"
              />
            }
            label="Tubal issues"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="tubal"
              />
            }
            label="Unexplained (no reason was found for either partner"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("diagnosis", event)}
                name="otherDiagnoses"
              />
            }
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
            control={
              <Checkbox
                onChange={(event) => handleChange("supplements", event)}
                name="dhea"
              />
            }
            label="DHEA"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("supplements", event)}
                name="coq10"
              />
            }
            label="CoQ10"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("supplements", event)}
                name="vitD"
              />
            }
            label="Vitamin D"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("supplements", event)}
                name="prenatal"
              />
            }
            label="Prenatal vitamins"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("supplements", event)}
                name="otherSupplements"
              />
            }
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
            control={
              <Checkbox
                onChange={(event) => handleChange("procedures", event)}
                name="unblockTubes"
              />
            }
            label="Unblocking tubes"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("procedures", event)}
                name="laparoscopy"
              />
            }
            label="Laparoscopy"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("procedures", event)}
                name="varicoceleRemoval"
              />
            }
            label="Varicocele"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("procedures", event)}
                name="ovarianPRP"
              />
            }
            label="Ovarian PRP"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("procedures", event)}
                name="polypRemoval"
              />
            }
            label="Uterine Polyp Removal"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("procedures", event)}
                name="immunotherapy"
              />
            }
            label="Immunotherapy"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("procedures", event)}
                name="otherProcedures"
              />
            }
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
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="estrogenPriming"
              />
            }
            label="Estrogen Priming"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="elpis"
              />
            }
            label="Elpis Priming (Androgen + Estrace + Provera)"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="menopur"
              />
            }
            label="Menopur"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="rekovelle"
              />
            }
            label="Rekovelle"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="gonalF"
              />
            }
            label="Gonal F"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="puregon"
              />
            }
            label="Puregon"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="pergoveris"
              />
            }
            label="Pergoveris"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="clomid"
              />
            }
            label="Clomid"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="letrozole"
              />
            }
            label="Letrozole"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="saizen"
              />
            }
            label="Saizen"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="omnitrope"
              />
            }
            label="Omnitrope"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="lupron"
              />
            }
            label="Lupron"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="orilissa"
              />
            }
            label="Orilissa"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChange("medications", event)}
                name="otherMedications"
              />
            }
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
