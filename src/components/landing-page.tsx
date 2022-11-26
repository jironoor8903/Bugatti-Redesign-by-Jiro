import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Heading,
    Link
  } from '@chakra-ui/react';

const Headings = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://cdn.suwalls.com/wallpapers/cars/black-and-orange-bugatti-veyron-front-side-view-53453-1920x1080.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          {/* <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            The car you have been waiting for!
          </Text> */}
            <Heading size = "2xl" color = "white">
                EXPERIENCE THE BUGATTI CHIRON
            </Heading>
            <Text fontSize= "3xl" color = "white">
                The car you&apos;ve been waiting for.
            </Text>
          <Stack direction={'row'}>
            <Link href='https://www.bugatti.com/chiron/'>
            <Button
              bg={'orange.700'}
              rounded={'full'}
              color={'white'}
             >
              Show me more
            </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default Headings;