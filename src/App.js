import { Box } from '@chakra-ui/react';
import Areas from './components/Area';
import Competitions from './components/Competitions';

function App() {
  return (
    <Box>
      <Competitions />
      <Areas />
    </Box>
  );
}

export default App;
