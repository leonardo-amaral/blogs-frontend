import { HStack } from '@chakra-ui/react'
import Content from './components/Content'
import Form from './components/Form'

function Login() {
  return (
    <HStack w="100vw" h="100vh" flex="1" gap="0">
      <Form />
      <Content />
    </HStack>
  )
}

export default Login
