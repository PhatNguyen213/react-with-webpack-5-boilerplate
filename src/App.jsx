import PropTypes from 'prop-types';
import GlobalStyle from './components/styling/GlobalStyle';

const App = ({ title }) => (
  <div>
    <GlobalStyle />
    {title}
  </div>
);

App.propTypes = {
  title: PropTypes.string,
};

export default App;
