import {
  TextField,
  Paper,
  Checkbox,
  Typography,
  Button,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { FormControl } from "@mui/base/FormControl";
import { IVFAttemptData, SurveyData } from "./StepSection";

export const generateNewIVFData = (index: number): IVFAttemptData => ({
  attemptNumber: index,
  isCancelled: undefined,
  isDonor: undefined,
  isICSI: undefined,
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
              error={
                !!data.fertilizedOnDay1 &&
                !!data.eggsRetrieved &&
                data.fertilizedOnDay1 > data.eggsRetrieved
              }
              helperText={
                !!data.fertilizedOnDay1 &&
                !!data.eggsRetrieved &&
                data.fertilizedOnDay1 > data.eggsRetrieved
                  ? "Number fertilized must be less than or equal to the number of eggs"
                  : ""
              }
              variant="standard"
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
              value={data.day3EmbryosTransferred}
              error={
                !!data.day3EmbryosTransferred &&
                !!data.eggsRetrieved &&
                data.day3EmbryosTransferred > data.eggsRetrieved
              }
              helperText={
                !!data.day3EmbryosTransferred &&
                !!data.eggsRetrieved &&
                data.day3EmbryosTransferred > data.eggsRetrieved
                  ? "Number transferred must be less than or equal to the number of eggs"
                  : ""
              }
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
              error={
                !!data.pgtNormalEmbryos &&
                !!data.eggsRetrieved &&
                !!data.blasts &&
                (data.pgtNormalEmbryos > data.eggsRetrieved ||
                  data.pgtNormalEmbryos > data.blasts)
              }
              helperText={
                !!data.pgtNormalEmbryos &&
                !!data.eggsRetrieved &&
                !!data.blasts &&
                (data.pgtNormalEmbryos > data.eggsRetrieved ||
                  data.pgtNormalEmbryos > data.blasts)
                  ? "Number of blastocysts must be less than or equal to the number of eggs"
                  : ""
              }
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
              value={data.day5PlusEmbryosTransferred}
              error={
                !!data.eggsRetrieved &&
                !!data.blasts &&
                !!data.day5PlusEmbryosTransferred &&
                (data.day5PlusEmbryosTransferred > data.eggsRetrieved ||
                  data.day5PlusEmbryosTransferred > data.blasts)
              }
              helperText={
                !!data.eggsRetrieved &&
                !!data.blasts &&
                !!data.day5PlusEmbryosTransferred &&
                (data.day5PlusEmbryosTransferred > data.eggsRetrieved ||
                  data.day5PlusEmbryosTransferred > data.blasts)
                  ? "Number of day 5 embryos cannot be more than the number of eggs or blasts"
                  : ""
              }
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
              <Checkbox
                checked={data.isCancelled}
                onChange={(event) =>
                  handleInputChange(index, "isCancelled", event.target.checked)
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
                name="cancelled"
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
                name="cancelled"
              />
            }
            label="ICSI fertilization?"
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
