import {Flex} from '@chakra-ui/react'
import Calculator from './components/Calculator'


function App() {

  return (
    <Flex direction = "column" alignItems= "center" minH = "100vh" bg = "linear-gradient(90deg, rgba(252,165,109,1) 62%, rgba(255,255,255,1) 100%)" p = "2rem">
      <Calculator />
    </Flex>
  )
}

export default App
