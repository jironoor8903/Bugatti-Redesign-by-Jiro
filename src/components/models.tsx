import { Link, SimpleGrid, Heading, GridItem, Card, CardBody, Stack, Image, CardFooter, ButtonGroup, Button, Divider } from '@chakra-ui/react'
import { height } from '@mui/system';
const Models = () => {
  return (
   
    <SimpleGrid columns={[2, null, 3]} spacing='40px'>
    <GridItem>
        <Card maxW='md'>
            <CardBody>
            <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://www.bugatti.com/fileadmin/_processed_/0/3/csm_header_bb5ed9ffbe.jpg'
      borderRadius='lg'
      width={370}
      height={170}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Chiron Super Sport</Heading>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Link href='https://www.bugatti.com/models/chiron-models/chiron-super-sport/' isExternal>
      <Button variant='solid' colorScheme='orange'>
        Buy now
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card> 
        </CardBody>
        <Divider />
        </Card>
    </GridItem>
    <GridItem>
        <Card maxW='md'>
            <CardBody>
            <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://www.topgear.com/sites/default/files/images/cars-road-test/2020/10/b205d9b960dc454b2405e1713fc2320c/05_hockenheim_pur_sport_jet_grey.jpg'
      borderRadius='lg'
      width={370}
      height={170}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Chiron Pur Sport</Heading>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Link href='https://www.bugatti.com/models/chiron-models/chiron-pur-sport/' isExternal>
      <Button variant='solid' colorScheme='orange'>
        Buy now
      </Button>
        </Link>
    </ButtonGroup>
  </CardFooter>
</Card> 
        </CardBody>
        <Divider />
        </Card>
    </GridItem>
    <GridItem>
        <Card maxW='md'>
            <CardBody>
            <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://cdn.motor1.com/images/mgl/rvm0X/s1/bugatti-chiron-sport-les-legendes-du-ciel-three-quarters.jpg'
      width={370}
      height={170}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Chiron</Heading>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Link href='https://www.bugatti.com/models/chiron-models/chiron/' isExternal>
      <Button variant='solid' colorScheme='orange'>
        Buy now
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card> 
        </CardBody>
        <Divider />
        </Card>
    </GridItem>
    </SimpleGrid>
  );
}

export default Models;