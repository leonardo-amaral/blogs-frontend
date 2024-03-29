import { Button, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { colors } from '../../utils/Themes'

function Login() {
  const navigate = useNavigate()

  return (
    <Flex
      w="100%"
      h="100vh"
      bgGradient={`linear(to-l, ${colors.black_200}, ${colors.black_1000})`}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        w="25%"
        h="60%"
        backgroundColor={colors.black_800}
        display="flex"
        flexDir="column"
        alignItems="center"
        borderRadius="10px"
        gap="10%"
        pt="5%"
      >
        <Heading color="white">BLOG</Heading>
        <Stack
          w="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Input
            w="70%"
            variant="flushed"
            placeholder="Username:"
            color="whitesmoke"
          />
          <Input
            w="70%"
            variant="flushed"
            placeholder="Password:"
            color="whitesmoke"
          />
        </Stack>
        <Stack
          w="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button w="70%" onClick={() => navigate('/')}>
            Login
          </Button>
          <Button
            w="70%"
            colorScheme="blue"
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
          <Link
            to="/"
            style={{
              color: '#c9c9c9',
              textDecoration: 'underline white'
            }}
          >
            Forgot your password?
          </Link>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default Login
