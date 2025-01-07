import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

function PerfumeCard({ name, image }) {
  return (
    <Box
      bg="white"
      p={5}
      m={3}
      shadow="md"
      rounded="lg"
      textAlign="center"
      maxW="300px"
      mx={"auto"}
      h={"400px"}
    >
      <Image
        src={image}
        alt={name}
        w="full"
        h="250px"
        objectFit="cover"
        rounded="md"
      />
      <Text mt={3} as="h3" fontSize="lg" fontWeight="bold">
        {name}
      </Text>
    </Box>
  );
}

PerfumeCard.propTypes = {
  name: PropTypes.string.isRequired, // `name` should be a required string
  image: PropTypes.string.isRequired, // `image` should be a required string
};

export default PerfumeCard;
