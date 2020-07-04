import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Container, Box } from '@material-ui/core';
import Colors from '../styles/Colors';

interface Props { }

const AnimalDetailPage: React.FC<Props> = (props) => {
    const classes = useStyles();
    console.log("##########", props)
    return (
        <div className={classes.container}>
            <Container maxWidth='xl' className={classes.container}>
                <Box className={classes.filtersBox}>
                    Animal Detail
                </Box>
            </Container>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: 64, //header's height
        },
        searchButton: {
            background: Colors.appRed,
            width: '100%',
            minHeight: 40,
            textTransform: 'capitalize',
            fontWeight: 500,
            borderRadius: '20px',
        },
        filtersBox: {
            padding: theme.spacing(3, 0, 3, 0),
        },
        filterContainer: {
            padding: theme.spacing(2, 2, 2, 0),
        },
        center: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
);

AnimalDetailPage.defaultProps = {};

export default AnimalDetailPage;
