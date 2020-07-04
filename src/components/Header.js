import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Colors from '../styles/Colors';
import { Link } from 'react-router-dom';

import { makeStyles, Button } from '@material-ui/core';

const Header = (props) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.parent}
                style={{
                    backgroundImage: `url(${require("../assets/images/Bull.jpg")})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
            </div>
            <Container>
                <div className={classes.centerTextContainer}>
                    <Typography className={classes.centerText}>
                        Asaan Qurban
                        <br />
                    </Typography>
                </div>
                <div className={classes.hireBtnContainer}>
                    <div className={classes.btnsContainer}>
                        <Link to="/buy">
                            <Button
                                className={classes.hireButton}
                                size="large"
                                variant="outlined"
                                color="primary"
                            >
                                Buy
                            </Button>
                        </Link>
                        <Link to="/sell">
                            <Button
                                className={classes.cvButton}
                                size="large"
                                variant="outlined"
                                color="primary"
                            >
                                Sell
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    centerTextContainer: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        textAlign: 'center',
        color: '#FFFFFF',
        zIndex: 100,

        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    hireBtnContainer: {
        position: 'absolute',
        bottom: '40%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 100,

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            bottom: '40%',
        },
    },
    btnsContainer: {
        display: "flex",
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        bottom: '10%',
        left: '50%',

        [theme.breakpoints.down('xs')]: {
            width: '100%',
            justifyContent: "space-around"
        },
    },
    centerText: {
        fontSize: '3.75em',
        fontWeight: 600,
        lineHeight: '70px',
        zIndex: 1000,
        textAlign: 'left',

        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    },
    parent: {
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '70vh',
        maxHeight: '999px',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        zIndex: 1,
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        filter: 'brightness(0.6)',
    },
    hireButton: {
        textTransform: "capitalize",
        color: "white",
        borderColor: "white",
        borderWidth: "2px",
        fontSize: "1.5em",
        fontWeight: 500,
        whiteSpace: "noWrap",
        minWidth: 150,

        "&:hover": {
            color: "white",
            borderWidth: "2px",
            borderColor: Colors.appRed,
            background: Colors.appRed
        },

        [theme.breakpoints.up('sm')]: {
            marginRight: 15,
        },

        [theme.breakpoints.down('xs')]: {
            minWidth: 150
        },
    },
    cvButton: {
        textTransform: "capitalize",
        color: "white",
        borderColor: "white",
        borderWidth: "2px",
        fontSize: "1.5em",
        fontWeight: 500,
        whiteSpace: "noWrap",
        minWidth: 150,

        "&:hover": {
            color: "white",
            borderWidth: "2px",
            borderColor: Colors.appRed,
            background: Colors.appRed
        },

        [theme.breakpoints.down('xs')]: {
            minWidth: 170
        },
    }
}));

export default Header;
