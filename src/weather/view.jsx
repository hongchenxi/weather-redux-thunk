import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Status from './status';

const Weather = ({ status, cityName, weather, lowersTemp, highestTemp }) => {
  switch (status) {
    case Status.LOADING: {
      return <div>loading...</div>;
    }
    case Status.SUCCESS: {
      return (
        <div>
          {cityName} {weather} 最低温度 {lowersTemp} 最高温度 {highestTemp}
        </div>
      );
    }
    case Status.FAILURE: {
      return <div>loading fail...</div>;
    }
    default: {
      throw new Error('unexpected status', status);
    }
  }
};

Weather.propTypes = {
  status: PropTypes.string.isRequired,
  cityName: PropTypes.string,
  weather: PropTypes.string,
  lowersTemp: PropTypes.string,
  highestTemp: PropTypes.string,
};

const mapStateToProps = (state) => {
  const weatherData = state.weather;
  const {
    status,
    city: cityName,
    weather,
    temp1: lowersTemp,
    temp2: highestTemp,
  } = weatherData;
  return {
    status,
    cityName,
    weather,
    lowersTemp,
    highestTemp,
  };
};

export default connect(mapStateToProps)(Weather);
