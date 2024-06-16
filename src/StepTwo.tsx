import {
  TextField,
  Checkbox,
  Typography,
  Button,
  FormLabel,
  FormControlLabel,
  AccordionSummary,
  RadioGroup,
  Radio,
} from "@mui/material";
import { FormControl } from "@mui/base/FormControl";
import { IVFAttemptData, SurveyData } from "./StepSection";
import Accordion from "@mui/material/Accordion";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

export const generateNewIVFData = (index: number): IVFAttemptData => ({
  attemptNumber: index,
  isCancelled: undefined,
  isDonor: undefined,
  isICSI: undefined,
  folliclesGrown: null,
  eggsRetrieved: null,
  fertilizedOnDay1: null,
  day3Embryos: null,
  blasts: null,
  pgtNormalEmbryos: null,
  cycleResultType: null,
});

export function Step2({
  setStep,
  data,
  setData,
  nickname,
}: {
  setStep: (step: number) => void;
  data: SurveyData;
  setData: React.Dispatch<React.SetStateAction<SurveyData>>;
  nickname: string;
}) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const sendResults = async () => {
    console.log("Xxx send results");
    const hook = "https://hooks.zapier.com/hooks/catch/14073772/2oqqyrl/";

    const dataToSend = {
      nickname,
      timestamp: Date.now(),
      age: data.age,
      amh: data.amh,
      afc: data.afc,
      fsh: data.fsh,
      attempts: data.attempts,
      ivfData: data.ivfData,
    };

    try {
      const response = await fetch(hook, {
        method: "POST",
        body: JSON.stringify(dataToSend),
      });

      return response.json();
    } catch (e) {}
  };

  let isFormValid = true;
  Object.values(data.ivfData).map((data) => {
    const isFertilizationValid =
      !!data.fertilizedOnDay1 && !!data.eggsRetrieved
        ? data.fertilizedOnDay1 <= data.eggsRetrieved
        : true;
    const isday3Valid =
      !!data.day3Embryos && !!data.eggsRetrieved
        ? data.day3Embryos <= data.eggsRetrieved
        : true;
    const isPgtNormalValid =
      !!data.pgtNormalEmbryos && !!data.eggsRetrieved && !!data.blasts
        ? data.pgtNormalEmbryos <= data.eggsRetrieved ||
          data.pgtNormalEmbryos <= data.blasts
        : true;
    const isDay5Valid =
      !!data.eggsRetrieved && !!data.blasts
        ? data.blasts <= data.eggsRetrieved
        : true;

    if (
      !isFertilizationValid ||
      !isday3Valid ||
      !isPgtNormalValid ||
      !isDay5Valid
    ) {
      isFormValid = false;
    } else {
      isFormValid = true;
    }
  });

  const handleInputChange = (
    index: number,
    field: keyof IVFAttemptData,
    value: string | boolean
  ): void => {
    const dataValue =
      typeof value === "string"
        ? value === ""
          ? null
          : Number.isNaN(Number(value))
          ? value
          : Number(value)
        : Boolean(value);

    setData((prevData) => {
      return {
        ...prevData,
        ivfData: {
          ...prevData.ivfData,
          [index]: { ...prevData.ivfData[index], [field]: dataValue },
        },
      };
    });
  };

  const renderAttempt = (data: IVFAttemptData) => {
    const index = data.attemptNumber;

    const isFertilizationValid =
      !!data.fertilizedOnDay1 &&
      !!data.eggsRetrieved &&
      data.fertilizedOnDay1 > data.eggsRetrieved;
    const isday3Valid =
      !!data.day3Embryos &&
      !!data.eggsRetrieved &&
      data.day3Embryos > data.eggsRetrieved;
    const isPgtNormalValid =
      !!data.pgtNormalEmbryos &&
      !!data.eggsRetrieved &&
      !!data.blasts &&
      (data.pgtNormalEmbryos > data.eggsRetrieved ||
        data.pgtNormalEmbryos > data.blasts);
    const isDay5Valid =
      !!data.eggsRetrieved && !!data.blasts && data.blasts > data.eggsRetrieved;

    return (
      <div className="attemptSection" key={index}>
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleAccordionChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "70%", flexShrink: 0 }}
              className="attemptTitle"
            >
              {" "}
              Attempt # {index + 1}{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="attemptQuestions">
              <FormControl className="question">
                <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
                  # Follicles before retrieval or cancellation
                </FormLabel>
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  required
                  value={data.folliclesGrown}
                  onChange={(event) =>
                    handleInputChange(
                      index,
                      "folliclesGrown",
                      event.target.value
                    )
                  }
                />
              </FormControl>
              <FormControl className="question">
                <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
                  # Eggs Retrieved
                </FormLabel>
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={data.eggsRetrieved}
                  onChange={(event) =>
                    handleInputChange(
                      index,
                      "eggsRetrieved",
                      event.target.value
                    )
                  }
                />
              </FormControl>

              <FormControl className="question">
                <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
                  # Fertilized on Day 1
                </FormLabel>
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={isFertilizationValid}
                  helperText={
                    isFertilizationValid
                      ? "Number fertilized must be less than or equal to the number of eggs"
                      : ""
                  }
                  variant="standard"
                  value={data.fertilizedOnDay1}
                  onChange={(event) =>
                    handleInputChange(
                      index,
                      "fertilizedOnDay1",
                      event.target.value
                    )
                  }
                />
              </FormControl>
              <FormControl className="question">
                <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
                  # Day 3 Embryos
                </FormLabel>
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={data.day3Embryos}
                  error={isday3Valid}
                  helperText={
                    isday3Valid
                      ? "Number must be less than or equal to the number of eggs"
                      : ""
                  }
                  onChange={(event) =>
                    handleInputChange(index, "day3Embryos", event.target.value)
                  }
                />
              </FormControl>
              <FormControl className="question">
                <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
                  # Blastocysts (Day 5+)
                </FormLabel>
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={data.blasts}
                  error={
                    !!data.blasts &&
                    !!data.eggsRetrieved &&
                    data.blasts > data.eggsRetrieved
                  }
                  helperText={
                    !!data.blasts &&
                    !!data.eggsRetrieved &&
                    data.blasts > data.eggsRetrieved
                      ? "Number of blastocysts can not be more than the number of eggs and there shouldn't be more PGT normal embryos than there are blasts"
                      : ""
                  }
                  onChange={(event) =>
                    handleInputChange(index, "blasts", event.target.value)
                  }
                />
              </FormControl>
              <FormControl className="question">
                <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
                  # PGT Normal Embryos
                </FormLabel>
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={data.pgtNormalEmbryos}
                  error={isPgtNormalValid}
                  helperText={
                    isPgtNormalValid
                      ? "Number of blastocysts must be less than or equal to the number of eggs"
                      : ""
                  }
                  onChange={(event) =>
                    handleInputChange(
                      index,
                      "pgtNormalEmbryos",
                      event.target.value
                    )
                  }
                />
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={data.isCancelled}
                    onChange={(event) =>
                      handleInputChange(
                        index,
                        "isCancelled",
                        event.target.checked
                      )
                    }
                    name="cancelled"
                  />
                }
                label="Was cancelled?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={data.isDonor}
                    onChange={(event) =>
                      handleInputChange(index, "isDonor", event.target.checked)
                    }
                    name="donor"
                  />
                }
                label="Donor eggs?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={data.isICSI}
                    onChange={(event) =>
                      handleInputChange(index, "isICSI", event.target.checked)
                    }
                    name="icsi"
                  />
                }
                label="ICSI fertilization?"
              />
              <FormControl className="radioSection">
                <FormLabel id="demo-row-radio-buttons-group-label">
                  What was the result of the embryos (if any)?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event, value) => {
                    console.log("xxx", value);
                    handleInputChange(index, "cycleResultType", value);
                  }}
                >
                  <FormControlLabel
                    value="fresh"
                    control={<Radio />}
                    label="Fresh Transfer"
                  />
                  <FormControlLabel
                    value="frozen"
                    control={<Radio />}
                    label="Embryos frozen"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid) {
      await sendResults();
      setStep(3);
    } else {
      alert("Please correct the errors in the form before proceeding.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {Object.values(data.ivfData).map((attempt) => renderAttempt(attempt))}

      <div className="floatingButtons">
        <div className="nextButton">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setStep(1)}
          >
            Back(1/3)
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!isFormValid}
          >
            Next (3/3)
          </Button>
        </div>
      </div>
    </form>
  );
}
