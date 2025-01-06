import { useState, useEffect } from "react";
import { Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiAccountCircle2Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import logo from "../../assets/Logo Roven.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      maxW="100%"
      position="fixed"
      top="0"
      zIndex="1000"
      backgroundColor={isScrolled ? "white" : "transparent"}
      transition="background-color 0.3s ease"
      boxShadow={isScrolled ? "md" : "none"}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Link to={"/"}>
          <Image
            src={logo}
            alt="Logo"
            py={5}
            boxSize={{ base: "100px", sm: "120px" }}
            objectFit="contain"
          />
        </Link>

        <HStack spacing={6} alignItems={"center"}>
          <Text>
            <Link to={"/home"}>Best Sellers</Link>
          </Text>
          <Text>
            <Link to={"/login"}>Login</Link>
          </Text>
          <Text>
            <Link to={"/home"}>Test</Link>
          </Text>
          <Text>
            <Link to={"/home"}>Test</Link>
          </Text>
        </HStack>

        <HStack spacing={6} alignItems={"center"} ml="auto">
          <Link to={"/login"}>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              color="black"
            >
              <RiAccountCircle2Line />
            </Button>
          </Link>

          <Link to={"/login"}>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              color="black"
            >
              <IoMdSearch />
            </Button>
          </Link>

          <Link to={"/login"}>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              color="black"
            >
              <IoBagOutline />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
