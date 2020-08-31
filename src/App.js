import React from 'react';
import { Cards, CountryPicker, Chart} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaLogo from './images/covid19.png';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data : fetchedData});
  }

  onSelectCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      ...this.state,
      data: fetchedData,
      country : country,
    })
  }

  render() {
    const {data,country} = this.state;
    return (
      <div className={styles.container}>
        <img src={coronaLogo} className={styles.image} alt="COVID-19"/>
        <Cards data={data} />
        <CountryPicker country = {country} changedCountry={ this.onSelectCountry } />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
