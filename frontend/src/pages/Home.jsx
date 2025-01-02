import { Container, Image, VStack, Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Background from "../assets/BG HOME MENU.png";
import NewBackground from "../assets/PERFUME FEMININ/Perfume 13.jpg";
import AnotherImage from "../assets/PERFUME FEMININ/Perfume 2.jpg";
import Image3 from "../assets/PERFUME FEMININ/Perfume 5.jpg";
import Image4 from "../assets/PERFUME FEMININ/Perfume 12.jpg";
import { Button } from "./../components/ui/button";

const MotionBox = motion(Box);

function Home() {
  const variants = {
    hiddenRight: { opacity: 0, x: 100 },
    hiddenLeft: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Box overflow="hidden">
      {/* Top Image Section */}
      <Box
        position="relative"
        height="80vh"
        width="100vw"
        overflow="visible"
        zIndex={0}
      >
        <Image
          src={Background}
          alt="Logo Roven"
          objectFit="cover"
          width="100vw"
          height="100%"
          position="absolute"
          top="-10%"
          left="0"
          zIndex={-1}
        />
      </Box>

      {/* Section with Animations */}
      {[NewBackground, AnotherImage, Image3, Image4].map((image, index) => (
        <Container key={index} maxW="container.xl" py={0.5}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
          >
            {/* Left or Right Image based on index */}
            {index % 2 === 0 ? (
              <>
                {/* Right Image */}
                <MotionBox
                  flex="1"
                  position="relative"
                  height="50vh"
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
                    position="absolute"
                    top="0"
                    left="0"
                  />
                </MotionBox>
                <Box
                  display={{ base: "none", lg: "block" }}
                  width="1px"
                  height="100%"
                  backgroundColor="gray.300"
                  mx={2}
                />
                <Box flex="1" textAlign="center">
                  <VStack align="center" spacing={4}>
                    <Button>Action {index + 1}</Button>
                  </VStack>
                </Box>
              </>
            ) : (
              <>
                <Box flex="1" textAlign="center">
                  <VStack align="center" spacing={4}>
                    <Button>Action {index + 1}</Button>
                  </VStack>
                </Box>
                <Box
                  display={{ base: "none", lg: "block" }}
                  width="1px"
                  height="100%"
                  backgroundColor="gray.300"
                  mx={2}
                />
                {/* Left Image */}
                <MotionBox
                  flex="1"
                  position="relative"
                  height="50vh"
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
                    position="absolute"
                    top="0"
                    left="0"
                  />
                </MotionBox>
              </>
            )}
          </Flex>
        </Container>
      ))}
    </Box>
  );
}

export default Home;
