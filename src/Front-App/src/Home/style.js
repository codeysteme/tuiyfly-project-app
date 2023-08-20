import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  homeCenterBox: {
    height: "600px",
    backgroundImage: 'url("/tuiflyhome-large-light-crop.jpg")',
    backgroundAttachment: "scroll",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
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
    border: "1px solid red",
  },
  searchBlock: {
    padding: "1.2em",
    marginTop: "1em",
    height: "150px",
    backgroundColor: "#E3F5FD",
    width: "1020px",
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
}));

export default useStyles;
