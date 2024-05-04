import {
  TextField,
  Button,
  FormLabel,
  FormHelperText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { FormControl } from "@mui/base/FormControl";
import { useState } from "react";

type Data = {
  age: number | null;
  amh: string;
  fsh: string;
  afc: number | null;
  attempts: number | null;
  ivfData: IVFAttemptData[];
};

type IVFAttemptData = {
  folliclesAtRetrieval: number | null;
  eggsRetrieved: number | null;
  fertilizedOnDay1: number | null;
  day3EmbryosTransferred: number | null;
  blasts: number | null;
  pgtNormalEmbryos: number | null;
  day5PlusEmbryosTransferred: number | null;
};

const headers: { label: string; key: keyof IVFAttemptData }[] = [
  { label: "Follicles at Retrieval", key: "folliclesAtRetrieval" },
  { label: "Eggs Retrieved", key: "eggsRetrieved" },
  { label: "Fertilized on Day 1", key: "fertilizedOnDay1" },
  { label: "Day 3 Embryos Transferred", key: "day3EmbryosTransferred" },
  { label: "Blasts", key: "blasts" },
  { label: "PGT Normal Embryos", key: "pgtNormalEmbryos" },
  { label: "Day 5+ Embryos Transferred", key: "day5PlusEmbryosTransferred" },
];

export function Step1({ setStep }: { setStep: (step: number) => void }) {
  const [data, setData] = useState<Data>({
    age: null,
    amh: "",
    fsh: "",
    afc: null,
    attempts: null,
    ivfData: [],
  });

  console.log(data);

  const handleInputChange = (
    index: number,
    field: keyof IVFAttemptData,
    value: string
  ): void => {
    const numericValue = value === "" ? null : Number(value);
    setData((prevData) => {
      const newIVFData = [...prevData.ivfData];
      if (!newIVFData[index]) {
        newIVFData[index] = {
          folliclesAtRetrieval: null,
          eggsRetrieved: null,
          fertilizedOnDay1: null,
          day3EmbryosTransferred: null,
          blasts: null,
          pgtNormalEmbryos: null,
          day5PlusEmbryosTransferred: null,
        };
      }
      newIVFData[index][field] = numericValue;
      return { ...prevData, ivfData: newIVFData };
    });
  };
  const renderInputRow = (index: number) => (
    <TableRow key={index}>
      <TableCell>{index + 1}</TableCell>
      {headers.map((header) => {
        const key = header.key;
        const attemptData = data.ivfData[index];
        const value =
          attemptData && attemptData[key] !== null
            ? attemptData[key]?.toString()
            : "";

        return (
          <TableCell key={key}>
            <TextField
              variant="outlined"
              size="small"
              type="number"
              value={value}
              onChange={(e) => handleInputChange(index, key, e.target.value)}
            />
          </TableCell>
        );
      })}
    </TableRow>
  );
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
            onChange={(event) => setData({ ...data, amh: event.target.value })}
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
            onChange={(event) => setData({ ...data, fsh: event.target.value })}
            inputProps={{
              step: "0.01", // Allows decimal inputs to two decimal places
            }}
          />
        </FormControl>
        <FormControl className="question">
          <FormLabel sx={{ fontSize: "1.1em" }} className="questionLabel">
            What is your Antral Follicular Count (AFC)? You can provide the
            number that you see the most (mode) since it is not always the same.
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
            to the sheet? <br /> If you've previously reported an attempt,
            please only submit new ones.
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

        {data.attempts !== null && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Attempt #</TableCell>
                  {headers.map((header) => (
                    <TableCell key={header.key}>{header.label}</TableCell> // Correct use of label for display
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.from({ length: data.attempts || 0 }, (_, index) =>
                  renderInputRow(index)
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <div className="nextButton">
          <Button variant="contained" color="primary">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
