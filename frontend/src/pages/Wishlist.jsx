import React from 'react';
import Wishlistt from '../components/Wishlist/Wishlistt.jsx';
import { Box, Container, VStack } from '@chakra-ui/react';

function Wishlist() {
  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={8} align="stretch">
        {/* Apply margin-top to avoid overlap with StickyBox */}
        <Box mt="60px" mb={-10}>
          <Wishlistt />
        </Box>
      </VStack>
    </Container>
  );
}

export default Wishlist;
