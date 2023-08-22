import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  inputLabel: {
    fontSize: "13px",
    fontWeight: "normal",
    color: "#09295D",
  },
  boxId: {
    backgroundColor: "#C6EAFB",
    color: "#4D4D4D",
    padding: "2px 4px",
    borderRadius: "5px",
    fontWeight: "none",
    fontSize: "12px",
  },
  boxName: {
    color: "#1a7ead",
    fontSize: "13px",
  },
}));

const autoCompleteStyle = {
  width: "205px",
  bgcolor: "#fff",
  input: { fontSize: "13px" },
  svg: { color: "#1a7ead", fontSize: "20px" },
  noOptionsText: { color: "#1a7ead", fontSize: "20px" },
};

export { useStyles, autoCompleteStyle };
