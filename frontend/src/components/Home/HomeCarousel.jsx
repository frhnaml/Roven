import React from 'react';
import { Box, Flex, Text, Link, Image } from '@chakra-ui/react';
import Showcase from "../../assets/MASCULIN PERFUME/Perfume 8.jpg";

function HomeCarousel() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      padding={8}
      bg="white"
    >
      {/* Text Section */}
      <Box flex="1" textAlign={{ base: 'center', md: 'left' }} mb={{ base: 8, md: 0 }}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Try First
        </Text>
        <Text fontSize="md" color="gray.600" mb={6}>
          Sebelum membuat komitmen parfum mana yang mau kamu beli, coba dulu saja. <em>Scent designer kit</em> ini juga akan di personalized tergantung mood dan profile mu.
        </Text>
        <Link href="#" textDecoration="underline" color="blue.500">
          DISCOVER MORE
        </Link>
      </Box>

      {/* Image Section */}
      <Box flex="1" textAlign="center" position={"relative"} right={"-100px"}>
        <Image
          src={Showcase}
          alt="Sample Perfume"
          borderRadius="md"
          boxShadow="sm"
        />
      </Box>
    </Flex>
  );
}

export default HomeCarousel;