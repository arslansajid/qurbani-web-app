import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Container, Box } from '@material-ui/core';
import Colors from '../styles/Colors';
import SelectDropdown from "../components/Select/Select";
import ZAnimalCard from "../components/ZAnimalCard";
import { CategoryOptions, CitiesOptions, WeightOptions, PriceOptions } from "../static/_data";
import {getAnimalsByFilter} from "../Backend/Services/animalService";

interface Props { }

const BuyPage: React.FC<Props> = () => {
    const classes = useStyles();
    const [category, setCategory] = React.useState({} as any)
    const [city, setCity] = React.useState({} as any);
    const [price, setPrice] = React.useState({} as any);
    const [weight, setWeight] = React.useState({} as any);
    const [animals, setAnimals] = React.useState<any[]>([])

    const searchAnimals = () => {
        const animal = !!category && category?.value;
        const location = !!city && city?.value;
        getAnimalsByFilter(animal, location, null, null)
        .then((res) => {
            setAnimals([...res])
        })
        .catch((err) => {
            console.log(err)
            window.alert("ERROR")
        })
    }

    return (
        <div className={classes.container}>
            <Container maxWidth='xl' className={classes.container}>
                <Box className={classes.filtersBox}>
                <Grid container direction='row' spacing={0}>
                    <Grid lg={12} md={12} sm={12} xs={12} item className={classes.center}>
                        <SelectDropdown
                            options={CitiesOptions}
                            defaultValue={!!city && Object.keys(city).length ? city : null}
                            isDisabled={false}
                            isClearable={false}
                            name={'category-select'}
                            label={null}
                            labelAlign={'left'}
                            labelWidth={150}
                            styles={{}}
                            onSelectAction={(value) => setCity(value)}
                            placeholder={'Select City'}
                        />
                    </Grid>
                    <Grid lg={3} md={3} sm={12} xs={12} item className={classes.filterContainer}>
                        <SelectDropdown
                            options={CategoryOptions}
                            defaultValue={!!category && Object.keys(category).length ? category : null}
                            isDisabled={false}
                            isClearable={false}
                            name={'category-select'}
                            label={null}
                            labelAlign={'left'}
                            labelWidth={150}
                            styles={{}}
                            onSelectAction={(value) => setCategory(value)}
                            placeholder={'Select Category'}
                        />
                    </Grid>
                    <Grid lg={3} md={3} sm={12} xs={12} item className={classes.filterContainer}>
                        <SelectDropdown
                            options={WeightOptions}
                            defaultValue={!!weight && Object.keys(weight).length ? city : null}
                            isDisabled={false}
                            isClearable={false}
                            name={'category-select'}
                            label={null}
                            labelAlign={'left'}
                            labelWidth={150}
                            styles={{}}
                            onSelectAction={(value) => setWeight(value)}
                            placeholder={'Select Weight'}
                        />
                    </Grid>
                    <Grid lg={3} md={3} sm={12} xs={12} item className={classes.filterContainer}>
                        <SelectDropdown
                            options={PriceOptions}
                            defaultValue={!!price && Object.keys(price).length ? city : null}
                            isDisabled={false}
                            isClearable={false}
                            name={'category-select'}
                            label={null}
                            labelAlign={'left'}
                            labelWidth={150}
                            styles={{}}
                            onSelectAction={(value) => setPrice(value)}
                            placeholder={'Select Price'}
                        />
                    </Grid>
                    <Grid lg={3} md={3} sm={12} xs={12} item className={classes.center}>
                        <Button
                            className={classes.searchButton}
                            onClick={() => searchAnimals()}
                            size='medium'
                            color='secondary'
                            variant='contained'>
                            Search Animals
                    </Button>
                    </Grid>
                </Grid>
                </Box>
                
                <Grid container direction='row' spacing={0} className={`${classes.filterContainer}`}>
                    <Grid container>
                        {animals.length ? animals.map((animal, index) => {
                            return (
                                <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
                                    <ZAnimalCard
                                        imageUrl={animal.image[0]}
                                        price={animal.price}
                                        weight={animal.weightInKG}
                                        animal={animal}
                                    />
                                </Grid>
                            );
                        })
                        :
                        null
                    }
                    </Grid>
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

BuyPage.defaultProps = {};

export default BuyPage;
