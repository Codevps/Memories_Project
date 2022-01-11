import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  [theme.breakpoints.down("md")]: {
    userName: {
      display: "none",
    },
    heading: {
      fontSize: "3rem",
    },
    image: {
      marginLeft: "10px",
      height: "3rem",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-start",
      width: "12rem",
    },
    logout: {
      fontSize: "1rem",
      width: "auto",
      height: "auto",
    },
  },

  [theme.breakpoints.down("xs")]: {
    userName: {
      display: "none",
    },
    appBar: {
      padding: ".8rem",
      flexDirection: "column",
      margin: "20px 0",
    },
    heading: {
      fontSize: "2.4rem",
    },
    image: {
      marginLeft: "10px",
      height: "2.4rem",
    },
    logout: {
      fontSize: ".7rem",
      width: "auto",
      height: "auto",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-start",
      width: "12rem",
    },
  },
}));
