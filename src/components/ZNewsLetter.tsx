import React, { useState } from 'react';
import { Typography, Grid, CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '../components/Textfield';
import { subscribeNewsLetter } from "../api"
import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';
import SnackBar from "../components/SnackBar";
import axios from 'axios';

interface Props { }

const NewsLetter: React.FC<Props> = () => {
    const classes = useStyles();
    const [showSnackBar, setShowSnackBar] = React.useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState("");
    const [snackBarVariant, setSnackBarVariant] = React.useState("success");
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [email, setEmail] = useState("");

    const onSubmit = async event => {
        event.preventDefault();
        const userData = {
            'email': email,
        }
        // setIsLoading(true);
        // await axios
        //     .post(
        //         'https://us-central1-davyschess.cloudfunctions.net/httpsNewsLetters/api/v1/newsLetters',
        //         {
        //             ...userData,
        //         }
        //     )
        //     .then((response) => {
        //         setIsLoading(false);
        //         console.log('response', response)
        //         setShowSnackBar(true);
        //         setSnackBarVariant("success");
        //         setSnackBarMessage("You have been subscribed successfully to our newsletter.")
        //     })
        //     .catch((error) => {
        //         setIsLoading(false);
        //         console.log('error', error)
        //         setShowSnackBar(true);
        //         setSnackBarVariant("error");
        //         setSnackBarMessage("Some error occured.")
        //     })
    }
    return (
        <>
            <Container
                disableGutters
                maxWidth='xl'
            >
                <Grid
                    className={classes.footerContainer}
                    justify="center"
                    alignItems="center"
                    container lg={12} md={12} sm={12} xs={12} item
                >
                    <Grid lg={6} md={6} sm={12} xs={12} item>
                        <Typography className={classes.connected}>
                            Let us stay connected
                    </Typography>
                        <Typography className={classes.subscribe}>
                            Subscribe Our Newsletter
                    </Typography>
                        <div className={classes.relative}>
                            <form key={'form'} onSubmit={(e) => onSubmit(e)}>
                                <Input
                                    required
                                    id="email"
                                    type="email"
                                    value={email}
                                    placeholder={"Your email here..."}
                                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                                    customClassName="whiteInput"
                                />
                                <div className={classes.btnContainer}>
                                    <Button disabled={isLoading} className={classes.submitBtn} type="submit" size="large" color="secondary" variant="contained">
                                        {isLoading ? <CircularProgress className="spinner" size={26} color="primary" /> : "Submit"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Grid>
                    <Grid className={classes.imageSection} lg={6} md={6} sm={12} xs={12} item>
                        <div className={classes.imageContainer}>
                            <img alt="news-letter" className={classes.image} src={require("../assets/images/nl@2x.png")} />
                        </div>
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
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        // background: Colors.newsLetterBg,
        background: 'rgba(46, 139, 87, 0.5)',
        padding: '3em',
        borderRadius: 20,

        [theme.breakpoints.down('sm')]: {
            padding: '2em',
        },
    },
    imageContainer: {
        position: 'absolute',
        bottom: -130,
    },
    image: {
        width: 375,
        height: 385,
        objectFit: "cover",

        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    iconsContainer: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        width: '40px',
        height: '40px',
        marginRight: '22px',
    },
    connected: {
        fontSize: '1.2em',
        color: Colors.appRed
    },
    subscribe: {
        fontWeight: 500,
        fontSize: '2.3em',
        color: Colors.appRed,
    },
    btnContainer: {
        position: 'absolute',
        background: "white",
        right: 0,
        top: -5,
        minWidth: 150,
        padding: 9,
        borderRadius: 12,
    },
    submitBtn: {
        width: "100%",
        background: Colors.appRed,
        textTransform: 'capitalize',
        boxShadow: 'none'
    },
    flexEnd: {
        textAlign: 'right'
    },
    relative: {
        position: "relative",
        marginTop: 35
    },
    imageSection: {
        display: "flex",
        justifyContent: "flex-end",
        position: "relative"
    }
}));

export default NewsLetter;