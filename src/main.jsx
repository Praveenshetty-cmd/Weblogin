import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'; 

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>,
);
