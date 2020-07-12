import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Container, Box } from '@material-ui/core';
import Colors from '../styles/Colors';
import SelectDropdown from "../components/Select/Select";
import ZAnimalCard from "../components/ZAnimalCard";
import { CategoryOptions, CitiesOptions, WeightOptions, PriceOptions } from "../static/_data";
import { getAnimalsByFilter } from "../Backend/Services/animalService";
import { useForm } from "react-hook-form";
import AppContext from '../Context/AppContext';

interface Props { }

const BuyPage: React.FC<Props> = () => {
    const classes = useStyles();
    const { control, handleSubmit, errors, setValue } = useForm();
    
    let store = {} as any;
    store = React.useContext(AppContext);
    console.log("store #######", store)

    // const [category, setCategory] = React.useState({} as any)
    // const [city, setCity] = React.useState({} as any);
    // const [price, setPrice] = React.useState({} as any);
    // const [weight, setWeight] = React.useState({} as any);
    const [message, setMessage] = React.useState('Apply Filters to view animals!')
    const animals = [...store.storeData?.animals];

    React.useEffect(() => {
        if(!!store.storeData.city) {
            setValue('city', store.storeData.city);
        }
        if(!!store.storeData.category) {
            setValue('category', store.storeData.category);
        }
        if(!!store.storeData.price) {
            setValue('price', store.storeData.price);
        }
        if(!!store.storeData.weight) {
            setValue('weight', store.storeData.weight);
        }
    }, [])

    const searchAnimals = (data) => {
        const {category, city, price, weight} = data;

        console.log("FORM SUBMITTED", data)
        setMessage('Fetching results...');
        const animal = !!category && category?.value;
        const location = !!city && city?.value;
        const weightFilter = !!weight && weight?.value;
        const priceFilter = !!price && price?.value;
        getAnimalsByFilter(animal, location, weightFilter, priceFilter)
            .then((res) => {
                // setAnimals([...res]);
                store.setFilter('animals', [...res])
                if (res.length === 0) {
                    setMessage('No Animals Found!');
                }
            })
            .catch((err) => {
                console.log(err)
                window.alert("ERROR")
                setMessage('No Animals Found!');
            })
    }

    return (
        <div className={classes.container}>
            <Container maxWidth='xl' className={classes.container}>
                <Box className={classes.filtersBox}>
                <form onSubmit={handleSubmit(searchAnimals)}>
                    <Grid container direction='row' spacing={0}>
                            <Grid lg={12} md={12} sm={12} xs={12} item className={`${classes.center} ${classes.locationfilterContainer}`}>
                                <SelectDropdown
                                    options={CitiesOptions}
                                    defaultValue={store.storeData.city}
                                    isDisabled={false}
                                    isClearable={false}
                                    name={'city'}
                                    label={null}
                                    labelAlign={'left'}
                                    labelWidth={150}
                                    styles={{}}
                                    onSelectAction={(value) => store.setFilter('city', value)}
                                    placeholder={'Select City *'}
                                    control={control}
                                    rules={{ required: true }}
                                    error={errors?.city ? true : false}
                                    errorMessage={'Required'}
                                />
                            </Grid>
                            <Grid lg={3} md={3} sm={12} xs={12} item className={classes.filterContainer}>
                                <SelectDropdown
                                    options={CategoryOptions}
                                    defaultValue={store.storeData.category}
                                    isDisabled={false}
                                    isClearable={false}
                                    name={'category'}
                                    label={null}
                                    labelAlign={'left'}
                                    labelWidth={150}
                                    styles={{}}
                                    onSelectAction={(value) => store.setFilter('category', value)}
                                    placeholder={'Select Category *'}
                                    control={control}
                                    rules={{ required: true }}
                                    error={errors?.category ? true : false}
                                    errorMessage={'Required'}
                                />
                            </Grid>
                            <Grid lg={3} md={3} sm={12} xs={12} item className={classes.filterContainer}>
                                <SelectDropdown
                                    options={WeightOptions}
                                    defaultValue={store.storeData.weight}
                                    isDisabled={false}
                                    name={'weight'}
                                    label={null}
                                    labelAlign={'left'}
                                    labelWidth={150}
                                    styles={{}}
                                    onSelectAction={(value) => store.setFilter('weight', value)}
                                    placeholder={'Select Weight'}
                                    control={control}
                                    isClearable={true}
                                    // rules={{ required: true }}
                                    // error={errors?.weight ? true : false}
                                    // errorMessage={'Required'}
                                />
                            </Grid>
                            <Grid lg={3} md={3} sm={12} xs={12} item className={classes.filterContainer}>
                                <SelectDropdown
                                    options={PriceOptions}
                                    defaultValue={store.storeData.price}
                                    isDisabled={false}
                                    name={'price'}
                                    label={null}
                                    labelAlign={'left'}
                                    labelWidth={150}
                                    styles={{}}
                                    onSelectAction={(value) => store.setFilter('price', value)}
                                    placeholder={'Select Price'}
                                    control={control}
                                    isClearable={true}
                                    // rules={{ required: true }}
                                    // error={errors?.price ? true : false}
                                    // errorMessage={'Required'}
                                />
                            </Grid>
                            <Grid lg={3} md={3} sm={12} xs={12} item className={classes.center}>
                                <Button
                                    className={classes.searchButton}
                                    type="submit"
                                    size='medium'
                                    color='secondary'
                                    variant='contained'>
                                    Search Animals
                                </Button>
                            </Grid>
                    </Grid>
                    </form>
                </Box>

                <hr className={classes.seperator} />

                <Grid container direction='row' spacing={0} className={`${classes.resultsContainer}`}>
                    <Grid container>
                        {animals.length ? animals.map((animal, index) => {
                            return (
                                <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
                                    <ZAnimalCard
                                        imageUrl={animal.image[0]}
                                        price={animal.price}
                                        weight={animal.weightInKG}
                                        animal={animal}
                                        items={animals}
                                    />
                                </Grid>
                            );
                        })
                            :
                            message
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
            padding: theme.spacing(3, 0, 2, 0),
        },
        locationfilterContainer: {
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(0, 0, 2, 0),
            },
        },
        filterContainer: {
            padding: theme.spacing(2, 2, 2, 0),

            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(0, 0, 2, 0),
            },
        },
        resultsContainer: {
            padding: theme.spacing(2, 0, 2, 0),
            minHeight: '50vh',

            [theme.breakpoints.down('sm')]: {
                minHeight: '25vh',
            },
        },
        center: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        seperator: {
            color: Colors.placeHolderText,
            margin: 0,
        }
    })
);

BuyPage.defaultProps = {};

export default BuyPage;
