import React from "react";
import { withStyles } from "@material-ui/styles";
import textFieldStyles from "./style";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Custom textfield component used across application - Do not make changes to this file
function CustomTextfield(props) {
  const {
    classes,
    errorMessage,
    error,
    formControlProps,
    id,
    label,
    value,
    labelWidth,
    disabled,
    customClassName,
    ...rest
  } = props;

  return (
    <FormControl
      error={error}
      variant="outlined"
      fullWidth={true}
      className={classes.textFieldCnt}
      {...formControlProps}
    >

      <div className={classes.textFieldInnerCnt}>
        {!!label && label.length &&
          <div className={classes.labelContainer}>
            <InputLabel
              htmlFor={id}
              className={classes.textFieldLabel}
            >
              {label}
            </InputLabel>
            {label === "Password" && (
              <Link to="/auth/forgot-password">
                <div className={classes.forgotPassword}>Forgot Password</div>
              </Link>
            )}
          </div>
        }
        <OutlinedInput
          id={id}
          value={value}
          className={customClassName === "whiteInput" ? classes.whiteTextField : classes.textField}
          disabled={disabled}
          // InputProps={{ disableUnderline: true }}
          InputProps={{
            classes: { input: customClassName === "whiteInput" ? classes.whiteTextField : classes.textField },
            disableUnderline: true
          }}
          multiline={id === "user-message" ? true : false}
          {...rest}
        />
      </div>
      {
        <FormHelperText className={classes.errorCenter} id={id}>
          {error ? errorMessage : ""}
        </FormHelperText>
      }
    </FormControl>
  );
}

// Specifies the value type for props:
CustomTextfield.propTypes = {
  errorMessage: PropTypes.string,
  error: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  formControlProps: PropTypes.object,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

// Specifies the default values for props
CustomTextfield.defaultProps = {
  errorMessage: "",
  error: false
};

export default withStyles(textFieldStyles, { withTheme: true })(
  CustomTextfield
);
