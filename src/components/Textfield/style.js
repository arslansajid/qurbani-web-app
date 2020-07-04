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
      minHeight: "80px",
      padding: "10px 10px 10px 10px",
      overflow: 'scroll',
      color: Colors.black,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      background: 'white',
      border: "2px solid #EDEDED",
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
  formInputContainer: {
    width: '100%',
    height: 30,
    borderRadius: '50%',

    "& input": {
      textIndent: "10px",
      color: Colors.black,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px"
    },
  },
  formInput: {
    background: 'white',
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    border: "2px solid #EDEDED",
    width: '100%',

    flex: 1,
    minHeight: "20px",
    maxHeight: "100px", //added for textarea message  
    width: "100%",
    marginTop: '0px !important',

    // "&:invalid": {
    //   border: "red solid 2px"
    // },

    "& input": {
      textIndent: "10px",
      color: Colors.black,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px"
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
