import React from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import CatalogueCard from '../components/CatalogueCard';
import Navigationbar from '../components/Navbar';

function Home() {
  return (
    <Container maxW="container.xl" mt={10}>
      <Navigationbar />
      <SimpleGrid columns={[1, null, 2, 3]} spacing={10} mt={5}>
        {Array.from({ length: 1 }).map((_, index) => (
          <CatalogueCard key={index} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Home;
