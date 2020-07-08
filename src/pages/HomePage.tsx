import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Typography, Button } from '@material-ui/core';
import Colors from '../styles/Colors';
import Header from '../components/Header';
import NewsLetter from '../components/ZNewsLetter';
import NewsCard from '../components/ZNewsCard';
import ZVideoCard from '../components/ZVideoCard';
import { videos, news } from '../static/_data';
import { getYoutubeVideos } from "../api";
import { Link } from "react-router-dom";

interface Props { }

const HomePage: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div className='home'>
            {/* <Grid className={classes.container}> */}
            <Header />
            {/* </Grid> */}
            <Container className={classes.btnsContainer} maxWidth='xl'>
                <Grid container className={classes.textCenter}>
                    <Typography className={`${classes.containerHeading}`}>
                        Most <span className={classes.textRed}> Viewed</span> Animals
                    </Typography>
                    <Typography className={`${classes.headingDescription}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been.
                    </Typography>
                </Grid>
                {/* videos section goes here... */}
                <Grid container direction='row' spacing={0} className={classes.container}>
                    <Grid container>
                        {videos.map((video, index) => {
                            return (
                                <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
                                    <ZVideoCard imageUrl={video.url} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>

            {/* bigger images section goes here */}
            {/* <Grid
                container
                className={classes.seeMoreButtonContainer}
                justify='center'
                alignItems='center'
                lg={12}
                md={12}
                sm={12}
                xs={12}
                item>
                <Button
                    className={classes.seeMoreButton}
                    size='large'
                    color='secondary'
                    variant='contained'>
                    See More
                </Button>
            </Grid> */}

            {/* what we do section goes here */}

            <Container maxWidth='xl'>
                {/* <Grid spacing={5} container className={classes.section}>
                    <Grid lg={6} md={6} sm={12} xs={12} item style={{ position: 'relative' }}>
                        <div className={classes.redBorder} />
                        <div className={classes.imageLeftContainer}>
                            <img
                                alt='story-img'
                                className={classes.image}
                                src={require('../assets/images/story.png')}
                            />
                        </div>
                    </Grid>
                    <Grid className={classes.textCenter} lg={6} md={6} sm={12} xs={12} item>
                        <div className='content'>
                            <Typography className={classes.containerHeading}>
                                <span className={classes.textRed}>What</span> We Do
                            </Typography>
                            <Typography className={classes.headingDescription}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been.
                            </Typography>
                            <Grid container>
                                <Grid lg={1} md={1} sm={2} xs={2} item>
                                    <img
                                        alt='bullet-1'
                                        className={classes.icon}
                                        src={require('../assets/images/b-1@2x.png')}
                                    />
                                </Grid>
                                <Grid lg={11} md={11} sm={10} xs={10} item>
                                    <Typography className={classes.descriptionHeading}>
                                        How We <span className={classes.textRed}>Generate</span> The
                                        Ideas
                                    </Typography>
                                    <Typography className={classes.descriptionText}>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at
                                        its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, as opposed.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid lg={1} md={1} sm={2} xs={2} item>
                                    <img
                                        alt='bullet-2'
                                        className={classes.icon}
                                        src={require('../assets/images/b-2@2x.png')}
                                    />
                                </Grid>
                                <Grid lg={11} md={11} sm={10} xs={10} item>
                                    <Typography className={classes.descriptionHeading}>
                                        We <span className={classes.textRed}>Distribute</span> The
                                        Matches
                                    </Typography>
                                    <Typography className={classes.descriptionText}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random
                                        text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid lg={1} md={1} sm={2} xs={2} item>
                                    <img
                                        alt='bullet-3'
                                        className={classes.icon}
                                        src={require('../assets/images/b-3@2x.png')}
                                    />
                                </Grid>
                                <Grid lg={11} md={11} sm={10} xs={10} item>
                                    <Typography className={classes.descriptionHeading}>
                                        We Enlarge Your{' '}
                                        <span className={classes.textRed}>Knowledge</span>
                                    </Typography>
                                    <Typography className={classes.descriptionText}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random
                                        text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button
                                className={classes.seeMoreButton}
                                size='large'
                                color='secondary'
                                variant='contained'>
                                Contact Us
                            </Button>
                            <Button className={classes.learnMoreButton} size='large' variant='text'>
                                Learn More
                            </Button>
                        </div>
                    </Grid>
                </Grid> */}

                {/* story section goes here */}
                {/* <Grid className={classes.section} container>
                    <Grid className={classes.textCenter} lg={6} md={6} sm={12} xs={12} item>
                        <div className='content'>
                            <Typography className={classes.containerHeading}>
                                Our <span className={classes.textRed}>Story</span>
                            </Typography>
                            <Typography className={classes.headingDescription}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been.
                            </Typography>
                            <Grid container>
                                <Grid lg={1} md={1} sm={2} xs={2} item>
                                    <img
                                        alt='bullet-4'
                                        className={classes.icon}
                                        src={require('../assets/images/b-4@2x.png')}
                                    />
                                </Grid>
                                <Grid lg={11} md={11} sm={10} xs={10} item>
                                    <Typography className={classes.descriptionHeading}>
                                        How We <span className={classes.textRed}>Developed</span>{' '}
                                        Ourselve
                                    </Typography>
                                    <Typography className={classes.descriptionText}>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at
                                        its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, as opposed.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid lg={1} md={1} sm={2} xs={2} item>
                                    <img
                                        alt='bullet-5'
                                        className={classes.icon}
                                        src={require('../assets/images/b-5@2x.png')}
                                    />
                                </Grid>
                                <Grid lg={11} md={11} sm={10} xs={10} item>
                                    <Typography className={classes.descriptionHeading}>
                                        We <span className={classes.textRed}>Believe</span> in
                                        Quality
                                    </Typography>
                                    <Typography className={classes.descriptionText}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random
                                        text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button
                                className={classes.seeMoreButton}
                                size='large'
                                color='secondary'
                                variant='contained'>
                                Contact Us
                            </Button>
                            <Button className={classes.learnMoreButton} size='large' variant='text'>
                                Learn More
                            </Button>
                        </div>
                    </Grid>
                    <Grid
                        className={classes.contentSection}
                        lg={6}
                        md={6}
                        sm={12}
                        xs={12}
                        item
                        style={{ position: 'relative' }}>
                        <div className={classes.redBorder} />
                        <div className={classes.imageRightContainer}>
                            <img
                                alt='story-img'
                                className={classes.image}
                                src={require('../assets/images/story.png')}
                            />
                        </div>
                    </Grid>
                </Grid> */}

                <Grid container className={classes.textCenter}>
                    <Typography className={classes.containerHeading}>
                        Recommended <span className={classes.textRed}>Animals</span>
                    </Typography>
                    <Typography className={classes.headingDescription}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been.
                    </Typography>
                </Grid>

                {/* news section goes here... */}
                <Grid container>
                    {news.map((article, index) => {
                        return (
                            <Grid
                                key={index}
                                lg={4}
                                md={4}
                                sm={6}
                                xs={12}
                                container
                                alignItems='center'
                                direction='column'
                                item>
                                <NewsCard imageUrl={article.url} />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid
                    container
                    className={classes.seeMoreButtonContainer}
                    justify='center'
                    alignItems='center'
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    item>
                    <Link to="/buy">
                        <Button
                            className={classes.seeMoreButton}
                            size='large'
                            color='secondary'
                            variant='contained'>
                            See More
                        </Button>
                    </Link>
                </Grid>
            </Container>
            <NewsLetter />
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            // marginBottom: '100px',
        },
        imgContainer: {
            width: '100%',
            height: '100%',
            position: 'relative',
            minHeight: 620,
        },
        landingImage: {
            position: 'absolute',
            right: '-1px',
            top: '64px',
            width: '50%',
            objectFit: 'cover',
            // filter: 'brightness(0.6)',

            '@media (min-width: 1440px)': {
                width: '50%'
            },

            "@media only screen and (min-width:1441px) and (max-width:2560px)": {
                width: 'unset',
                maxWidth: '1440px !important',
            },

            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        horseIcon: {
            width: 46,
            height: 96,
        },
        landingHeading: {
            fontSize: '3.75em',
            fontWeight: 600,
            fontColor: Colors.black,
            marginBottom: 28,
        },
        landingHeadingRed: {
            fontSize: '1.5em',
            fontWeight: 600,
            color: Colors.appRed,
            marginBottom: 28,
        },
        landingDescription: {
            fontSize: '1.15em',
            fontColor: Colors.black,
            marginBottom: 28,
        },
        btnsContainer: {
            marginTop: 30,
        },
        // textCenter: {
        //     textAlign: 'center'
        // },
        // imagefilter: {
        //     "&:after" : {
        //       backgroundColor: "rgba(0, 0, 0, 0.5)",
        //       content: "",
        //       display: "block",
        //       height: "100%",
        //       left: 0,
        //       position: "absolute",
        //       top: 0,
        //       width: "100%",
        //       zIndex: 10,
        //     }
        // },
        section: {
            marginBottom: '4em',
        },
        heading: {
            color: Colors.white,
            lineHeight: '50px',
            fontWeight: 600,
            fontSize: '2.625em',
            marginBottom: '25px',

            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
            },
        },
        containerHeading: {
            fontSize: '2em',
            fontWeight: 'bold',
            flexGrow: 1,
        },
        headingDescription: {
            color: '#8E8E8E',
            fontSize: 20,
            margin: '1em 0 2em 0',
        },
        descriptionHeading: {
            fontSize: '1.15em',
            fontWeight: 500,
            color: Colors.black,
        },
        descriptionText: {
            fontSize: '1em',
            fontWeight: 400,
            color: Colors.textGrey,
            marginTop: 12,
            marginBottom: 32,
        },
        contactButton: {
            background: '#EBEBEB',
            fontWeight: 500,
            textTransform: 'capitalize',
            color: Colors.black,
            whiteSpace: 'nowrap',
            minWidth: 200,
            minHeight: 60,
            borderRadius: 30,

            '&:hover': {
                color: Colors.brandColor,
            },
        },
        contactButtonText: {
            fontSize: '1.25em',
            fontWeight: 500,
            [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
            },
        },
        border: {
            background: Colors.border,
            height: '7px',
            width: '45px',
            marginTop: '10px',
            marginBottom: '20px',
        },
        sectionHeading: {
            fontSize: '26px',
            lineHeight: '40px',
            color: Colors.headingBlue,
        },
        sectiondescription: {
            textAlign: 'center',
            color: Colors.black,
            fontSize: '20px',
            lineHeight: '32px',
        },
        spaceBetween: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexGrow: 1,
            marginBottom: '2em',
        },
        viewAllText: {
            color: Colors.blue,
            fontWeight: 'bold',
            textTransform: 'capitalize',
        },
        landingLeftContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '100px',
            paddingBottom: '100px',
        },
        textCenter: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        textCenterDescription: {
            fontSize: '2em',
            fontWeight: 600,
        },
        firstImageTextContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',

            width: '60%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        secondImageTextContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',

            width: '60%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
        },
        textAlignRight: {
            textAlign: 'right',
            fontSize: '1.25em',
            fontWeight: 500,
            color: Colors.white,
            marginBottom: 30,
        },
        seeMoreButtonContainer: {
            marginTop: 90,
            marginBottom: 150,
        },
        seeMoreButton: {
            background: Colors.appRed,
            minWidth: 200,
            minHeight: 50,
            textTransform: 'capitalize',
            fontWeight: 500,
        },
        learnMoreButton: {
            textTransform: 'capitalize',
            fontWeight: 500,
            minHeight: 50,
            color: Colors.black,
            marginLeft: 10,
        },
        textRed: {
            color: Colors.appRed,
        },
        contentSection: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        redBorder: {
            background: Colors.appRed,
            width: '50%',
            height: '100%',
            minHeight: 830,
        },
        imageRightContainer: {
            height: 650,
            padding: 25,
            position: 'absolute',
            backgroundColor: Colors.white,
            top: '7%',
            right: '17%',
        },
        imageLeftContainer: {
            height: 650,
            padding: 25,
            position: 'absolute',
            backgroundColor: Colors.white,
            top: '10%',
            left: '17%',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        icon: {
            width: 36,
            height: 36,
        },
    })
);

HomePage.defaultProps = {};

export default HomePage;
