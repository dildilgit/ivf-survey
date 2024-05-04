import {
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Checkbox,
} from "@mui/material";
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

  const renderInputRow = (index: number) => (
    <StyledTableRow key={index}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        <Checkbox
          onChange={(e) =>
            handleInputChange(index, "isCancelled", e.target.checked)
          }
        />
      </TableCell>

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
    </StyledTableRow>
  );

  return (
    <div>
      {data.attempts !== null && (
        <TableContainer className={"attemptsTable"} component={Paper}>
          <Table>
            <TableHead>
              <StyledTableRow>
                <TableCell>Attempt #</TableCell>
                <TableCell>Cancelled?</TableCell>
                {headers.map((header) => (
                  <TableCell key={header.key}>{header.label}</TableCell> // Correct use of label for display
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: data.attempts || 0 }, (_, index) =>
                renderInputRow(index)
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
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
