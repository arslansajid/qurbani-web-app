
import React from 'react';
import { Typography, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

interface Props {
    name: string,
    image: string
 }

const UserCard: React.FC<Props> = ({name, image}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.relative}>
                <img className={classes.winImageBg} alt="winner-img" src={require("../assets/images/win@2x.png")} />
                <Paper className={classes.paper} elevation={3} classes={{ root: classes.container }}>
                    <img alt="logo" className={classes.userAvatar} src={require("../assets/images/story.png")} />
                    <Typography className={classes.userName}>{name}</Typography>
                </Paper>
            </div>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    relative: {
        position: 'relative'
    },
    paper: {
        position: "absolute",
        top: '44%',
        left: '25%',
    },
    container: {
        borderRadius: 70,
        backgroundColor: Colors.white,
        padding: 10,
        display: "flex",
        alignItems: "center"
    },
    userAvatar: {
        width: '6em',
        height: '6em',
        objectFit: "cover",
        borderRadius: "50%",
        marginRight: 20
    },
    userName: {
        fontSize: '1.25em',
        fontWeight: 600,
        color: Colors.black
    },
    winImageBg: {
        width: '100%'
    }
}));

export default UserCard;