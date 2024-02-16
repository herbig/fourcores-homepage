import { Text, VStack, Link } from '@chakra-ui/react'

function App() {
  return (
    <VStack paddingTop='10rem'>
      <Text fontSize='xxx-large'>
        Coming Soon
      </Text>
      <Text>
        A collection of community built <Link color='teal' isExternal href='https://sorcerytcg.com/'>Sorcery TCG</Link> software projects.
      </Text>
    </VStack>
  )
}

export default App
