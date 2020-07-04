import React, { useState } from 'react';
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

const ZVideoCard: React.FC<Props> = ({ imageUrl }) => {
    const classes = useStyles();
    const [isCardHover, setIsCardHover] = useState(false);

    const onMouseEnter = () => {
        setIsCardHover(true);
    };

    const onMouseLeave = () => {
        setIsCardHover(false);
    };

    return (
        <>
            <Card
                onMouseEnter={() => onMouseEnter()}
                onMouseLeave={() => onMouseLeave()}
                className={classes.root}>
                <CardActionArea className={classes.cardContainer}>
                    {isCardHover && (
                        <div className={classes.overlay}>
                            <img
                                alt='video-img'
                                className={classes.playIcon}
                                src={require('../assets/images/play@2x.png')}
                            />
                        </div>
                    )}
                    <CardMedia
                        className={classes.media}
                        image={imageUrl}
                        title='Contemplative Reptile'
                    />
                    <CardContent>
                        <Typography className={classes.heading} gutterBottom>
                            Dummy text refers to the bits of content that are used to fill
                        </Typography>
                        <Typography className={classes.description}>
                            Dummy text refers to the bits of content that are used to fill Dummy
                            text refers to the bits of content that are used to fil...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 200,
        border: 'unset',
        boxShadow: 'none',
        overflow: 'hidden',
        margin: 10,
    },
    cardContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'block',
        },
    },
    media: {
        minHeight: '20.125em',
        borderRadius: '12px 12px 0 0',
        overflow: 'hidden',
    },
    overlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '20.125em',
        background: 'rgba(255,94,107, 0.6)',
        borderRadius: 12,
        overflow: 'hidden',
    },
    playIcon: {
        opacity: 1,
    },
    heading: {
        fontSize: '1.25em',
        fontWeight: 600,
        color: Colors.black,
    },
    description: {
        fontSize: '1.15em',
        fontWeight: 400,
        color: Colors.textGrey,
    },
    cardButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
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
}));

export default ZVideoCard;
