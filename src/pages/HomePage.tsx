import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Typography, Button } from '@material-ui/core';
import Colors from '../styles/Colors';
import Header from '../components/Header';
import NewsLetter from '../components/ZNewsLetter';
import RecommendedCard from '../components/ZHomeCard';
import { videos, news } from '../static/_data';
import { Link } from "react-router-dom";

interface Props { }

const HomePage: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div className='home'>
            {/* <Grid className={classes.container}> */}
            <Header />
            {/* </Grid> */}
            <Container maxWidth='xl'>
                <Grid container className={`${classes.textCenter} ${classes.sectionContainer}`}>
                    <Typography className={`${classes.containerHeading}`}>
                        Most <span className={classes.textRed}> Viewed</span> Animals
                    </Typography>
                    <Typography className={`${classes.headingDescription}`}>
                        Here is the list of most viewed animals on asaanqurban.com
                    </Typography>
                </Grid>
                {/* videos section goes here... */}
                <Grid container direction='row' spacing={0} className={classes.container}>
                    <Grid container>
                        {videos.map((video, index) => {
                            return (
                                <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
                                    <RecommendedCard
                                        price={200000}
                                        weight={600}
                                        location={'Islamabad'}
                                        imageUrl={video.url}
                                        isMostViewed={true}
                                        isRecommended={false}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            {/* </Container> */}

            {/* <Container maxWidth='xl'> */}
                <Grid container className={`${classes.textCenter} ${classes.sectionContainer}`}>
                    <Typography className={classes.containerHeading}>
                        Recommended <span className={classes.textRed}>Animals</span>
                    </Typography>
                    <Typography className={classes.headingDescription}>
                        Get the most recommended animals from asaanqurban.com
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
                                item>
                                <RecommendedCard
                                    price={200000}
                                    weight={600}
                                    location={'Islamabad'}
                                    imageUrl={article.url}
                                    isMostViewed={false}
                                    isRecommended={true}
                                />
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
        sectionContainer: {
            marginTop: 30,
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
            margin: '0.5em 0 1.5em 0',
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
