import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { Link } from "react-router";
import { FcDataBackup } from "react-icons/fc";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMoon } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500, purple.600)"}
          bgClip={"text"}
        >
          <Link to={"/"}>
            {" "}
            <FcDataBackup /> RovenShop
          </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/account"}>
            <Button>
              <RiAccountPinBoxLine fontSize={20} />
            </Button>
          </Link>

          <Link to={"/wishlist"}>
            <Button>
              <FaRegHeart fontSize={20} />
            </Button>
          </Link>

          <Link to={"/items"}>
            <Button>
              <HiOutlineShoppingBag fontSize={20} />
            </Button>
          </Link>

          <Link to={"/bestseller"}>
            <Button>
              <LuShoppingBag />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <IoSunnyOutline />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
