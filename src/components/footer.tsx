import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Button,
    Link
  } from '@chakra-ui/react';
  import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';

const Footer = () => {
  return (
  
    <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}>
    <Container
      as={Stack}
      maxW={'6xl'}
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}>
      <Text>© Made by Jiro Noor</Text>
      <Stack direction={'row'} spacing={6}>
        <Link href='https://twitter.com/jiro_noor' isExternal>
            <FaTwitter />
        </Link>
        <Link href='https://www.instagram.com/nolimitjiro/' isExternal>
            <FaInstagram />
        </Link>
        <Link href='https://github.com/jironoor8903' isExternal>
          <FaGithub />
        </Link>
      </Stack>
    </Container>
  </Box>
  );
}

export default Footer;