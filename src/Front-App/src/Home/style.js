import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  homeCenterBox: {
    height: "600px",
    backgroundImage: 'url("/tuiflyhome-large-light-crop.jpg")',
    backgroundAttachment: "scroll",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginBottom: "50px",
  },
  homeCenterTop: {
    backgroundColor: "#D40E14",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    lineHeight: "21px",
    fontSize: "16px",
  },
  searchZone: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around",
  },
  searchBlock: {
    padding: "1.2em",
    marginTop: "1em",
    backgroundColor: "#E3F5FD",
    width: "1200px",
  },
  cleanFilterButton: {
    color: "#1a7ead",
    textTransform: "none",
    borderBottom: "3px solid transparent",
    borderRadius: 0,
    paddingBottom: "2px",
    fontWeight: "normal",
    "&:hover": {
      borderBottomColor: "#1a7ead",
    },
  },
  resultBlock: {
    padding: "1em 1.2em",
    marginTop: "1em",
    backgroundColor: "rgb(0,0,0,0.5)",
    width: "1100px",
    margin: "auto",
  },
}));

const resultText = {
  fontSize: "1.2em",
  textAlign: "center",
  backgroundColor: "#fff",
  padding: "7px",
  width: "200px",
  margin: "auto",
  borderBottom: "2px solid #1a7ead",
};

export { useStyles, resultText };
