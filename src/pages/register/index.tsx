import { Button, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { colors } from '../../utils/Themes'

function Register() {
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
        pt="4%"
      >
        <Heading color="white">BLOG</Heading>
        <Stack
          w="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            w="100%"
            flexDir="row"
            justifyContent="center"
            alignItems="center"
            gap="2%"
          >
            <Input
              w="34%"
              variant="flushed"
              placeholder="Name:"
              color="whitesmoke"
            />
            <Input
              w="34%"
              variant="flushed"
              placeholder="Last Name:"
              color="whitesmoke"
            />
          </Flex>

          <Input
            w="70%"
            variant="flushed"
            placeholder="Username:"
            color="whitesmoke"
          />
          <Input
            w="70%"
            variant="flushed"
            placeholder="Email:"
            color="whitesmoke"
          />
          <Flex
            w="100%"
            flexDir="row"
            justifyContent="center"
            alignItems="center"
            gap="2%"
          >
            <Input
              w="34%"
              variant="flushed"
              placeholder="Password:"
              color="whitesmoke"
            />
            <Input
              w="34%"
              variant="flushed"
              placeholder="Confirm Password:"
              color="whitesmoke"
            />
          </Flex>
        </Stack>
        <Stack
          w="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button w="70%">Register</Button>
          <Button w="70%" colorScheme="blue" onClick={() => navigate('/login')}>
            Sign In
          </Button>
          <Link
            to="/"
            style={{
              color: '#c9c9c9',
              textDecoration: 'underline white'
            }}
          ></Link>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default Register
