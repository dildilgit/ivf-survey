import { TextField, Button, FormLabel, FormHelperText } from "@mui/material";
import { FormControl } from "@mui/base/FormControl";
import { useState } from "react";

type Data = {
  age: number | null;
  amh: number | null;
  fsh: number | null;
  afc: number | null;
  attempts: number | null;
};

export function Step1({ setStep }: { setStep: (step: number) => void }) {
  const [data, setData] = useState<Data>({
    age: null,
    amh: null,
    fsh: null,
    afc: null,
    attempts: null,
  });

  console.log(data);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("Form Submitted");
          setStep(2);
        }}
      >
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
              setData({ ...data, amh: parseInt(event.target.value) })
            }
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
            What is your highest recorded FSH (miU/mL)
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
            value={data.fsh}
            onChange={(event) =>
              setData({ ...data, fsh: parseInt(event.target.value) })
            }
          />
        </FormControl>
        <FormControl className="question">
          <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
            What is your Antral Follicular Count (AFC)? You can provide an
            average since it is not always the same.
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
            How many IVF attempts have you had so far that you haven't reported
            to the sheet? If you've previously reported an attempt, please only
            submit new ones.
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
            onChange={(event) =>
              setData({ ...data, attempts: parseInt(event.target.value) })
            }
          />
        </FormControl>

        <div className="nextButton">
          <Button variant="contained">Next</Button>
        </div>
      </form>
    </div>
  );
}
