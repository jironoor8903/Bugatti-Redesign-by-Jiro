import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const Testimonial = () => {
  return (
    <Stack
      py={6}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        "Well what color is your Bugatti?"
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://upload.wikimedia.org/wikipedia/commons/f/f1/Andrew_Tate_on_%27Anything_Goes_With_James_English%27_in_2021.jpg'
          }
          mb={2}
        />

        <Text fontWeight={600}>George Washington or someone</Text>
      </Box>
    </Stack>
  );
};

export default Testimonial;

{/* <Card maxW='sm'>
    <CardBody>
      <Stack spacing='3'>
        <Text>
          "Well what color is your bugatti"
        </Text>
        <Heading size='md' text-align='right' size = 'small'>- George Washington or someone</Heading>
      </Stack>
    </CardBody>
    <Divider />
  </Card> */}

//   <Grid templateColumns='repeat(3, 1fr)' gap={6} mt = {7}>
//   <GridItem>
//     <Card maxW='md'>
//         <CardBody>
//         <Stack spacing='110'>
//         <Text>
//           "Well what color is your bugatti?"
//         </Text>
//         <Wrap align = 'right' pl = '95px'>
//         <WrapItem>
//         <Avatar name='Dan Abrahmov' src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Andrew_Tate_on_%27Anything_Goes_With_James_English%27_in_2021.jpg' />
//         </WrapItem>
//         <WrapItem>
//         <Heading size='md' align='right' size = 'small' mt = {4}>George Washington or someone</Heading>
//         </WrapItem>
//         </Wrap>
//         </Stack>
//       </CardBody>
//       <Divider />
//     </Card>
//   </GridItem>
//   <GridItem>
//     <Card maxW='md'>
//         <CardBody>
//         <Stack spacing='130'>
//         <Text>
//           "Well what color is your bugatti?"
//         </Text>
//         <Heading size='md' align='right' size = 'small'>- George Washington or someone</Heading>
//         </Stack>
//       </CardBody>
//       <Divider />
//     </Card>
//   </GridItem>
//   <GridItem>
//     <Card maxW='md'>
//         <CardBody>
//         <Stack spacing='130'>
//         <Text>
//           "Well what color is your bugatti?"
//         </Text>
//         <Heading size='md' align='right' size = 'small'>- George Washington or someone</Heading>
//         </Stack>
//       </CardBody>
//       <Divider />
//     </Card>
//   </GridItem>

// </Grid>