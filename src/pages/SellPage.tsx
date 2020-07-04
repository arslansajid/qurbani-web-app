import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Container } from '@material-ui/core';
import Colors from '../styles/Colors';
import SelectDropdown from "../components/Select/Select";
import {CategoryOptions, CitiesOptions} from "../static/_data";

interface Props {}

const SellPage: React.FC<Props> = () => {
    const classes = useStyles();
    const [category, setCategory] = React.useState(null)
    const [city, setCity] = React.useState(null)

    return (
        <div className={classes.container}>
            <Container maxWidth='xl'>
                SellPage
                <SelectDropdown
                    options={CategoryOptions}
                    defaultValue={category}
                    isDisabled={false}
                    isClearable={false}
                    name={'category-select'}
                    label={'Select Category'}
                    labelAlign={'left'}
                    labelWidth={150}
                    styles={{}}
                    onSelectAction={(value) => setCategory(value)}
                    placeholder={'Select Category'}
                />
                <SelectDropdown
                    options={CitiesOptions}
                    defaultValue={city}
                    isDisabled={false}
                    isClearable={false}
                    name={'category-select'}
                    label={'Select City'}
                    labelAlign={'left'}
                    labelWidth={150}
                    styles={{}}
                    onSelectAction={(value) => setCity(value)}
                    placeholder={'Select City'}
                />
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

SellPage.defaultProps = {};

export default SellPage;
