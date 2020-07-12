import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link, withRouter } from 'react-router-dom';
import nav from '../static/_nav';

import { makeStyles } from '@material-ui/core/styles';
import Colors from '../styles/Colors';

interface Props { }

const drawerWidth = 280;

function ElevationScroll(props: any) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 1 : 0,
    });
}

const Appbar: React.FC<Props> = (props: any) => {
    const classes = useStyles();
    const [selectedRoute, setSelectedRoute] = React.useState('/');
    const [sideCartOpen, setSideCartOpen] = React.useState<boolean>(false);

    const toggleDrawer = () => {
        setSideCartOpen(!sideCartOpen)
    }

    const onDrawerItemPress = () => {
        setSideCartOpen(false);
    }

    React.useEffect(() => {
        setSelectedRoute(props.location.pathname);
    }, [props]);

    return (
        <ElevationScroll {...props}>
            <AppBar position='fixed' classes={{ root: classes.headerBar }}>
                <Drawer
                    open={sideCartOpen}
                    onClose={() => toggleDrawer()}
                    className={classes.sideDrawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <Typography>Asaan Qurban</Typography>
                        <IconButton onClick={toggleDrawer}>

                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {
                            nav.items.map((item, index) => {
                                return (
                                    <Link key={index} to={item.url}>
                                        <ListItem onClick={() => onDrawerItemPress()} button>
                                            <ListItemText primary={item.name} />
                                        </ListItem>
                                    </Link>
                                )
                            })
                        }
                    </List>
                </Drawer>
                <Container maxWidth='xl'>
                    <Toolbar className={classes.container}>
                        <IconButton
                            edge='start'
                            onClick={() => toggleDrawer()}
                            className={classes.menuButton}
                            color='inherit'
                            aria-label='menu'>
                            <MenuIcon />
                        </IconButton>
                        <Link className={classes.logoContainer} to='/'>
                            <img
                                className={classes.logo}
                                src={require('../assets/images/qurbani-logo.png')}
                                alt='logo'
                            />
                        </Link>
                        <div className={classes.blackContainer}>
                            <Button
                                component={Link}
                                to='/'
                                className={
                                    selectedRoute === '/'
                                        ? classes.navButtonSelected
                                        : classes.navButton
                                }
                                color='inherit'>
                                {selectedRoute === '/' && (
                                    <div className={classes.selectedBorder} />
                                )}
                                Home
                            </Button>
                            <Button
                                component={Link}
                                to='/buy'
                                className={
                                    selectedRoute === '/buy'
                                        ? classes.navButtonSelected
                                        : classes.navButton
                                }
                                color='inherit'>
                                {selectedRoute === '/buy' && (
                                    <div className={classes.selectedBorder} />
                                )}
                                Buy
                            </Button>
                            <Button
                                component={Link}
                                to='/sell'
                                className={
                                    selectedRoute === '/sell'
                                        ? classes.navButtonSelected
                                        : classes.navButton
                                }
                                color='inherit'>
                                {selectedRoute === '/sell' && (
                                    <div className={classes.selectedBorder} />
                                )}
                                Sell
                            </Button>
                            <Button
                                component={Link}
                                to='/contact-us'
                                className={
                                    selectedRoute === '/contact-us'
                                        ? classes.navButtonSelected
                                        : classes.navButton
                                }
                                color='inherit'>
                                {selectedRoute === '/contact-us' && (
                                    <div className={classes.selectedBorder} />
                                )}
                                Contact Us
                            </Button>

                            {/* <div>
                            <Button
                                component={Link}
                                to='/sign-in'
                                className={classes.navButton}
                                color='inherit'>
                                Sign In
                            </Button>
                            <Button
                                component={Link}
                                to='/sign-in'
                                className={classes.navButton}
                                color='inherit'>
                                Sign Up
                            </Button>
                        </div> */}
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            marginRight: theme.spacing(1),
        },
    },
    logoContainer: {
        flexGrow: 0.5,
        [theme.breakpoints.down('sm')]: {
            marginTop: 5,
        },
    },
    logo: {
        width: 50,
        height: 50,
        objectFit: 'contain',
        flexGrow: 0.5,
    },
    headerBar: {
        backgroundColor: Colors.white,
        color: Colors.black,
        boxShadow: '#fff',
        minHeight: 64
    },
    navButton: {
        fontSize: 20,
        lineHeight: '29px',
        color: Colors.black,
        textTransform: 'capitalize',
        marginRight: '15px',
    },
    navButtonSelected: {
        fontSize: 20,
        lineHeight: '29px',
        color: Colors.appRed,
        textTransform: 'capitalize',
        marginRight: '15px',
    },
    container: {
        padding: '0px !important',
    },
    blackContainer: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    selectedBorder: {
        background: Colors.appRed,
        width: 4,
        height: 20,
        position: 'absolute',
        top: -12,
    },
    sideDrawer: {
        minWidth: "30vw",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },
    drawerPaper: {
        width: drawerWidth,
        background: "white"
    },
    drawerIcon: {
        width: "31px",
        height: "31px",
        objectFit: "contain"
    }
}));

Appbar.defaultProps = {};

export default withRouter(Appbar);
