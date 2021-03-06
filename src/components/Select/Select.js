import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import selectStyles from './style';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select';
import customSelectStyles from './selectCustomStyles';
import customSelectErrorStyles from './customSelectErrorStyles';
import { Controller } from "react-hook-form";

//Custom select component used across application - Do not make changes to this file
function SelectDropdown(props) {
	const [value, setValue] = useState(props.defaultValue);
	useEffect(() => {
		setValue(props.defaultValue);
	}, [props.defaultValue]);
	//Function called when ever the select change is called, e.g. value is remove or value is selected from select
	const handleSelectChange = (option, meta) => {
		const { onSelectAction } = props;
		if (!!props.multiple) {
			onSelectAction(option);
		} else {
			if (meta.action === 'select-option') {
				//on Select action is function from props used to called when any option is selected and it passes the selected option to parent
				onSelectAction(option);
				setValue(option);
			} else if (meta.action === 'clear') {
				onSelectAction(null);
				setValue('');
			}
		}
	};
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
		multiple,
		onChange,
		styles,
		control,
		rules,
		error,
		errorMessage
	} = props;

	return (
		<>
		<div style={styles} className={classes.selectCnt}>
			{!!label && label.length && (
				<InputLabel style={{ width: labelWidth }} className={classes.selectLabel}>
					{label}
				</InputLabel>
			)}
			<Controller
				as={
					<Select
						styles={error ? customSelectErrorStyles : customSelectStyles}
						placeholder={placeholder}
						isDisabled={isDisabled}
						isClearable={isClearable}
						defaultValue={defaultValue}
						name={name}
						value={value}
						options={options}
						onChange={handleSelectChange}
						isMulti={multiple}
					// menuPlacement="top"
					/>
				}
				rules={rules}
                // margin='dense'
                // variant='outlined'
				fullWidth
				label={label}
                name={name}
				control={control}
				valueName={value}
				onChange={([selected]) => {
					// React Select return object instead of value for selection
					props.onSelectAction(selected);
					return selected;
				  }}
			/>
		</div>
		</>
	);
}

// Specifies the value type for props:
SelectDropdown.propTypes = {
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
	placeholder: PropTypes.string,
	multiple: PropTypes.bool,
	control: PropTypes.any,
	rules: PropTypes.any,
	error: PropTypes.any,
	errorMessage: PropTypes.string,
};

// Specifies the default values for props
SelectDropdown.defaultProps = {
	isDisabled: false,
	isClearable: false,
	labelAlign: 'left',
	labelWidth: 100,
	onSelectAction: () => { },
};

export default withStyles(selectStyles, { withTheme: true })(SelectDropdown);
