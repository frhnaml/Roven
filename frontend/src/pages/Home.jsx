import { Box, Image } from "@chakra-ui/react";
import Background from "../assets/BG HOME MENU.png";

function Home() {
  return (
    <Box position="relative" h="100vh" w="100vw" overflow="hidden">
      <Image
        src={Background}
        alt="Background"
        objectFit="cover"
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
      />
    </Box>
  );
}

export default Home;
