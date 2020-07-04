import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core';

interface Props {}

const Header: React.FC<Props> = (props: any) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.parent}>
                <img className={classes.image1} alt='matches-header' src={require('../assets/images/chess@2x.png')} />
            </div>
            <Container>
                <div className={classes.centerTextContainer}>
                    <Typography className={classes.centerText}>
                        Matches
                    </Typography>
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
    centerText: {
        fontSize: '2.25em',
        fontWeight: 600,
        lineHeight: '50px',
        zIndex: 1000,
        textAlign: 'left',

        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    },
    parent: {
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '50vh',
        maxHeight: '999px',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        zIndex: 1,
    },
    image1: {
        height: '50vh',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        maxHeight: '999px',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        filter: 'brightness(0.6)',
    },
}));

export default Header;
