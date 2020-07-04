
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
            <Paper elevation={0} classes={{ root: classes.container }}>
                <img alt="user-img" className={classes.userAvatar} src={require("../assets/images/story.png")} />
                <Typography className={classes.userName}>{name}</Typography>
            </Paper>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        background: "transparent"
    },
    userAvatar: {
        width: '3.5em',
        height: '3.5em',
        objectFit: "cover",
        borderRadius: "50%",
        marginRight: 15
    },
    userName: {
        fontSize: '1.25em',
        fontWeight: 600,
        color: Colors.black,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
}));

export default UserCard;
