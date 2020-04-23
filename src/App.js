import React from 'react';

import { fetchData } from './api';

// components
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import LastUpdated from './components/LastUpdated/LastUpdated';

import styles from './App.module.css';
import coronaImage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data })
    }

    handleCountryChange = async (country) => {
        // fetch the data
        const data = await fetchData(country);

        // set the state
        this.setState({ data, country })
    }

    render () {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <LastUpdated data={data} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;