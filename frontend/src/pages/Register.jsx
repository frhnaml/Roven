import React from "react";
import { Container, Box, Input, Button, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      onSubmit={onSubmit}
      style={{
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
        paddingTop: "20vh",
      }}
    >
      <VStack mt={8} spacing={4} align="center">
        <Text fontSize="2xl" fontWeight="bold" color="black">
          Register
        </Text>
        <Text fontSize="sm" color="gray.600">
          Please fill in the information below:
        </Text>

        <Box width="100%">
          <Text
            mb={1}
            fontSize="sm"
            color={errors.firstName ? "red.500" : "gray.600"}
          >
            First name
          </Text>
          <Input
            {...register("firstName", { required: "First name is required" })}
            placeholder="First name"
            size="md"
            focusBorderColor="black"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            isInvalid={!!errors.firstName}
          />
          <Text mt={1} fontSize="xs" color="red.500">
            {errors.firstName?.message}
          </Text>
        </Box>

        <Box width="100%">
          <Text
            mb={1}
            fontSize="sm"
            color={errors.lastName ? "red.500" : "gray.600"}
          >
            Last name
          </Text>
          <Input
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Last name"
            size="md"
            focusBorderColor="black"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            isInvalid={!!errors.lastName}
          />
          <Text mt={1} fontSize="xs" color="red.500">
            {errors.lastName?.message}
          </Text>
        </Box>

        <Box width="100%">
          <Text
            mb={1}
            fontSize="sm"
            color={errors.email ? "red.500" : "gray.600"}
          >
            Email
          </Text>
          <Input
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            size="md"
            focusBorderColor="black"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            isInvalid={!!errors.email}
          />
          <Text mt={1} fontSize="xs" color="red.500">
            {errors.email?.message}
          </Text>
        </Box>

        <Box width="100%">
          <Text
            mb={1}
            fontSize="sm"
            color={errors.password ? "red.500" : "gray.600"}
          >
            Password
          </Text>
          <Input
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            type="password"
            size="md"
            focusBorderColor="black"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            isInvalid={!!errors.password}
          />
          <Text mt={1} fontSize="xs" color="red.500">
            {errors.password?.message}
          </Text>
        </Box>

        <Button
          type="submit"
          width="100%"
          bg="black"
          color="white"
          _hover={{ bg: "gray.800", cursor: "pointer" }}
        >
          CREATE MY ACCOUNT
        </Button>
      </VStack>
    </form>
  );
}

export default Register;
