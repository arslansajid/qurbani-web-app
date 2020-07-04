import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Colors from '../styles/Colors';
import { makeStyles } from '@material-ui/core';

interface Props {
    imageUrl: string;
}

const NewsCard: React.FC<Props> = ({ imageUrl }) => {
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
                            <Typography className={classes.dateText}>Recommended</Typography>
                        </div>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            Think beyond The Fall of Grippy Jay...
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            Lorem Ipsum is simply dummy text of the printing been the industry's standard...
                        </Typography>
                        <div className={classes.readmoreContainer}>
                            <div className={classes.border} />
                            <Typography className={classes.readmoreText}>Read more</Typography>
                        </div>
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
        height: 325,
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
        padding: "15px 25px 15px 25px" ,
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
    }
}));

export default NewsCard;
