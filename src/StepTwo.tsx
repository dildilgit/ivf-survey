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

const headers: { label: string; key: keyof IVFAttemptData }[] = [
  { label: "Follicles at Retrieval", key: "folliclesAtRetrieval" },
  { label: "Eggs Retrieved", key: "eggsRetrieved" },
  { label: "Fertilized on Day 1", key: "fertilizedOnDay1" },
  { label: "Day 3 Embryos Transferred", key: "day3EmbryosTransferred" },
  { label: "Blastocysts (Day 5+)", key: "blasts" },
  { label: "PGT Normal Embryos", key: "pgtNormalEmbryos" },
  { label: "Day 5+ Embryos Transferred", key: "day5PlusEmbryosTransferred" },
];

export const generateNewIVFData = () => ({
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
    const dataValue =
      typeof value === "string"
        ? value === ""
          ? null
          : Number(value)
        : Boolean(value);
    setData((prevData) => {
      const newIVFData = [...prevData.ivfData];
      if (!newIVFData[index]) {
        newIVFData[index] = {
          isCancelled: null,
          folliclesAtRetrieval: null,
          eggsRetrieved: null,
          fertilizedOnDay1: null,
          day3EmbryosTransferred: null,
          blasts: null,
          pgtNormalEmbryos: null,
          day5PlusEmbryosTransferred: null,
        };
      }
      // @ts-ignore
      newIVFData[index][field] = dataValue;
      return { ...prevData, ivfData: newIVFData };
    });
  };

  const renderAttempt = (data: IVFAttemptData, index: number) => (
    <Paper className="attemptSection">
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
            value={1}
            onChange={(event) => {}}
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
            value={1}
            onChange={(event) => {}}
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
            value={1}
            onChange={(event) => {}}
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
            value={1}
            onChange={(event) => {}}
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
            value={1}
            onChange={(event) => {}}
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
            value={1}
            onChange={(event) => {}}
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
            value={1}
            onChange={(event) => {}}
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

  return (
    <form onSubmit={() => setStep(3)}>
      {data.ivfData.map((attempt, index) => renderAttempt(attempt, index))}

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
