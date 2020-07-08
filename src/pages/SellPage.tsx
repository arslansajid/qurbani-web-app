import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Container, Box, CircularProgress } from '@material-ui/core';
import Colors from '../styles/Colors';
import SelectDropdown from "../components/Select/Select";
import TextField from "../components/Textfield";
import { CategoryOptions, CitiesOptions, UnitOptions, GenderOptions } from "../static/_data";
import ImagePicker from "../components/ImagePicker"
import { addAnimal } from "../Backend/Services/animalService";
import { firebase } from '../Backend/firebase';
import SnackBar from "../components/SnackBar";
import Resizer from 'react-image-file-resizer';
import { v4 as uuidv4 } from 'uuid';

const imageResizeFileUri = ({ file }: { file: File }) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            1280,
            720,
            'JPEG',
            95,
            0,
            (uri) => {
                resolve(uri);
            },
            'base64'
        );
    });

interface Props { }

const SellPage: React.FC<Props> = () => {
    const classes = useStyles();
    const [category, setCategory] = React.useState({} as any);
    const [city, setCity] = React.useState({} as any);
    const [selectedCities, setSelectedCities] = React.useState([] as any);
    const [gender, setGender] = React.useState({} as any);
    const [weightUnit, setWeightUnit] = React.useState({} as any);
    const [description, setDescription] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [images, setImages] = React.useState([] as any);
    //ui states
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [showSnackBar, setShowSnackBar] = React.useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState("");
    const [snackBarVariant, setSnackBarVariant] = React.useState("success");

    console.log({gender, weightUnit, city});

    const setImageCallback = (value: []): void => {
        setImages([...images, value]);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let selectedAnimalCategory = category.value;

        let imagesArray: string[] = [];

        for await (const image of images) {

            let imageFile = image[0];

            let downloadUrl;
            let imageUri;

            if (imageFile) {
                imageUri = (await imageResizeFileUri({ file: imageFile })) as string;

                const storageRef = firebase
                    .storage()
                    .ref()
                    .child(selectedAnimalCategory)
                    .child(`${uuidv4()}.jpeg`);

                if (imageUri) {
                    await storageRef.putString(imageUri, 'data_url');
                    downloadUrl = await storageRef.getDownloadURL();
                }
            }
            imagesArray.push(downloadUrl)
        }

        const animalData = {
            "timestampAdded": new Date(),
            image: !!imagesArray ? imagesArray : "",
            location: selectedCities,
            price: Number(price),
            contact: contact,
            weight: Number(weight),
            weightInKG: weightUnit.value === "mann" ? Number(weight) * 40 : Number(weight),
            gender: gender.value,
            description: description,
            weightUnit: weightUnit.value,
        }

        console.log("ANIMAL DTO", animalData)

        addAnimal(selectedAnimalCategory, animalData)
            .then((res) => {
                console.log("animal added ######")
                setIsLoading(false);
                setShowSnackBar(true);
                setSnackBarMessage("Animal added successfully!")
                setSnackBarVariant("success")
                resetValues();
            })
            .catch((err) => {
                console.log("error adding animal ######", err)
                setIsLoading(false);
                setShowSnackBar(true);
                setSnackBarMessage("Error adding animal!")
                setSnackBarVariant("error")
            })
    }

    const handleCitiesDropDown = (value) => {
        setCity(value);
        let cities = [];
        !!value && value.length && value.map(city => {
            return city.value
        })
        setSelectedCities([...cities])
    }

    const resetValues = () => {
        setCategory({});
        setCity({});
        setSelectedCities([]);
        setGender({});
        setWeightUnit({});
        setDescription('');
        setContact('');
        setPrice('');
        setWeight('');
        setImages([]);
    }

    return (
        <div className={classes.container}>
            <Container maxWidth='xl' className={classes.container}>
                <Box className={classes.filtersBox}>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={0} alignItems="center" justify="center">
                            <Grid lg={6} md={6} sm={12} xs={12} item>
                                <div>
                                    <ImagePicker image={images} setImage={setImageCallback} />
                                </div>
                                <Grid container alignItems="center" className={classes.inputRow}>
                                    <Grid item xs={4}>
                                        <label>
                                            Select Category
                                        </label>
                                    </Grid>
                                    <Grid item xs={8}>
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
                                            placeholder={'Category'}
                                        // required
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container alignItems="center" className={classes.inputRow}>
                                    <Grid item xs={4}>
                                        <label>
                                            Select City
                                        </label>
                                    </Grid>
                                    <Grid item xs={8}>
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
                                            onSelectAction={(value) => handleCitiesDropDown(value)}
                                            placeholder={'City'}
                                            multiple={true}
                                        // required
                                    />
                                    </Grid>
                                </Grid>

                                <Grid container alignItems="center" className={classes.inputRow}>
                                    <Grid item xs={4}>
                                        <label>
                                            Price
                                        </label>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TextField
                                            type="number"
                                            customClassName="form-input"
                                            required
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container alignItems="center" className={classes.inputRow}>
                                    <Grid item xs={4}>
                                        <label>
                                            Contact
                                        </label>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TextField
                                            type="number"
                                            customClassName="form-input"
                                            required
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container alignItems="center" className={classes.inputRow}>
                                    <Grid item xs={4}>
                                        <label>
                                            Weight
                                        </label>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TextField
                                            type="number"
                                            customClassName="form-input"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            required
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container alignItems="center" className={classes.inputRow}>
                                    <Grid item xs={4}>
                                        <label>
                                            Weight Unit
                                        </label>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <SelectDropdown
                                            options={UnitOptions}
                                            defaultValue={!!weightUnit && Object.keys(weightUnit).length ? weightUnit : null}
                                            isDisabled={false}
                                            isClearable={false}
                                            name={'category-select'}
                                            label={null}
                                            labelAlign={'left'}
                                            labelWidth={50}
                                            styles={{}}
                                            onSelectAction={(value) => setWeightUnit(value)}
                                            placeholder={'Unit'}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container alignItems="center" className={classes.inputRow}>
                                    <Grid item xs={4}>
                                        <label>
                                            Select Gender
                                        </label>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <SelectDropdown
                                            options={GenderOptions}
                                            defaultValue={!!gender && Object.keys(gender).length ? gender : null}
                                            isDisabled={false}
                                            isClearable={false}
                                            name={'category-select'}
                                            label={null}
                                            labelAlign={'left'}
                                            labelWidth={150}
                                            styles={{}}
                                            onSelectAction={(value) => setGender(value)}
                                            placeholder={'Gender'}
                                        // required
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container alignItems="center" className={classes.inputRow}>
                                    <Grid item xs={4}>
                                        <label>
                                            Description
                                        </label>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TextField
                                            id='user-message'
                                            type='text'
                                            value={description}
                                            placeholder={'Add Description...'}
                                            label={null}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" alignItems="center" >
                            <Button
                                className={classes.searchButton}
                                size='medium'
                                type='submit'
                                color='secondary'
                                variant='contained'
                                disabled={isLoading}
                                startIcon={isLoading && (
                                    <CircularProgress
                                        className='spinner'
                                        size={20}
                                        color="primary"
                                    />
                                )}
                            >
                                Upload
                            </Button>
                        </Grid>
                    </form>
                </Box>
            </Container>

            {showSnackBar && (
                <SnackBar
                    open={showSnackBar}
                    message={snackBarMessage}
                    onClose={() => setShowSnackBar(false)}
                    variant={snackBarVariant}
                    autoHideDuration={2000}
                />
            )}
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
            minWidth: 200,
            minHeight: 40,
            textTransform: 'capitalize',
            fontWeight: 500,
            borderRadius: '20px',
        },
        filtersBox: {
            padding: theme.spacing(3, 0, 3, 0),
        },
        center: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        inputRow: {
            marginBottom: theme.spacing(2),
        },
        label: {
            marginRight: 10,
            color: 'black',
            fontSize: 14
        }
    })
);

SellPage.defaultProps = {};

export default SellPage;
