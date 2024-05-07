import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#FDEED1', // Your desired background color
      },
    },
  },
});

export default theme;