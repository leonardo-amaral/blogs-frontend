import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack
} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/layout.css' // Importe o arquivo CSS
import { colors } from '../utils/Themes'

const routesNavigations = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Criar', path: '/create' }
]

function Layout() {
  return (
    <Flex w="100%" h="100vh" flexDir="column" alignItems="center">
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        pl="10%"
        w="100%"
        height="10%"
        backgroundColor={colors.black_1000}
      >
        <Heading color="white">BLOG</Heading>
        <Flex w="30%" flexDir="row" alignItems="center" gap="15%">
          {routesNavigations.map((item, index) => (
            <Link key={index} className="link" to={item.path}>
              {item.name}
            </Link>
          ))}
          <Menu>
            <MenuButton
              w="40px"
              h="40px"
              backgroundColor="white"
              p="10px"
              borderRadius="100px"
            ></MenuButton>
            <MenuList>
              <MenuItem>Account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Stack>
      <Outlet />
    </Flex>
  )
}

export default Layout
