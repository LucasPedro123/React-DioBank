import {Card} from './components/Card'
import {ChakraProvider} from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Card/>
    </ChakraProvider>
  );
}

export default App;
