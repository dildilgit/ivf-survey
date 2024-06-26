import { TextField, Button, FormLabel, FormHelperText } from "@mui/material";
import { FormControl } from "@mui/base/FormControl";
import { IVFAttemptData, SurveyData } from "./StepSection";
import { generateNewIVFData } from "./StepTwo";

export function Step1({
  setStep,
  data,
  setData,
}: {
  setStep: (step: number) => void;
  data: SurveyData;
  setData: React.Dispatch<React.SetStateAction<SurveyData>>;
}) {
  return (
    <form onSubmit={() => setStep(2)}>
      <FormControl className="question">
        <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
          What is the age you are reporting for?
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
          value={data.age}
          onChange={(event) =>
            setData({ ...data, age: parseInt(event.target.value) })
          }
        />
      </FormControl>
      <FormControl className="question">
        <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
          What is your AMH (Anti-mullerian hormone) in ng/mL
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
          value={data.amh}
          onChange={(event) =>
            setData({ ...data, amh: parseFloat(event.target.value) })
          }
          inputProps={{
            step: "0.01", // Allows decimal inputs to two decimal places
          }}
        />
        <FormHelperText sx={{ fontSize: "0.8em" }}>
          You can{" "}
          <a href="https://unitslab.com/node/155">
            use this conversion tool to convert from other metrics.
          </a>
        </FormHelperText>
      </FormControl>
      <FormControl className="question">
        <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
          What is your highest recorded FSH (mIU/mL)
        </FormLabel>
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={data.fsh}
          onChange={(event) =>
            setData({ ...data, fsh: parseFloat(event.target.value) })
          }
          inputProps={{
            step: "0.01", // Allows decimal inputs to two decimal places
          }}
        />
      </FormControl>
      <FormControl className="question">
        <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
          What is your Antral Follicular Count (AFC)? You can provide the number
          that you see the most (mode) since it is not always the same.
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
          value={data.afc}
          onChange={(event) =>
            setData({ ...data, afc: parseInt(event.target.value) })
          }
        />
      </FormControl>
      <FormControl className="question">
        <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
          How many IVF attempts (a cancelled attempt counts) have you had so far
          that you haven't reported to the sheet? <br /> If you've previously
          reported an attempt, please only submit new ones.
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
          value={data.attempts}
          onChange={(event) => {
            const attemptsNumber = parseInt(event.target.value);
            const ivfData: Record<
              IVFAttemptData["attemptNumber"],
              IVFAttemptData
            > = {};

            for (let i = 0; i < attemptsNumber; i++) {
              ivfData[i] = generateNewIVFData(i);
            }

            setData({ ...data, attempts: attemptsNumber, ivfData });
          }}
        />
      </FormControl>

      <div className="floatingButtons">
        <div className="nextButton">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setStep(0)}
          >
            Back to Intro
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            // onClick={() => {
            //   console.log("xxx on next ");
            //   sendResults();
            // }}
          >
            Next (2/3)
          </Button>
        </div>
      </div>
    </form>
  );
}
