import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Container } from '@material-ui/core';
import Colors from '../styles/Colors';

interface Props {}

const BuyPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth='xl'>
                BuyPage
            </Container>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: 64, //header's height
        },
    })
);

BuyPage.defaultProps = {};

export default BuyPage;
