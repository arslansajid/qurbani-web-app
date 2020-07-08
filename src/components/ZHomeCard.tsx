import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Colors from '../styles/Colors';
import { makeStyles, Grid } from '@material-ui/core';
import StarIcon from "@material-ui/icons/Grade";
import EyeIcon from "@material-ui/icons/Visibility";
import LocationIcon from "@material-ui/icons/LocationOn";

interface Props {
    weight: number,
    price: number,
    location: string;
    imageUrl: string;
    isMostViewed: boolean;
    isRecommended: boolean;
}

const NewsCard: React.FC<Props> = ({ imageUrl, isMostViewed, isRecommended, weight, price, location }) => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root} elevation={0}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={imageUrl}
                        title='Contemplative Reptile'
                    />
                    <div className={classes.dateTextContainer}>
                        {isRecommended
                            ? (
                                <Grid container alignItems="center">
                                    <StarIcon className={classes.iconStyle} />
                                    <Typography className={classes.dateText}>Recommended</Typography>
                                </Grid>
                            ) : (
                                <Grid container alignItems="center">
                                    <EyeIcon className={classes.iconStyle} />
                                    <Typography className={classes.dateText}>Most Viewed</Typography>
                                </Grid>
                            )}
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {price}/- Rs
                        </Typography>
                        <Grid container alignItems="center" justify="space-between">    
                            <Typography variant='body1' color='textSecondary' component='h6'>
                                {weight} Mann
                            </Typography>

                            <div className={classes.row}>
                                <LocationIcon className={classes.locationiconStyle} />
                                <Typography variant='body1' color='textSecondary' component='h6'>
                                    {location}
                                </Typography>
                            </div>
                        </Grid>
                        
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 350,
        margin: 10,
        boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.08)",
    },
    media: {
        height: 205,
    },
    cardButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    dateContainer: {
        position: "relative",
        marginBottom: 50
    },
    dateTextContainer: {
        position: "absolute",
        // transform: "rotate(90deg)",
        top: 10,
        right: 10,
        padding: "12px",
        borderRadius: 5,
        background: Colors.appRed,
    },
    dateText: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 500
    },
    cardButton: {
        backgroundColor: Colors.blue,
        borderRadius: '20px',
        fontWeight: 'bolder',
        textTransform: 'capitalize',
        color: Colors.white,
        whiteSpace: 'nowrap',
        minWidth: 150,
    },
    readmoreContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 28
    },
    readmoreText: {
        fontSize: 24,
        fontWeight: 600,
        color: Colors.appRed
    },
    border: {
        background: Colors.appRed,
        marginRight: 15,
        width: 33,
        height: 3,
    },
    iconStyle: {
        color: 'goldenrod',
        fontSize: '2em',
        marginRight: 5
    },
    locationiconStyle: {
        color: Colors.appRed,
        fontSize: '1.5em',
        marginRight: 5
    },
    row: {
        display: 'flex',

    }
}));

export default NewsCard;
