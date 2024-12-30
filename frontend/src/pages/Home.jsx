import { Container, Image, VStack, Box, Flex } from "@chakra-ui/react";
import Background from "../assets/BG HOME MENU.png"; // First Image
import NewBackground from "../assets/PERFUME FEMININ/Perfume 13.jpg"; // Second Image
import AnotherImage from "../assets/PERFUME FEMININ/Perfume 2.jpg"; // Third Image
import { Button } from "./../components/ui/button";
import Image3 from "../assets/PERFUME FEMININ/Perfume 5.jpg";
import Image4 from "../assets/PERFUME FEMININ/Perfume 12.jpg";

function Home() {
  return (
    <Box overflow="hidden">
      {" "}
      {/* Wrapping everything in Box to manage overflow and alignment */}
      {/* Top Image Section */}
      <Box
        position="relative"
        height="80vh" // Adjust the image height as needed
        width="100vw" // Make the image span the full width of the viewport
        overflow="visible"
        zIndex={0} // Image stays behind content
      >
        <Image
          src={Background}
          alt="Logo Roven"
          objectFit="cover"
          width="100vw" // Ensure the image covers the entire viewport width
          height="100%" // Keep the image height at 100% of its container height
          position="absolute"
          top="-10%" // Allow the image to overflow vertically
          left="0" // Ensure the image starts from the left edge of the screen
          zIndex={-1} // Ensure image stays behind the content
        />
      </Box>
      {/* First Section: Image on the Right, Button on the Left */}
      <Container maxW="container.xl" py={0.5}>
        {" "}
        {/* Reduced the padding to 0 */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Left Section: Button */}
          <Box flex="1" textAlign="center">
            <VStack align="center" spacing={4}>
              <Button>Mewing</Button>
            </VStack>
          </Box>

          {/* Divider Line */}
          <Box
            display={{ base: "none", lg: "block" }} // Only show the divider on larger screens
            width="1px"
            height="100%"
            backgroundColor="gray.300" // Light gray color for the line
            mx={2} // Reduced margin for horizontal closeness
          />

          {/* Right Section: Image */}
          <Box flex="1" position="relative" height="50vh" mt="-4px">
            {" "}
            {/* Adjusted margin-top to remove space */}
            <Image
              src={NewBackground} // New image for the first section
              alt="New Image"
              objectFit="cover"
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              left="0"
            />
          </Box>
        </Flex>
      </Container>
      {/* Second Section: Image on the Left, Button on the Right */}
      <Container maxW="container.xl" py={0.5}>
        {" "}
        {/* Reduced the padding to 0 */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Left Section: Image */}
          <Box flex="1" position="relative" height="50vh" mt="-4px">
            {" "}
            {/* Adjusted margin-top to remove space */}
            <Image
              src={AnotherImage} // New image for the second section
              alt="Another Image"
              objectFit="cover"
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              left="0"
            />
          </Box>

          {/* Divider Line */}
          <Box
            display={{ base: "none", lg: "block" }} // Only show the divider on larger screens
            width="1px"
            height="100%"
            backgroundColor="gray.300" // Light gray color for the line
            mx={-2} // Reduced margin for horizontal closeness
          />

          {/* Right Section: Button */}
          <Box flex="1" textAlign="center">
            <VStack align="center" spacing={4}>
              <Button>New Action</Button>
            </VStack>
          </Box>
        </Flex>
      </Container>
      <Container maxW="container.xl" py={0.5}>
        {" "}
        {/* Reduced the padding to 0 */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Left Section: Button */}
          <Box flex="1" textAlign="center">
            <VStack align="center" spacing={4}>
              <Button>Mewing</Button>
            </VStack>
          </Box>

          {/* Divider Line */}
          <Box
            display={{ base: "none", lg: "block" }} // Only show the divider on larger screens
            width="1px"
            height="100%"
            backgroundColor="gray.300" // Light gray color for the line
            mx={2} // Reduced margin for horizontal closeness
          />

          {/* Right Section: Image */}
          <Box flex="1" position="relative" height="50vh" mt="-4px">
            {" "}
            {/* Adjusted margin-top to remove space */}
            <Image
              src={Image3} // New image for the first section
              alt="New Image"
              objectFit="cover"
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              left="0"
            />
          </Box>
        </Flex>
      </Container>
      <Container maxW="container.xl" py={0.5}>
        {" "}
        {/* Reduced the padding to 0 */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Left Section: Image */}
          <Box flex="1" position="relative" height="50vh" mt="-4px">
            {" "}
            {/* Adjusted margin-top to remove space */}
            <Image
              src={Image4} // New image for the second section
              alt="Another Image"
              objectFit="cover"
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              left="0"
            />
          </Box>

          {/* Divider Line */}
          <Box
            display={{ base: "none", lg: "block" }} // Only show the divider on larger screens
            width="1px"
            height="100%"
            backgroundColor="gray.300" // Light gray color for the line
            mx={-2} // Reduced margin for horizontal closeness
          />

          {/* Right Section: Button */}
          <Box flex="1" textAlign="center">
            <VStack align="center" spacing={4}>
              <Button>New Action</Button>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Home;
