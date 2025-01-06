import PropTypes from "prop-types";
import { Container, Image, VStack, Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const MotionBox = motion(Box);

function HighlightedProduct({ image, index, variants }) {
  return (
    <Container maxW="container.xl" py={4}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={4} // Add spacing between items
      >
        {index % 2 === 0 ? (
          <>
            {/* Right Image */}
            <MotionBox
              flex="1"
              width={{ base: "100%", lg: "45%" }} // Full width on small screens, half on large
              height={{ base: "30vh", md: "40vh", lg: "50vh" }} // Adjust height for responsiveness
              mt="2px"
              initial="hiddenLeft" // Slides from left
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                objectFit="cover"
                width="100%"
                height="100%"
                borderRadius="md" // Add rounded corners for better design
              />
            </MotionBox>
            <Box
              display={{ base: "none", lg: "block" }} // Hide on small screens
              width="1px"
              height="100%"
              backgroundColor="gray.300"
              mx={2}
            />
            <Box flex="1" width={{ base: "100%", lg: "45%" }} textAlign="center">
              <VStack align="center" spacing={4}>
                <Button>Action {index + 1}</Button>
              </VStack>
            </Box>
          </>
        ) : (
          <>
            <Box flex="1" width={{ base: "100%", lg: "45%" }} textAlign="center">
              <VStack align="center" spacing={4}>
                <Button>Action {index + 1}</Button>
              </VStack>
            </Box>
            <Box
              display={{ base: "none", lg: "block" }} // Hide on small screens
              width="1px"
              height="100%"
              backgroundColor="gray.300"
              mx={2}
            />
            {/* Left Image */}
            <MotionBox
              flex="1"
              width={{ base: "100%", lg: "45%" }} // Full width on small screens, half on large
              height={{ base: "30vh", md: "40vh", lg: "50vh" }} // Adjust height for responsiveness
              mt="2px"
              initial="hiddenRight" // Slides from right
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                objectFit="cover"
                width="100%"
                height="100%"
                borderRadius="md" // Add rounded corners for better design
              />
            </MotionBox>
          </>
        )}
      </Flex>
    </Container>
  );
}

// Add PropTypes for validation
HighlightedProduct.propTypes = {
  image: PropTypes.string.isRequired, // 'image' must be a string and is required
  index: PropTypes.number.isRequired, // 'index' must be a number and is required
  variants: PropTypes.object.isRequired, // 'variants' must be an object and is required
};

export default HighlightedProduct;
