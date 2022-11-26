import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

const Features = () => {
    return (
        <Box bg={'orange.800'} position={'relative'}>
        <Flex
          flex={1}
          zIndex={0}
          display={{ base: 'none', lg: 'flex' }}
          backgroundImage="url(https://wallpapers.com/images/hd/black-and-orange-bugatti-car-6efla6i1tpjpj6at.jpg)"
        //   backgroundImage="url('/templates/stats-grid-with-image.png')"
          backgroundSize={'cover'}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          position={'absolute'}
          width={'50%'}
          insetY={0}
          right={0}>
          {/* <Flex
            bgGradient={'linear(to-r, gray.800 10%, transparent)'}
            w={'full'}
            h={'full'}
          /> */}
        </Flex>
        <Container maxW={'7xl'} zIndex={10} position={'relative'}>
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Stack
              flex={1}
              color={'gray.400'}
              justify={{ lg: 'center' }}
              py={{ base: 4, md: 20, xl: 60 }}>
              <Box mb={{ base: 8, md: 20 }}>
                {/* <Text
                  fontFamily={'heading'}
                  fontWeight={700}
                  textTransform={'uppercase'}
                  mb={3}
                  fontSize={'xl'}
                  color={'gray.500'}>
                  Features
                </Text> */}
                <Heading
                  color={'white'}
                  mb={5}
                  fontSize={{ base: '3xl', md: '5xl' }}>
                  Best Automobile in the World
                </Heading>
                <Text fontSize={'xl'} color={'gray.400'}>
                The CHIRON is the fastest, most powerful, and exclusive production super sports car in BUGATTI's history
                </Text>
              </Box>
  
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {stats.map((stat) => (
                  <Box key={stat.title}>
                    <Text
                      fontFamily={'heading'}
                      fontSize={'3xl'}
                      color={'white'}
                      mb={3}>
                      {stat.title}
                    </Text>
                    <Text fontSize={'xl'} color={'gray.400'}>
                      {stat.content}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Box>
    );
  }
  
  const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={'span'} fontWeight={700} color={'white'}>
      {children}
    </Text>
  );
  
  const stats = [
    {
      title: '304 mph',
      content: (
        <>
        A <StatsText>one-of-a-kind</StatsText> in automotive history and a technological masterpiece.
        </>
      ),
    },
    {
      title: '$3 million dollars',
      content: (
        <>
          <StatsText>Only</StatsText> a little amount of money needed for this car
        </>
      ),
    },
    {
      title: '1479 horsepower',
      content: (
        <>
          <StatsText>W16 Bugatti engine</StatsText> beats the competition
        </>
      ),
    },
    {
      title: 'Luxury Interior',
      content: (
        <>
          <StatsText>Italian</StatsText> premium leather for luxury comfort inside
        </>
      ),
    },
  ];
  
  
  export default Features;