
import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import { Portal } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

// type Variant = 'success' | 'warning' | 'error' | 'info'

interface Props {
	open: boolean,
	classes: object,
	message: any,
	variant: any;
	autoHideDuration: any,
	onClose: () => void,
}

type iconOptions = {
    [key: string]: any,
}

const SnackbarNotification: React.FC<Props> = (props: any) => {
	const { classes, message, variant, autoHideDuration, onClose } = props;
	const variantIcon: iconOptions = {
		success: CheckCircleIcon,
		warning: WarningIcon,
		error: ErrorIcon,
		info: InfoIcon
	}
	const [open, setopen] = useState(true);

	const closeSnackBar = () => {
		setopen(false);
		onClose();
	};

	const Icon = variantIcon[variant];

	const SlideTransition = (props) => {
		return <Slide {...props}  direction="left" />
	  }

	return (
		<Portal>
			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right"
				}}
				TransitionComponent={(props) => SlideTransition(props)}
				className={classes.onTop}
				open={open}
				autoHideDuration={autoHideDuration}
				onClose={closeSnackBar}>
				<SnackbarContent
					className={`${classes[variant]}`}
					aria-describedby="client-snackbar"
					message={
						<span id="client-snackbar" className={classes.message}>
							<Icon className={`${classes.icon} ${classes.iconVariant}`} />
							{message}
						</span>
					}
					action={[
						<IconButton
							key="close"
							aria-label="Close"
							color="inherit"
							className={classes.close}
							onClick={closeSnackBar}>
							<CloseIcon className={classes.icon} />
						</IconButton>
					]}
				/>
			</Snackbar>
		</Portal>
	);
}

SnackbarNotification.propTypes = {
	open: PropTypes.bool.isRequired,
	message: PropTypes.node,
	onClose: PropTypes.func.isRequired,
	variant: PropTypes.oneOf(["success", "warning", "error", "info"]),
	autoHideDuration: PropTypes.number
};

SnackbarNotification.defaultProps = {
	autoHideDuration: 3000, //3 seconds
	variant: "info"
};

export default withStyles(styles, { withTheme: true })(SnackbarNotification);



