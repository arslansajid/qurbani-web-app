import Colors from "../../styles/Colors"

const customSelectStyles = {
  container: (provided, state) => ({
    ...provided,
    width: "100%",
    fontSize: 14
  }),
  clearIndicator: base => ({
    ...base,
    padding: "5px 8px",
    cursor: 'pointer'
  }),
  menuPortal: base => ({ ...base, zIndex: 9999 }),
  option: (base, state) => ({
    ...base,
    "&:focus": {
      outline: "none"
    },
    backgroundColor: state.isSelected ? Colors.appRed : state.isFocused ? Colors.appRed : "white",
    color: state.isSelected || state.isFocused ? "white" : "inherit",
    "&:hover": {
      backgroundColor: 'rgba(46, 139, 87, 0.5)',
      color: "white"
    },
    ':active': {
      ...base[':active'],
      backgroundColor: 'rgba(46, 139, 87, 0.5)',
      color: 'white'
    },
  }),

  singleValue: base => ({
    ...base,
    // textTransform: "lowercase",
    // "&::first-letter": {
    //     textTransform: "capitalize"
    // }
  }),

  control: base => ({
    ...base,
    borderColor: "#fc4336",
    height: "auto",
    minHeight: 40,
    lineHeight: 1,
    borderRadius: 30,
    // backgroundColor: this.state.isValid === false && this.props.validators.length > 0 ? "#FBBDC9" : "white",
    boxShadow: "none",
    border: "2px solid #EDEDED",
    "&:hover": {
      borderWidth: 2
    },
    "&:focus": {
      outline: "none"
    }
  }),

  indicatorSeparator: base => ({
    ...base,
    backgroundColor: '#EDEDED'
  }),
  dropdownIndicator: base => ({
    ...base,
    padding: "5px 8px",
    color: '#EDEDED',
    "&:hover": {
      color: '#EDEDED',
    }
  }),

  valueContainer: base => ({
    ...base,
    padding: "0 15px",
    flexWrap: 'nowrap'
  }),

  placeholder: base => ({
    ...base,
    color: "#BDBDBD",
    fontSize: "inehrit",
    fontWeight: 300
  }),
  colors: {
    primary: "red"
  },
  menu: (base) => ({
    ...base,
    maxHeight: 150,
  }),
  menuList: base => ({
    ...base,
    maxHeight: 150
  }),



}

export default customSelectStyles