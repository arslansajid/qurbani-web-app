import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

interface Props {}

const Header: React.FC<Props> = (props: any) => {
    const classes = useStyles();

    // let pageHeader: any = React.createRef();

    // React.useEffect(() => {
    //   if (window.innerWidth < 991) {
    //     const updateScroll = () => {
    //       let windowScrollTop = window.pageYOffset / 3;
    //       pageHeader.current.style.transform =
    //         "translate3d(0," + windowScrollTop + "px,0)";
    //     };
    //     window.addEventListener("scroll", updateScroll);
    //     return function cleanup() {
    //       window.removeEventListener("scroll", updateScroll);
    //     };
    //   }
    // }, []);

    return (
        <>
            <div className={classes.parent}>
                <img className={classes.image2} alt='map-img' src={require('../assets/images/map2@2x.png')} />
                {/* <img
                    className={classes.image1}
                    alt='points-img'
                    src={require('../assets/images/mapPoints@2x.png')}
                /> */}
            </div>
            <Container>
                <div className={classes.motto}>
                    <Typography className={classes.motoText}>
                        Contact Us
                    </Typography>
                </div>
            </Container>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    pageHeader: {
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '30vh',
        maxHeight: '999px',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        zIndex: 1,
    },
    motto: {
        position: 'absolute',
        top: '52%',
        left: '22%',
        transform: 'translate(-50%,-50%)',
        textAlign: 'center',
        color: '#FFFFFF',
        zIndex: 100,

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            left: '32%',
        },
    },
    motoText: {
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
        // backgroundPosition: 'center center',
        backgroundColor: Colors.appRed,
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
        // backgroundSize: 'cover',
        maxHeight: '999px',
        overflow: 'hidden',
        position: 'relative',
        // width: '100%',
        left: '15%'
    },
    image2: {
        position: 'absolute',
        top: 0,
        objectFit: 'contain',
        // width: '100%',
        height: '50vh',
        left: '5%'
    },
}));

export default Header;
