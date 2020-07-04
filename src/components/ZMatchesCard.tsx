import React, { useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import UserCard from "./ZUserCard"
import WinnerCard from "./ZWinnerCard"
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

interface Props {
    date: string,
    time: string,
    result: boolean,
 }

const UpcomingMatchesCard: React.FC<Props> = ({date, time, result}) => {
    const classes = useStyles();
    const [readMore, setReadMore] = useState(false);

    return (
        <>
        <div className={classes.cardContainer}>
            <Grid
                container
                alignItems="center"
            >

                <Grid
                    item
                    lg={3} md={3} sm={12} xs={12}
                    className={classes.dateContainer}
                >
                    <div>
                        <Typography className={classes.date}>{date}</Typography>
                        <Typography className={classes.date}>{time}</Typography>
                        </div>
                   <Button
                        className={classes.ytBtnSmall}
                        // startIcon={<img alt="ytIcon" src={require("../assets/images/yt-btn.png")} />}
                        startIcon={<YouTubeIcon fontSize={"large"} />}
                        color="secondary" variant="outlined" size="medium">
                        <Typography>Watch on YouTube</Typography>
                    </Button>
                </Grid>
                <Grid
                    item
                    lg={3} md={3} sm={5} xs={5}
                >
                    <UserCard
                        name="John Smith"
                        image=""
                    />
                </Grid>
                <Grid
                    item
                    lg={1} md={1} sm={2} xs={2}
                    className={classes.vsContainer}
                >
                    <Typography className={classes.vs}>Vs</Typography>
                </Grid>
                <Grid
                    item
                    lg={3} md={3} sm={5} xs={5}
                >
                    <UserCard
                        name="John Smith"
                        image=""
                    />
                </Grid>
                <Grid
                    item
                    lg={2} md={2} sm={12} xs={12}
                >
                    <Button
                        className={classes.ytBtn}
                        // startIcon={<img alt="ytIcon" src={require("../assets/images/yt-btn.png")} />}
                        startIcon={<YouTubeIcon fontSize={"large"} />}
                        color="secondary" variant="outlined" size="medium">
                        <Typography>Watch on YouTube</Typography>
                    </Button>
                </Grid>

            </Grid>
            {result && (
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                >
                    <WinnerCard
                        name="John Fernandez"
                        image=""
                    />
                </Grid>
            )}
            <div className={classes.textCenter}>
                <Typography className={classes.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown
                    {
                        readMore
                        ?
                        <>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, when an unknown<span onClick={() => setReadMore(false)} className={classes.textRed}> Read less...</span>
                        </>
                        :
                        <span onClick={() => setReadMore(true)} className={classes.textRed}> Read more...</span>
                    }
                    
                </Typography>
            </div>
            </div>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        background: "#F3F6FF",
        padding: 25,
        borderRadius: 5,
        marginBottom: 52,
    },
    vsIcon: {
        width: 200,
        height: 170,
        objectFit: 'cover',
        margin: "0 50px 0 50px"
    },
    dateContainer: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    },
    date: {
        fontSize: '1.25em',
        fontWeight: 600,
        color: Colors.black
    },
    vsContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    vs: {
        fontSize: '1.25em',
        fontWeight: 600,
        color: Colors.appRed
    },
    description: {
        maxWidth: 600,
        textAlign: "center",
        color: Colors.textGrey,
        margin: "28px 0 28px 0",
    },
    textCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ytBtnSmall: {
        display: 'none',

        [theme.breakpoints.down('sm')]: {
            display: 'block',
            textTransform: 'capitalize',
            fontSize: '1em',
            color: "#e62117",
            borderColor: "#e62117",
        },
    },
    ytBtn: {
        textTransform: 'capitalize',
        fontSize: '1em',
        color: "#e62117",
        borderColor: "#e62117",

        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        // whiteSpace: "nowrap",
    },
    textRed: {
        color: Colors.appRed,
        cursor: 'pointer'
    },
}));

export default UpcomingMatchesCard;
