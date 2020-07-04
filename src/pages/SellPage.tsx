import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Container, Box, Typography } from '@material-ui/core';
import Colors from '../styles/Colors';
import SelectDropdown from "../components/Select/Select";
import TextField from "../components/Textfield";
import { CategoryOptions, CitiesOptions, UnitOptions, GenderOptions } from "../static/_data";
import PhoneInput from 'react-phone-number-input'

interface Props { }

const SellPage: React.FC<Props> = () => {
    const classes = useStyles();
    const [category, setCategory] = React.useState({} as any);
    const [city, setCity] = React.useState({} as any);
    const [gender, setGender] = React.useState({} as any);
    const [weightUnit, setWeightUnit] = React.useState({} as any);
    const [description, setDescription] = React.useState('');

    return (
        <div className={classes.container}>
            <Container maxWidth='xl' className={classes.container}>
                <Box className={classes.filtersBox}>
                    <form>
                    <Grid container spacing={0} alignItems="center" justify="center">
                        <Grid lg={6} md={6} sm={12} xs={12} item>
                            <div className={classes.inputRow}>
                                <SelectDropdown
                                    options={CategoryOptions}
                                    defaultValue={!!category && Object.keys(category).length ? category : null}
                                    isDisabled={false}
                                    isClearable={false}
                                    name={'category-select'}
                                    label={'Select Category'}
                                    labelAlign={'left'}
                                    labelWidth={150}
                                    styles={{}}
                                    onSelectAction={(value) => setCategory(value)}
                                    placeholder={'Select Category'}
                                    // required
                                />
                            </div>
                            <div className={classes.inputRow}>
                                <SelectDropdown
                                    options={CitiesOptions}
                                    defaultValue={!!city && Object.keys(city).length ? city : null}
                                    isDisabled={false}
                                    isClearable={false}
                                    name={'category-select'}
                                    label={'Select City'}
                                    labelAlign={'left'}
                                    labelWidth={150}
                                    styles={{}}
                                    onSelectAction={(value) => setCity(value)}
                                    placeholder={'Select City'}
                                    multiple={true}
                                    // required
                                />
                            </div>
                            <div className={classes.inputRow}>
                                <Typography className={classes.label} style={{ minWidth: 120 }}>
                                    Price
                                    <span className="asterik">*</span>
                                </Typography>
                                <TextField
                                    type="number"
                                    customClassName="form-input"
                                    required
                                />
                            </div>
                            <div className={classes.inputRow}>
                                <Typography className={classes.label} style={{ minWidth: 120 }}>
                                    Contact
                                    <span className="asterik">*</span>
                                </Typography>
                                <TextField
                                    type="number"
                                    required
                                    customClassName="form-input" />
                            </div>
                            <div className={classes.inputRow}>
                                <Typography className={classes.label} style={{ minWidth: 120 }}>
                                    Weight
                                    <span className="asterik">*</span>
                                </Typography>
                                <TextField
                                    type="number"
                                    customClassName="form-input"
                                    pattern="^\d{4}-\d{7}$"
                                    title="Example 0300-1234567"
                                    required
                                />
                                <SelectDropdown
                                    options={UnitOptions}
                                    defaultValue={!!weightUnit && Object.keys(weightUnit).length ? weightUnit : null}
                                    isDisabled={false}
                                    isClearable={false}
                                    name={'category-select'}
                                    label={'Unit*'}
                                    labelAlign={'left'}
                                    labelWidth={50}
                                    styles={{}}
                                    onSelectAction={(value) => setWeightUnit(value)}
                                    placeholder={'Select Unit'}
                                    // required
                                />
                            </div>
                            <div className={classes.inputRow}>
                                <SelectDropdown
                                    options={GenderOptions}
                                    defaultValue={!!gender && Object.keys(gender).length ? gender : null}
                                    isDisabled={false}
                                    isClearable={false}
                                    name={'category-select'}
                                    label={'Gender*'}
                                    labelAlign={'left'}
                                    labelWidth={150}
                                    styles={{}}
                                    onSelectAction={(value) => setGender(value)}
                                    placeholder={'Select Gender'}
                                    // required
                                />
                            </div>
                            <div className={classes.inputRow}>
                                <Typography className={classes.label} style={{ minWidth: 120 }}>
                                    Description
                                </Typography>
                                <TextField
                                    id='user-message'
                                    type='text'
                                    value={description}
                                    placeholder={'Add Description...'}
                                    label={null}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center" >
                        <Button
                            className={classes.searchButton}
                            size='medium'
                            type='submit'
                            color='secondary'
                            variant='contained'>
                            Upload
                        </Button>
                    </Grid>
                    </form>
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
            display: 'flex',
            alignItems: 'center'
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
