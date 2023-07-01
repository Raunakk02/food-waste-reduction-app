// theme/index.js
import { extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

// Global style overrides
// import styles from "./styles";

// Foundational style overrides
// import borders from "./foundations/borders";

// Component style overrides
import Button from './components/button';
import Card from './components/card';
import Tabs from './components/tabs';
import Table from './components/table';

const overrides = {
  colors: {
    brand: {
      blue: '#4586FA',
      darkBlue:"#1C2D57",
      green: '#51EDA1',
      darkGreen: '#24C24D',
      red: '#FF0000',
      gray: '#707070',
      black: '#0A1320',
      yellow: '#FFAF04',
      homeblack:"#10235B",
      verifyGreen:"#24C24D"
    }
  }, 
  fonts:{
    body: 'Exo',
    heading: 'Exo',
    mono: 'Exo',
  },

  components: {
    Button,
    Card,
    Tabs,
    Table,
    Steps
  }
};

export default extendTheme(overrides);
