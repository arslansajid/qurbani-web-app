import React from "react";
import { withStyles } from "@material-ui/styles";
import textFieldStyles from "./style";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

//Custom textfield component used across application - Do not make changes to this file
function CustomTextfield(props) {
  const {
    classes,
    errorMessage,
    error,
    formControlProps,
    id,
    label,
    name,
    value,
    labelWidth,
    disabled,
    customClassName,
    pattern,
    control,
		rules,
    ...rest
  } = props;

  let CLASS;
  if(customClassName === "whiteInput") {
    CLASS = classes.whiteTextField
  } else if(customClassName === "form-input" && error) {
    CLASS = classes.formInputError
  } else if(customClassName === "form-input" && !error) {
    CLASS = classes.formInput
  } else {
    CLASS = classes.textField
  }
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
        <Controller
				as={
        <OutlinedInput
          id={id}
          value={value}
          className={CLASS}
          disabled={disabled}
          // InputProps={{ disableUnderline: true }}
          InputProps={{
            // classes: { input: CLASS},
            disableUnderline: true,
          }}
          inputProps={{ pattern: pattern }}
          multiline={id === "user-message" ? true : false}
          {...rest}
        />
        }
          rules={rules}
          // margin='dense'
          // variant='outlined'
          fullWidth
          label={label}
          name={name}
          control={control}
          defaultValue={value}
			/>
      </div>
      {/* {
        <FormHelperText className={classes.errorCenter} id={id}>
          {error ? errorMessage : ""}
        </FormHelperText>
      } */}
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
