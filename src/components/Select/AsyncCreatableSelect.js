import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import selectStyles from './style';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import AsyncCreatableSelect from "react-select/async-creatable";
import customSelectStyles from './selectCustomStyles';

//Custom select component used across application - Do not make changes to this file
function CreatableAcyncSelectDropDown(props) {
  const {
    classes,
    theme,
    options,
    isDisabled,
    isClearable,
    defaultValue,
    name,
    label,
    labelAlign,
    labelWidth,
    placeholder,
    loadOptionsCallBack,
    styles,
    handleSelectChange,
    autoFocus,
    maxMenuHeight,
    value,
    customLabelClass,
    menuPosition
  } = props;

  const loadOptions = (inputValue, callback) => {
    loadOptionsCallBack(inputValue, callback);
  };

  return (
    <div style={styles} className={classes.selectCnt}>
      <InputLabel style={{ width: labelWidth }} className={!!customLabelClass ? `${customLabelClass} ${classes.selectLabel} ` : classes.selectLabel}>
        {label}
      </InputLabel>
      <AsyncCreatableSelect
        styles={customSelectStyles}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isClearable={isClearable}
        defaultValue={defaultValue}
        name={name}
        loadOptions={loadOptions}
        onChange={handleSelectChange}
        autoFocus
        maxMenuHeight={maxMenuHeight}
        value={value}
        menuPosition={menuPosition}
      />
    </div>
  );
}

// Specifies the value type for props:
CreatableAcyncSelectDropDown.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.object,
  isDisabled: PropTypes.bool.isRequired,
  isClearable: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelAlign: PropTypes.string,
  labelWidth: PropTypes.number,
  styles: PropTypes.object,
  onSelectAction: PropTypes.func,
  placeholder: PropTypes.string
};

// Specifies the default values for props
CreatableAcyncSelectDropDown.defaultProps = {
  isDisabled: false,
  isClearable: false,
  labelAlign: 'left',
  labelWidth: 100,
  onSelectAction: () => { }
};

export default withStyles(selectStyles, { withTheme: true })(CreatableAcyncSelectDropDown);
