import {
  TextField,
  Paper,
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
  folliclesAtRetrieval: null,
  eggsRetrieved: null,
  fertilizedOnDay1: null,
  day3Embryos: null,
  blasts: null,
  pgtNormalEmbryos: null,
  day5PlusEmbryos: null,
  cycleResultType: null,
});

export function Step2({
  setStep,
  data,
  setData,
}: {
  setStep: (step: number) => void;
  data: SurveyData;
  setData: React.Dispatch<React.SetStateAction<SurveyData>>;
}) {
  const [expanded, setExpanded] = useState<string | false>(false);

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
    const isDay5TransferValid =
      !!data.eggsRetrieved && !!data.blasts && !!data.day5PlusEmbryos
        ? data.day5PlusEmbryos <= data.eggsRetrieved ||
          data.day5PlusEmbryos <= data.blasts
        : true;

    if (
      !isFertilizationValid ||
      !isday3Valid ||
      !isPgtNormalValid ||
      !isDay5TransferValid
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
    const isday3TransferValid =
      !!data.day3Embryos &&
      !!data.eggsRetrieved &&
      data.day3Embryos > data.eggsRetrieved;
    const isPgtNormalValid =
      !!data.pgtNormalEmbryos &&
      !!data.eggsRetrieved &&
      !!data.blasts &&
      (data.pgtNormalEmbryos > data.eggsRetrieved ||
        data.pgtNormalEmbryos > data.blasts);
    const isDay5TransferValid =
      !!data.eggsRetrieved &&
      !!data.blasts &&
      !!data.day5PlusEmbryos &&
      (data.day5PlusEmbryos > data.eggsRetrieved ||
        data.day5PlusEmbryos > data.blasts);

    return (
      <div className="attemptSection">
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
                  # Follicles at Retrieval
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
                  value={data.folliclesAtRetrieval}
                  onChange={(event) =>
                    handleInputChange(
                      index,
                      "folliclesAtRetrieval",
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
                  error={isday3TransferValid}
                  helperText={
                    isday3TransferValid
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
              <FormControl className="question">
                <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
                  # Day 5+ Embryos
                </FormLabel>
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  value={data.day5PlusEmbryos}
                  error={isDay5TransferValid}
                  helperText={
                    isDay5TransferValid
                      ? "Number of day 5 embryos cannot be more than the number of eggs or blasts"
                      : ""
                  }
                  onChange={(event) =>
                    handleInputChange(
                      index,
                      "day5PlusEmbryos",
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
                    value="day3Fresh"
                    control={<Radio />}
                    label="Day 3 Fresh Transfer"
                  />
                  <FormControlLabel
                    value="day5+Fresh"
                    control={<Radio />}
                    label="Day 5+ Fresh Transfer"
                  />
                  <FormControlLabel
                    value="allFreeze"
                    control={<Radio />}
                    label="All embryos frozen"
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

  return (
    <form className="form" onSubmit={() => setStep(3)}>
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
