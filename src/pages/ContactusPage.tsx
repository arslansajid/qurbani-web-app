import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from '../components/ZHeader';
import Container from '@material-ui/core/Container';
import { Grid, Typography, Button, Paper, CircularProgress } from '@material-ui/core';
import Colors from '../styles/Colors';
import { useForm } from 'react-hook-form';
import Input from '../components/Textfield';
import { contactUs } from '../api';
import SnackBar from '../components/SnackBar';
import axios from 'axios';

interface Props {}

type FormData = {};

const ContactUs: React.FC<Props> = () => {
    const classes = useStyles();
    const { errors, handleSubmit, control } = useForm<FormData>({});

    const [showSnackBar, setShowSnackBar] = React.useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState('');
    const [snackBarVariant, setSnackBarVariant] = React.useState('success');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const onSubmit = async (data: FormData) => {
        const userData = {
            name: name,
            email: email,
            message: message,
        };
        // setIsLoading(true);
        // await axios
        //     .post(
        //         'https://us-central1-davyschess.cloudfunctions.net/httpsContactUs/api/v1/contactUs',
        //         {
        //             ...data,
        //         }
        //     )
        //     .then((response) => {
        //         setIsLoading(false);
        //         console.log('response', response);
        //         setShowSnackBar(true);
        //         setSnackBarVariant('success');
        //         setSnackBarMessage('Your message has been received successfully.');
        //     })
        //     .catch((error) => {
        //         setIsLoading(false);
        //         console.log('error', error);
        //         setShowSnackBar(true);
        //         setSnackBarVariant('error');
        //         setSnackBarMessage('Some error occured.');
        //     });
    };

    return (
        <div className={classes.contactUs}>
            <Header />
            <Container className={classes.container} maxWidth='xl'>
                <Grid container>
                    <Grid lg={6} md={12} sm={12} xs={12} item>
                        <Typography className={classes.infoHeading}>Info</Typography>
                        <Grid className={classes.row} container>
                            <Grid lg={1} md={1} sm={2} xs={2} item>
                                <img
                                    alt='msg-icon'
                                    className={classes.icon}
                                    src={require('../assets/images/msg@2x.png')}
                                />
                            </Grid>
                            <Grid lg={11} md={11} sm={10} xs={10} item>
                                <Typography className={classes.contactDetails}>
                                    support@asaanqurban.com
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.row} container>
                            <Grid lg={1} md={1} sm={2} xs={2} item>
                                <img
                                    alt='call-icon'
                                    className={classes.icon}
                                    src={require('../assets/images/call@2x.png')}
                                />
                            </Grid>
                            <Grid lg={11} md={11} sm={10} xs={10} item>
                                <Typography className={classes.contactDetails}>
                                    +008-45678-015465
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.row} container>
                            <Grid lg={1} md={1} sm={2} xs={2} item>
                                <img
                                    alt='address-icon'
                                    className={classes.icon}
                                    src={require('../assets/images/address@2x.png')}
                                />
                            </Grid>
                            <Grid lg={11} md={11} sm={10} xs={10} item>
                                <Typography className={classes.contactDetails}>
                                    House 8, Road 14 <br />
                                    Lahore, Pakistan - 1209
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid lg={6} md={6} sm={12} xs={12} item style={{ position: 'relative' }}>
                        <Paper className={classes.inputContainer}>
                            <form key={'form'} onSubmit={handleSubmit(onSubmit)}>
                                <div className={classes.inputRow}>
                                    <Input
                                        required
                                        id='first-name'
                                        value={name}
                                        placeholder={'John Smith'}
                                        label={'Name'}
                                        onChange={(e: {
                                            target: { value: React.SetStateAction<string> };
                                        }) => setName(e.target.value)}
                                        // customClassName="whiteInput"
                                        // error={true}
                                        errorMessage={'This field is required'}
                                    />
                                </div>
                                <div className={classes.inputRow}>
                                    <Input
                                        required
                                        id='user-email'
                                        type='email'
                                        value={email}
                                        placeholder={'sample@domain.com'}
                                        label={'Email'}
                                        onChange={(e: {
                                            target: { value: React.SetStateAction<string> };
                                        }) => setEmail(e.target.value)}
                                        // customClassName="whiteInput"
                                        errorMessage={'This field is required'}
                                    />
                                </div>
                                <div className={classes.inputRow}>
                                    <Input
                                        required
                                        id='user-message'
                                        type='text'
                                        value={message}
                                        placeholder={'Type here...'}
                                        label={'Message'}
                                        onChange={(e: {
                                            target: { value: React.SetStateAction<string> };
                                        }) => setMessage(e.target.value)}
                                        // customClassName="whiteInput"
                                        errorMessage={'This field is required'}
                                    />
                                </div>
                                <Button
                                    disabled={isLoading}
                                    className={classes.submitButton}
                                    type='submit'
                                    color='secondary'
                                    variant='contained'>
                                    {isLoading ? (
                                        <CircularProgress
                                            className='spinner'
                                            size={26}
                                            color='primary'
                                        />
                                    ) : (
                                        'Submit'
                                    )}
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
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
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contactUs: {
            marginTop: 64, //header's height
        },
        container: {
            marginTop: 50,
        },
        infoHeading: {
            fontSize: '1.5em',
            fontWeight: 600,
            color: Colors.black,
            marginBottom: '2em',
        },
        row: {
            marginBottom: '1em',
        },
        icon: {
            width: 36,
            height: 36,
        },
        contactDetails: {
            fontSize: '1.15em',
            fontWeight: 500,
            color: Colors.black,
        },
        inputContainer: {
            padding: '3.125em',

            [theme.breakpoints.up('lg')]: {
                position: 'absolute',
                top: '-50vh',
                zIndex: 1,
                right: 0,
                width: '370px',
            },
        },
        inputRow: {
            marginBottom: 40,
        },
        submitButton: {
            background: Colors.appRed,
            minWidth: 200,
            minHeight: 50,
            textTransform: 'capitalize',
            fontWeight: 500,
            width: '100%',
        },
        submitButtonText: {},
    })
);

ContactUs.defaultProps = {};

export default ContactUs;
