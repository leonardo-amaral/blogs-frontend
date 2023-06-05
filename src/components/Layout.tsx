import { HStack, Stack } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Stack flex="1" flexDirection="row" width="100%" height="100vh">
      <Stack w="100%" h="100%" gap="0">
        <HStack w="100%" h="5%" backgroundColor="#2E65F3"></HStack>
        <HStack w="100%" h="100%" gap="0">
          <Stack w="20%" backgroundColor="#e2e2e2" h="100%">
            {Array.from({ length: 5 }).map((item, index) => (
              <div>ITEM</div>
            ))}
          </Stack>
          <Outlet />
        </HStack>
      </Stack>
    </Stack>
  )
}

export default Layout
