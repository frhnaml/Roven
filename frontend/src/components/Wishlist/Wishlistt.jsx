import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { MdOutlineFavoriteBorder } from "react-icons/md"; // Import ikon favorite outline
import bg_wishlist from '../../assets/bg_wishlist.jpg';
import Wishlist from '@/pages/Wishlist';

function Wishlistt() {
  return (
    <Box bg="white" minHeight="100vh" display="flex" justifyContent="center" alignItems="center"  bgImage={`url(${bg_wishlist})`}>
      <Container textAlign="center">
        <Flex direction="column" align="center" mb={300}>
          {/* Ikon Hati */}
          <Box mb={1} color="black">
            <MdOutlineFavoriteBorder size={48} />
          </Box>

          {/* Teks Header */}
          <Text fontSize="4xl" fontWeight="bold" color="black">
            My Wishlist
          </Text>
          <Text fontSize="lg" mt={1} color="black">
            Looking for something special?
            
          </Text>
          <Text fontSize="lg" mt={1} color="black">
            Keep track of your favorite items and explore the full lineup of our top picks, all in one place!
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Wishlistt;
