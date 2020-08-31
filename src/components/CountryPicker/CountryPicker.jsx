import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ changedCountry }) => {

    const [fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
        const fetchedAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchedAPI();
    },[setFetchedCountries])

    return (
        <FormControl className={ styles.formControl } >
            <NativeSelect autoWidth="true" default='' onChange={ (event) => changedCountry(event.target.value) }>
                <option value="">Global</option>
                {
                    fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>

    );
};

export default CountryPicker;