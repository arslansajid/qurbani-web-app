import Colors from "../../styles/Colors";

const textFieldStyles = () => ({
  textFieldInnerCnt: {
    //Text Field Inner Container Styles, wrapping input and label
  },
  //for white input
  whiteTextField: {
    background: Colors.white,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",

    flex: 1,
    height: "50px",
    width: "100%",
    marginTop: '0px !important',
    "& input": {
      textIndent: "10px",
      color: Colors.black,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px"
    },
    '&::placeholder': {
      color: Colors.placeHolderText,
      fontWeight: 500,
    }
  },
  textField: {
    // Text Field Styles
    // marginBottom: 20,
    background: Colors.inputBg,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",

    flex: 1,
    minHeight: "50px",
    maxHeight: "100px", //added for textarea message  
    width: "100%",
    marginTop: '0px !important',
    "& textarea": {
      minHeight: "100px",
      padding: "10px 10px 10px 10px",
      overflow: 'scroll',
      color: Colors.black,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px"
    },
    "& input": {
      textIndent: "10px",
      color: Colors.black,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px"
    },
    '&::placeholder': {
      color: Colors.placeHolderText,
      fontWeight: 500,
    }
  },
  labelContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  textFieldLabel: {
    // Text field label styles

    marginBottom: 20,
    transform: "none !important",
    padding: "0 !important",
    position: "static",
    color: "black !important",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "19px"
  },
  errorCenter: {
    textAlign: "center"
  },
  forgotPassword: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "19px",
    color: "#4635C3",
    cursor: "pointer",
    zIndex: 100
  }
});

export default textFieldStyles;
