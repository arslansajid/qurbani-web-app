import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Typography, Grid } from '@material-ui/core';
import Colors from '../styles/Colors';
import TextField from "../components/Textfield";
import { useForm } from 'react-hook-form';
import { signInWithEmail } from "../Backend/Services/authService";
import SnackBar from "../components/SnackBar";

interface Props {
    onCancel: any,
}

type FormData = {
    email: string,
    password: string,
};

const SignIn: React.FC<Props> = ({onCancel}) => {
    const [showSnackBar, setShowSnackBar] = React.useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState("");
    const [snackBarVariant, setSnackBarVariant] = React.useState("success");
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const { errors, handleSubmit, control } = useForm<FormData>({});

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        signInWithEmail(data.email, data.password)
            .then((res) => {
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setShowSnackBar(true);
                setSnackBarVariant("error");
                setSnackBarMessage(err)
            })
    }

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography className={classes.heading}>
                Sign In
            </Typography>
            <form key={'form'} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    type='email'
                    name='email'
                    rules={{ required: 'This field is required' }}
                    control={control}
                    error={errors?.email ? true : false}
                    // helperText={errors.email?.message}
                    helperText={"Email"}
                    label={null}
                    defaultValue={''}
                    className='text-field'
                />
                <TextField
                    type='password'
                    name='password'
                    rules={{ required: 'This field is required' }}
                    control={control}
                    error={errors?.password ? true : false}
                    // helperText={errors.email?.message}
                    helperText={"Password"}
                    label={null}
                    defaultValue={''}
                    className='text-field'
                />
                <Grid container alignItems="center" justify="center">
                    <Button type="submit" disabled={isLoading} className={classes.submitButton} variant="contained" color="secondary">
                        <Typography className={classes.submitButtonText}>
                            Sign In
                        </Typography>
                    </Button>
                    <Button onClick={() => onCancel()} disabled={isLoading} className={classes.cancelButton} variant="contained" color="primary">
                        <Typography className={classes.submitButtonText}>
                            Cancel
                        </Typography>
                    </Button>
                    <Typography gutterBottom variant='h6' component='h6'>Don't have an account? <span className={classes.linkGreen}> Sign Up</span></Typography>
                </Grid>
            </form>
            {showSnackBar && (
                <SnackBar
                    open={showSnackBar}
                    message={snackBarMessage}
                    onClose={() => setShowSnackBar(false)}
                    variant={snackBarVariant}
                    autoHideDuration={3000}
                />
            )}
        </div>
    )
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        heading: {
            alignSelf: "left",
            fontSize: "30px",
            fontWeight: 600,
            marginBottom: "45px"
        },
        submitButton: {
            minWidth: "150px",
            height: "40px",
            borderRadius: "5px",
            margin: "20px 10px 20px 0",
            background: Colors.appRed,
        },
        cancelButton: {
            minWidth: "150px",
            height: "40px",
            borderRadius: "5px",
            margin: "20px 0 20px 0",
            background: 'red',
        },
        submitButtonText: {
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19px",
            textTransform: "capitalize",
        },
        linkGreen: {
            cursor: "pointer",
            color: Colors.appRed,
            fontWeight: 600,
        }
    })
);

SignIn.defaultProps = {};

export default SignIn;
