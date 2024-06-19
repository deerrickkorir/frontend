import React from 'react';
import {
  Card,
  CardBody,
  Text,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button
} from '@chakra-ui/react';

function CatalogueCard() {
  return (
    <Card maxW="xs" boxShadow="lg">
      <CardBody>
        <Image
          src="https://m.media-amazon.com/images/I/61W7DAkVZWL._AC_SX522_.jpg"
          alt="Headlight"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">TOYOTA HIGHLANDER HEADLIGHT</Heading>
          <Text>
            This item cannot be shipped to your selected delivery location. Please choose a different delivery location.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $61.19
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CatalogueCard;
