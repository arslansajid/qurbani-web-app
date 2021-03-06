import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Container, Box, Typography, Fab } from '@material-ui/core';
import Colors from '../styles/Colors';
import ImageGallery from 'react-image-gallery';
import StarRatings from 'react-star-ratings';
import PhoneIcon from '@material-ui/icons/Phone';
import ItemsCarousel from 'react-items-carousel';
import ZAnimalCard from "../components/ZAnimalCard";
import Dialog from "../components/Dialog/Dialog";
import PrevIcon from "@material-ui/icons/ChevronLeft";
import NextIcon from "@material-ui/icons/ChevronRight";

interface Props {
    location: any,
}

const AnimalDetailPage: React.FC<Props> = ({ location }) => {
    const classes = useStyles();
    const [activeItemIndex, setActiveItemIndex] = React.useState(0);
    const [openCallDialog, setOpenCallDialog] = React.useState(false);
    const animal = location.state.animal;
    const items = location.state.items;
    console.log("######## animal", animal)
    let images = [];
    images = animal.image.length && animal.image.map((image) => {
        let obj = {
            original: image,
            thumbnail: image,
        };
        return obj;
    })

    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [])

    const onCallClick = () => {
        const isMobile = window.innerWidth < 500;
        if(isMobile) {
            window.location.href = "tel:0321-6375414";
        } else {
            setOpenCallDialog(true);
        }
    }

    let updatedWeight = "";
    if(!!animal.weightUnit) {
      if(animal.weightUnit === 'kg') {
        updatedWeight = `${animal.weight} kg (${animal.weight / 40} mann)`;
      } else {
        updatedWeight = `${animal.weight * 40} kg (${animal.weight} mann)`;
      }
    }

    return (
        <>
        {
            openCallDialog && (
                <Dialog
                    title={'Contact Details'}
                    open={openCallDialog}
                    message={
                        <>
                            <Typography gutterBottom variant='h5' component='h4'>{animal.customerName}</Typography>
                            <Typography gutterBottom variant='h5' component='h4'>{animal.contact}</Typography>
                        </>
                    }
                    applyForm={null}
                    cancelForm={() => setOpenCallDialog(false)}
                    hideActions={false}
                    disableBackdropClick={true}
                />
            )
        }
        <div className={classes.container}>
            <Container maxWidth='xl'>
                {images.length && (
                    <ImageGallery
                        items={images}
                        autoPlay={false}
                        showPlayButton={false}
                        showThumbnails={false}
                        showFullscreenButton={true}
                        showNav={true}
                    // thumbnailPosition={'left'}
                    />
                )}
                
                <Box className={classes.filtersBox}>
                    <Grid container justify="space-between" alignItems="center">
                        <Typography gutterBottom variant='h4' component='h4'>{animal.customerName}</Typography>
                        <StarRatings
                            rating={Number(4)}
                            starRatedColor={Colors.appRed}
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing="0px"
                            svgIconViewBox={'0 0 20 20'}
                            gradientPathName={window.location.pathname}
                            svgIconPath="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
                            name='rating'
                        />
                    </Grid>
                    <Typography gutterBottom variant='h6' component='h6'>Animal ID: {animal.animalId ? animal.animalId : "N/A"}</Typography>
                    <Typography gutterBottom variant='h6' component='h6'>Weight: {updatedWeight}</Typography>
                    <Typography gutterBottom variant='h6' component='h6'>Gender: {animal.gender}</Typography>
                    <Typography gutterBottom variant='h6' component='h6'>Price: {animal.price}/- Rs</Typography>
                    <Typography gutterBottom variant='h6' component='h6'>Contact: {animal.contact}</Typography>
                    {
                        animal.description && animal.description.length ? (
                            <>
                                <hr />
                                <div>{animal.description}</div>
                            </>
                        )
                            :
                            null
                    }
                </Box>
                {
                    items.length ? (
                        <Grid className={classes.noScroll}>
                            <Typography gutterBottom variant='h5' component='h4'>Our Recommendations</Typography>
                            <ItemsCarousel
                                requestToChangeActive={setActiveItemIndex}
                                activeItemIndex={activeItemIndex}
                                numberOfCards={window.innerWidth < 500 ? 1 : 3}
                                gutter={20}
                                leftChevron={<Button className={classes.roundBtn}><PrevIcon /></Button>}
                                rightChevron={<Button className={classes.roundBtn}><NextIcon /></Button>}
                                outsideChevron={window.innerWidth < 500 ? false : true}
                                chevronWidth={40}
                            >
                                {
                                    items.length && items.map((animal, index) => {
                                        return (
                                            <Grid key={index}>
                                                <ZAnimalCard
                                                    imageUrl={animal.image[0]}
                                                    price={animal.price}
                                                    weight={animal.weightInKG}
                                                    animal={animal}
                                                    items={[]}
                                                />
                                            </Grid>
                                        )
                                    })
                                }
                            </ItemsCarousel>
                        </Grid>
                    )
                        :
                        null
                }


            </Container>
            <Fab
                onClick={() => onCallClick()}
                color='secondary'
                className={classes.callButton}
            >
                <PhoneIcon className={classes.callIcon} />
            </Fab>
        </div>
        </>
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
        callButton: {
            background: Colors.appRed,
            position: 'fixed',
            bottom: 25,
            right: 25,

            "&:hover" : {
                background: Colors.appRed, 
            }
        },
        callIcon: {
            color: 'white'
        },
        roundBtn: {
            borderRadius: '50%',
            background: Colors.appRed,
            color: 'white',
            minWidth: 'unset',
            width: 40,
            height: 40,

            "&:hover": {
                background: Colors.appRed,
            }
        },
        noScroll: {
            // pointerEvents: 'none'
        }
    })
);

AnimalDetailPage.defaultProps = {};

export default AnimalDetailPage;
