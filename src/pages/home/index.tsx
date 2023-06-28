import { Box, Flex, Input, Stack } from '@chakra-ui/react'
import { colors } from '../../utils/Themes'

export function Home() {
  return (
    <Stack w="100%" h="100%" gap="0">
      <Box w="100%" h="40vh" backgroundColor={colors.black_600}>
        <Input
          position="absolute"
          h="5vh"
          w="40%"
          borderRadius="10px"
          top="32%"
          left="30%"
          backgroundColor={'white'}
          boxShadow="1px 2px 5px rgba(0,0,0,0.5)"
        />
      </Box>
      <Flex
        w="100%"
        h="100%"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap="5%"
        p="5% 10%"
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <Box
            borderRadius="10px"
            key={index}
            w="30%"
            h="80%"
            backgroundColor="white"
            boxShadow="1px 1px 5px rgba(0,0,0,0.5)"
          >
            <Box
              w="100%"
              h="60%"
              backgroundColor={colors.black_600}
              borderTopStartRadius="10px"
              borderTopEndRadius="10px"
            ></Box>
            <Box p="10px" display="flex" flexDir="column" gap="1vh"></Box>
          </Box>
        ))}
      </Flex>
    </Stack>
  )
}

export default Home
