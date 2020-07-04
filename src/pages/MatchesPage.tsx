import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Button, Tabs, Tab } from '@material-ui/core';
import Colors from '../styles/Colors';
import MatchesHeader from '../components/ZMatchesHeader';
import MatchesCard from '../components/ZMatchesCard';

interface Props {}

const Matches: React.FC<Props> = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.container}>
            <MatchesHeader />
            <Container maxWidth='xl'>
                <Grid className={classes.tabsContainer} container alignItems='center' justify='center'>
                    <Tabs
                        classes={{
                            indicator: value === 0 ? classes.leftIndicator : classes.rightIndicator,
                        }}
                        value={value}
                        onChange={handleChange}>
                        <Tab
                            className={value === 0 ? classes.tabSelected : classes.tab}
                            label='Upcoming'
                        />
                        <Tab
                            className={value === 1 ? classes.tabSelected : classes.tab}
                            label='Completed'
                        />
                    </Tabs>
                </Grid>
                {/* <Grid container className={classes.headingContainer}>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Typography className={classes.heading}>Date</Typography>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                        <Typography className={classes.heading}>1st Player</Typography>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                        <Typography className={classes.heading}>2nd Player</Typography>
                    </Grid>
                    <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
                </Grid> */}
                {value === 0 ? (
                    <Grid>
                        <MatchesCard date={'26 May 2020'} time={"12:45 pm"} result={false} />
                        <MatchesCard date={'26 May 2020'} time={"12:45 pm"} result={false} />
                        <MatchesCard date={'26 May 2020'} time={"12:45 pm"} result={false} />
                    </Grid>
                ) : (
                    <Grid>
                        <MatchesCard date={'26 May 2020'} time={"12:45 pm"} result={true} />
                        <MatchesCard date={'26 May 2020'} time={"12:45 pm"} result={true} />
                    </Grid>
                )}
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
                    <Button
                        className={classes.seeMoreButton}
                        size='large'
                        color='secondary'
                        variant='contained'>
                        See More
                    </Button>
                </Grid>
            </Container>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: 64, //header's height
        },
        headingContainer: {
            margin: '70px 0 30px 0',
        },
        heading: {
            fontSize: '1.25em',
            fontWeight: 600,
            color: Colors.textGrey,
            textAlign: 'center',
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
        tabsContainer: {
            margin: "10px 0 30px 0"
        },
        tab: {
            color: Colors.black,
            textTransform: 'capitalize',
            fontSize: '1.25em',
            fontWeight: 500,
        },
        tabSelected: {
            color: Colors.appRed,
            textTransform: 'capitalize',
            fontSize: '1.25em',
            fontWeight: 500,
        },
        rightIndicator: {
            backgroundColor: Colors.appRed,
            borderRadius: '50%',
            width: '12px !important',
            height: '12px !important',
            left: 'calc(25% + 160px) !important',
        },
        leftIndicator: {
            backgroundColor: Colors.appRed,
            borderRadius: '50%',
            width: '12px !important',
            height: '12px !important',
            left: 'calc(23%) !important',
        },
    })
);

Matches.defaultProps = {};

export default Matches;
