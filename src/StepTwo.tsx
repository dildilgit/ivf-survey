import {
  TextField,
  TableRow,
  Paper,
  Checkbox,
  Typography,
  Button,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { FormControl } from "@mui/base/FormControl";

import { styled } from "styled-components";
import { IVFAttemptData, SurveyData } from "./StepSection";

export const generateNewIVFData = (index: number): IVFAttemptData => ({
  attemptNumber: index,
  isCancelled: null,
  folliclesAtRetrieval: null,
  eggsRetrieved: null,
  fertilizedOnDay1: null,
  day3EmbryosTransferred: null,
  blasts: null,
  pgtNormalEmbryos: null,
  day5PlusEmbryosTransferred: null,
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
  const handleInputChange = (
    index: number,
    field: keyof IVFAttemptData,
    value: string | boolean
  ): void => {
    console.log("xxx called with index = ", index);
    const dataValue =
      typeof value === "string"
        ? value === ""
          ? null
          : Number(value)
        : Boolean(value);

    console.log("xxx data = ", data, "index = ", index);

    setData((prevData) => {
      const newAttemptData = { ...prevData.ivfData[index], [field]: dataValue };
      console.log("xxx new ivf data AFTER = ", newAttemptData);
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
    console.log("xxx render index ", index);
    return (
      <Paper className="attemptSection" key={index}>
        <Typography variant="overline"> Attempt # {index + 1} </Typography>
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
              required
              value={data.eggsRetrieved}
              onChange={(event) =>
                handleInputChange(index, "eggsRetrieved", event.target.value)
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
              variant="standard"
              required
              value={data.fertilizedOnDay1}
              onChange={(event) =>
                handleInputChange(index, "fertilizedOnDay1", event.target.value)
              }
            />
          </FormControl>
          <FormControl className="question">
            <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
              # Day 3 Embryos Transferred
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
              value={data.day3EmbryosTransferred}
              onChange={(event) =>
                handleInputChange(
                  index,
                  "day3EmbryosTransferred",
                  event.target.value
                )
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
              required
              value={data.blasts}
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
              required
              value={data.pgtNormalEmbryos}
              onChange={(event) =>
                handleInputChange(index, "pgtNormalEmbryos", event.target.value)
              }
            />
          </FormControl>
          <FormControl className="question">
            <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
              # Day 5+ Embryos Transferred
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
              value={data.day5PlusEmbryosTransferred}
              onChange={(event) =>
                handleInputChange(
                  index,
                  "day5PlusEmbryosTransferred",
                  event.target.value
                )
              }
            />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox checked={true} onChange={() => {}} name="cancelled" />
            }
            label="Was cancelled"
          />
        </div>
      </Paper>
    );
  };

  return (
    <form onSubmit={() => setStep(3)}>
      {Object.values(data.ivfData).map((attempt) => renderAttempt(attempt))}

      <div className="nextButton">
        <Button variant="outlined" color="secondary" onClick={() => setStep(1)}>
          Back(1/3)
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Next (3/3)
        </Button>
      </div>
    </form>
  );
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "white",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#ffede0",
  },
}));
