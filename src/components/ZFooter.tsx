import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

interface Props { }

const Footer: React.FC<Props> = () => {
    const classes = useStyles();

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
                <Grid lg={4} md={4} sm={12} xs={12} item>
                    <Link className={classes.logoContainer} to="/">
                        <img className={classes.logo} src={require("../assets/images/qurbani-logo.png")} alt="logo" />
                    </Link>
                </Grid>
                <Grid lg={4} md={4} sm={12} xs={12} item>
                    <div className={classes.iconsContainer}>
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <img
                            className={classes.icon}
                            src={require('../assets/images/yt@2x.png')}
                            alt='youtube-icon'
                        />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <img
                            className={classes.icon}
                            src={require('../assets/images/ig@2x.png')}
                            alt='instagram-icon'
                        />
                        </a>
                        <a
                            href="https://fb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <img
                            className={classes.icon}
                            src={require('../assets/images/fb@2x.png')}
                            alt='facebook-icon'
                        />
                        </a>
                    </div>
                </Grid>
                <Grid lg={4} md={4} sm={12} xs={12} item>
                    <div className={classes.textRight}>
                        <Typography className={classes.copyRightText}>
                            Copyright 2020. asaanqurban.com
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://apps.apple.com/us/app/roomy-pk-hotels/id1463746734?mt=8"
                    >
                      <img className={classes.appLink} src={require("../assets/images/svgs/a_store.svg")} alt="" />
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://play.google.com/store/apps/details?id=pk.roomy.app"
                    >
                      <img className={classes.appLink} src={require("../assets/images/svgs/p_store.svg")} alt="" />
                    </a>
            </Grid>
            </Container>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        padding: '40px 0 40px 0',
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
    copyRightText: {
        fontWeight: 500,
        fontSize: 16,
        color: Colors.black,

        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            margin: 30
        },
    },
    textRight : {
        textAlign: 'right'
    },
    logoContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            margin: 40,
        },
    },
    logo: {
        width: 50,
        height: 50,
        objectFit: "contain",
    },
    appLink: {
        marginRight: 10,
    }
}));

export default Footer;
