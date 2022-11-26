import { Box, Flex, Heading, Button, Spacer, Image, ButtonGroup } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex align = "center" bg= "black">
        <Image src="logos.svg" alt="Notiom logo" w={105} ml={6} />
        <Spacer />
        <Flex justify="space-between" mr = {6}>
                <ButtonGroup variant="link" spacing="8">
        {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
            <Button key={item}>{item}</Button>
        ))}
        </ButtonGroup>
        </Flex>
    </Flex>
  );
};

export default NavBar;

